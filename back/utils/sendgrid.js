const sgMail = require('@sendgrid/mail');
const fs = require('fs');
const path = require('path');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const templatePath = path.join('templates', 'thankyou_email.html');
let templateBody = fs.readFileSync(templatePath, 'utf8');
const currentDate = new Date().toLocaleDateString('es-ES', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

// Reemplaza '{{date}}' en el HTML con la fecha actual
templateBody = templateBody.replace('{{date}}', currentDate);
async function sendConfirmationEmail(toEmail, fromName, subject, bodyText) {
  const msg = {
    to: toEmail,
    from: `"${fromName}" <${process.env.EMAIL_FROM}>`,
    subject: `${subject}`,
    text: `${bodyText}`,
    html: `${templateBody}`,
    encoding: 'utf-8',
  };

  try {
    await sgMail.send(msg);
    return true;
  } catch (error) {
    throw new Error(`Error al enviar el correo de confirmación: ${error.message}`);
  }
}

module.exports = {
  sendConfirmationEmail,
};
