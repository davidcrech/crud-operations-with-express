const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
    // create transporter
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    // define email options
    const mailOptions = {
        from: 'David C. <teste123@david.io>',
        to: options.email,
        subject: options.subject,
        text: options.message
        // html:
    };

    // send the email
    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
