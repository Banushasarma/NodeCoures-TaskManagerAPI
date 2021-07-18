const request = require('supertest');
const app = require('../src/app')
const User = require('../src/models/User');
const { userOneId, userOne, setupDatabase } = require('./fixtures/db')

beforeEach(setupDatabase)

test('should signup a new user', async () => {
    const response = await request(app).post('/users').send({
        name: 'Andrew',
        email: 'andrew1@gmail.com',
        password: 'MyPass777!'
    }).expect(201)

    //Assert that the database response was changed correctly
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    //Assertions about the response
    expect(response.body).toMatchObject({
        user: {
            name: 'Andrew',
            email: 'andrew1@gmail.com',
        },
        token: user.tokens[0].token
    })

    expect(user.password).not.toBe('MyPass777!')
})

test('should login existing user', async () => {
    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)

    const user = await User.findById(response.body.user._id)
    expect(response.body.token).toBe(user.tokens[1].token)
})

test('should not login non existing user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: 'abana'
    }).expect(500)
})

test('should get profile for user', async () => {
    await request(app).get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('should not get profile for unauthorized user', async () => {
    await request(app).get('/users/me')
        .send()
        .expect(401)
})


test('should update correct user name', async () => {
    const response = await request(app).patch('/users/me').send({
        name: 'Andrew Mead'
    })
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .expect(200)

    //Assert that the database response was changed correctly
    const user = await User.findById(userOneId)

    //Assertions about the response
    expect(user.name).toEqual('Andrew Mead')
})

test('should update not update incorrect field', async () => {
    const response = await request(app).patch('/users/me').send({
        location: 'Jaffna'
    })
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .expect(400)
})


test('should delete a user', async () => {
    await request(app).delete('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
    const user = await User.findById(userOneId)
    expect(user).toBe(null)
})

test('should not delete unauthorized user', async () => {
    await request(app).delete('/users/me')
        .send()
        .expect(401)
})

test('should upload avatar image', async () => {
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .attach('avatar', 'tests/fixtures/profile-pic.jpg')
        .expect(200)

    const user = await User.findById(userOneId)
    expect(user.avatar).toEqual(expect.any(Buffer))
})
