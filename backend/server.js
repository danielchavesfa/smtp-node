import express from 'express';
import helmet from 'helmet';
import nodemailer from 'nodemailer';
import corsConfig from './src/middlewares/corsConfig.js';

const server = express();
const port = process.env.PORT || 8080;
const errorCodes = {
  NAME_MISSING: 1 << 0,
  EMAIL_MISSING: 1 << 1,
  MESSAGE_MISSING: 1 << 2,
};

function checkIfThereAreMissingFields(fields) {
  const { senderName, senderEmail, senderMessage } = fields;
  let errorStatus = 0;

  if (!senderName) errorStatus |= errorCodes.NAME_MISSING;
  if (!senderEmail) errorStatus |= errorCodes.EMAIL_MISSING;
  if (!senderMessage) errorStatus |= errorCodes.MESSAGE_MISSING;

  return errorStatus;
}

function createResponseStatus(statusNumber, message) {
  return {
    status: statusNumber,
    message: message,
  };
}

function confirmAndSendMessagesAboutPossibleErrors(errorStatus) {
  if (!errorStatus)
    return createResponseStatus(200, 'Mensagem enviada. Obrigado! 👋');

  const errorMessages = [];

  if (errorStatus & errorCodes.NAME_MISSING) {
    errorMessages.push(
      'Seu nome deve ser preenchido! Como eu vou saber com quem estou falando? 😉'
    );
  }

  if (errorStatus & errorCodes.EMAIL_MISSING) {
    errorMessages.push(
      'Preencha seu email! Como eu vou te responder, por sinal de fumaça? 🤣.'
    );
  }

  if (errorStatus & errorCodes.MESSAGE_MISSING) {
    errorMessages.push(
      'Oxi, quer falar comigo, mas não vai mandar a mensagem não? 🤔'
    );
  }

  return createResponseStatus(422, errorMessages);
}

function createTransportSMTP() {
  return nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
}

async function sendEmail(reqBody) {
  try {
    if (!reqBody)
      throw new Error('Informações para envio de email incorretas.');

    const { senderName, senderEmail, senderMessage } = reqBody;
    const mailOptions = {
      from: process.env.EMAIL,
      to: 'danielchavesfa@hotmail.com',
      subject: `"Contato do Portifólio: ${senderName}" <${senderEmail}>`,
      text: senderMessage,
    };
    const info = await createTransportSMTP().sendMail(mailOptions);

    console.log(`Mensagem enviada: ${info.messageId}`);
  } catch (error) {
    console.log(error);
  }
}

server.use(corsConfig);
server.use(helmet());
server.use(express.json());

server.post('/contact', async (req, res) => {
  const errorStatus = checkIfThereAreMissingFields(req.body);
  const { message, status } =
    confirmAndSendMessagesAboutPossibleErrors(errorStatus);

  if (status === 200) {
    try {
      await sendEmail(req.body);
      res.status(status).json({ message: message });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  }
});

server.listen(port, console.log(`Server running at port: ${port}`));
