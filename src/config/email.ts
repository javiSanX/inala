// Configuración de email con Nodemailer
// Soporta Gmail, Outlook, SMTP personalizado

export const emailConfig = {
   smtp: {
      host: 'mail.dondominio.com',
      port: 587,
      secure: false,
      auth: {
         user: 'hola@inala.es', // Tu email completo
         pass: '[4JB3DLx(DVY)S',
      },
      tls: {
         rejectUnauthorized: false,
      },
   },

   from: 'hola@inala.es',
   to: 'hola@inala.es',
};

// Función para obtener la configuración activa
export function getActiveEmailConfig() {
   // if (import.meta.env.SMTP_HOST) return emailConfig.smtp;
   // if (import.meta.env.GMAIL_USER) return emailConfig.gmail;
   return emailConfig.smtp;
}
