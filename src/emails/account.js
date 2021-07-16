const mailgun = require("mailgun-js");
const DOMAIN = 'sandbox7c063ce97c504fdeac904814c27c991a.mailgun.org';

const mg = mailgun({ apiKey: process.env.MAIL_GUN_API_KEY, domain: DOMAIN });

// const data = {
//     from: 'Excited User <me@samples.mailgun.org>',
//     to: 'sharmatest03@gmail.com',
//     subject: 'Hello',
//     text: 'Testing some Mailgun awesomness!'
// };
// mg.messages().send(data, function (error, body) {
//     console.log(body);
// });

const sendWelcomeMail = (email, name) => {
    const data = {
        from: 'Excited User <me@samples.mailgun.org>',
        to: email,
        subject: 'Welcome to App',
        text: `Welcome to app, ${name}. Let me know how to get along with the app.`
    };
    mg.messages().send(data, function (error, body) {
        console.log(body);
    });
}

const cancelationMail = (email, name) => {
    const data = {
        from: 'Excited User <me@samples.mailgun.org>',
        to: email,
        subject: 'Good Bye to App',
        text: `Good Bye! to app, ${name}. Let me know how to get onboard you in the app.`
    };
    mg.messages().send(data, function (error, body) {
        console.log(body);
    });
}

module.exports = {
    sendWelcomeMail,
    cancelationMail
}