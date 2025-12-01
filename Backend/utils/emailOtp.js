const nodemailer = require('nodemailer');

const sendEmailOtp = async (toEmail, otp) => {

    // const transporter = nodemailer.createTransport({
    //     service: 'Gmail',
    //     auth: {
    //         user: process.env.GMAIL_USER,
    //         pass: process.env.GMAIL_PASS
    //     },
    // });

    const transporter = nodemailer.createTransport({
        host: process.env.BREVO_SMTP_Server,
        port: process.env.BREVO_Port,
        auth: {
            user: process.env.BREVO_Login,
            pass: process.env.BREVO_SMPT_KEY
        }
    });


    const mailOptions = {
        from: process.env.BREVO_SCOURCE_CREATED_ON_GMAIL,
        to: toEmail,
        subject: 'Your CareerWave OTP Code',
        html: `<h3>Your OTP is: <b>${otp}</b></h3> 
                <p>This OTP is valid for 5 minutes.</p>`,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendEmailOtp;