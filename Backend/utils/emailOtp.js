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
        host: process.env.BREVO_SMTP_SERVER,
        port: process.env.BREVO_PORT,
        auth: {
            user: process.env.BREVO_LOGIN,
            pass: process.env.BREVO_SMTP_KEY
        }
    });

    const mailOptions = {
        from: process.env.BREVO_SOURCE_EMAIL,
        to: toEmail,
        subject: 'Your CareerWave OTP Code',
        text: `Your CareerWave OTP is: ${otp}. This OTP is valid for 5 minutes.`,
        html: `<!doctype html>
        <html>
        <body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,Helvetica,sans-serif;color:#333;">
            <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
                <td align="center" style="padding:30px 12px;">
                <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;margin:0 auto;padding:24px;border:1px solid #e6e9ee;">
                    <tr>
                    <td style="text-align:center;padding-bottom:12px;">
                        <img src="https://learn.careerwave.org/images/companyLogo/1744809333.png" alt="CareerWave" style="max-width:160px;height:auto;display:block;margin:0 auto;">
                    </td>
                    </tr>
                    <tr>
                    <td style="padding:8px 0 6px 0;font-size:18px;font-weight:600;color:#111;text-align:center;">
                        Your CareerWave verification code
                    </td>
                    </tr>
                    <tr>
                    <td style="padding:0 0 18px 0;font-size:14px;color:#555;text-align:center;">
                        Use the code below to complete your sign-in. This code expires in 5 minutes.
                    </td>
                    </tr>
                    <tr>
                    <td align="center" style="padding:10px 0 20px 0;">
                        <div style="display:inline-block;background:#0b74de;color:#ffffff;padding:14px 24px;border-radius:8px;font-size:22px;font-weight:700;letter-spacing:2px;">
                        ${otp}
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <td style="padding:0 0 12px 0;font-size:13px;color:#777;text-align:center;">
                        If you did not request this, please ignore this email. For help, contact your support team.
                    </td>
                    </tr>
                    <tr>
                    <td style="padding-top:14px;border-top:1px solid #eef2f6;font-size:12px;color:#999;text-align:center;">
                        © ${new Date().getFullYear()} CareerWave — Secure authentication
                    </td>
                    </tr>
                </table>
                </td>
            </tr>
            </table>
        </body>
        </html>`
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendEmailOtp;