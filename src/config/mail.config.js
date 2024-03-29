import NodeMailer from "nodemailer";
import dotenv from 'dotenv'
dotenv.config()

const getMailerConfig = () => {
    return NodeMailer.createTransport({
        port: Number(process.env.SMTP_PORT),
        host: process.env.MAIL_HOST,
        auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD
        },
    });
}

export default getMailerConfig;
