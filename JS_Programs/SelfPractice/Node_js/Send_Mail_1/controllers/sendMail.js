const nodeMailer = require('nodemailer');

const sendMail = async (req, res) => {
    let testAccount = await nodeMailer.createTestAccount();

    let transporter = nodeMailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: 'lelah.zemlak63@ethereal.email',
            pass: 'nMRcGgQvbmkK4AgKpy'
        },
    });

    let info = await transporter.sendMail({
        from: '"Meena ji" <meena@1214>',
        to: "dm2000353@gmail.com",
        subject: "Hello Ankit",
        text: "Hello Ankit Meena",
        html: "<b>Hello Ankit Meena InfoBeans</b>",
    });

    console.log("Massage Send To", info.messageId);

    res.json(info);
}
module.exports = sendMail;