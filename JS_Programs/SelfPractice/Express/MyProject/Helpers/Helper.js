import nodemailer from 'nodemailer';

export class Helpers {
    async sendMail(data, template) {
        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            port: process.env.EMAIL_PORT || 465,               // true for 465, false for other ports
            host: process.env.EMAIL_HOST || "smtp.gmail.com",
            auth: {
                user: process.env.ADMIN_EMAIL || 'deepakmeenaa78@gmail.com',
                pass: process.env.EMAIL_APP_PASSWOD || 'cjys vcpn jptc olqe',
            },
            secure: true,
        });
        const mailData = {
            from: process.env.ADMIN_EMAIL || "deepakmeenaa78@gmail.com",  // sender address
            to: data.email,   // list of receivers
            subject: data.subject,
            html: template
        };

        transporter.sendMail(mailData, function (err, info) {
            if (err)
                console.log(err)
            else
                console.log(info);
        });
        return
    }

    generateOtp(limit, type = "digit") {
        let characters = "0123456789";
        if (type === "string") {
            characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        }
        let otp = "";
        for (let i = 0; i < limit; i++) {
            otp += characters[Math.floor(Math.random() * characters.length)];
        }
        return otp;
    }
}