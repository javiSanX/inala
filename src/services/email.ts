import nodemailer from 'nodemailer';

interface EmailData {
   firstName: string;
   lastName: string;
   email: string;
   message: string;
}

interface EmailOptions {
   to?: string;
   subject?: string;
   replyTo?: string;
}

const emailConfig = {
   smtp: {
      host: 'mail.dondominio.com',
      port: 587,
      secure: false,
      auth: {
         user: 'hola@inala.es', // Tu email completo
         pass: import.meta.env.SMTP_PASSWORD, // Tu contraseña de email
      },
      tls: {
         rejectUnauthorized: false,
      },
   },

   from: 'hola@inala.es',
   to: 'hola@inala.es',
};

function getActiveEmailConfig() {
   // if (import.meta.env.SMTP_HOST) return emailConfig.smtp;
   // if (import.meta.env.GMAIL_USER) return emailConfig.gmail;
   return emailConfig.smtp;
}

export class EmailService {
   private transporter: nodemailer.Transporter;

   constructor() {
      try {
         const config = getActiveEmailConfig();
         console.log('⚙️ Configuración final del transporter:', {
            host: config.host,
            port: config.port,
            secure: config.secure,
            user: config.auth?.user,
            service: config.service,
         });
         this.transporter = nodemailer.createTransport(config);
         console.log('✅ EmailService inicializado correctamente');
      } catch (error) {
         console.error('❌ Error inicializando EmailService:', error);
         throw error;
      }
   }

   async sendContactEmail(data: EmailData, options: EmailOptions = {}) {
      const { firstName, lastName, email, message } = data;
      const fullName = `${firstName} ${lastName}`;

      // Template HTML para el email
      const htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Nueva Consulta - INALA</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #134e4a; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #134e4a; }
        .value { margin-top: 5px; }
        .footer { background: #e5e7eb; padding: 15px; text-align: center; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🍃 INALA - Nueva Consulta</h1>
        </div>
        
        <div class="content">
          <h2>Datos del Contacto</h2>
          
          <div class="field">
            <div class="label">Nombre Completo:</div>
            <div class="value">${fullName}</div>
          </div>
          
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${email}</div>
          </div>
          
          <div class="field">
            <div class="label">Mensaje:</div>
            <div class="value">${message}</div>
          </div>
          
          <div class="field">
            <div class="label">Fecha:</div>
            <div class="value">${new Date().toLocaleString('es-ES')}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>Este email fue enviado desde el formulario de contacto de INALA</p>
          <p>Para responder, utiliza la dirección: ${email}</p>
        </div>
      </div>
    </body>
    </html>
    `;

      // Template de texto plano (fallback)
      const textTemplate = `
    NUEVA CONSULTA - INALA
    =====================
    
    Nombre: ${fullName}
    Email: ${email}
    Fecha: ${new Date().toLocaleString('es-ES')}
    
    Mensaje:
    ${message}
    
    ---
    Para responder, utiliza: ${email}
    `;

      const mailOptions = {
         from: emailConfig.from,
         to: emailConfig.to,
         subject: `Nueva consulta de ${fullName} - INALA`,
         text: textTemplate,
         html: htmlTemplate,
         replyTo: options.replyTo || email,
      };

      try {
         console.log('📤 Enviando email a:', mailOptions.to);
         const result = await this.transporter.sendMail(mailOptions);
         console.log('✅ Email enviado correctamente:', result.messageId);

         return {
            success: true,
            messageId: result.messageId,
            message: 'Email enviado correctamente',
         };
      } catch (error) {
         console.error('❌ Error enviando email:', error);
         const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
         throw new Error(`Error enviando email: ${errorMessage}`);
      }
   }

   async verifyConnection() {
      try {
         await this.transporter.verify();
         console.log('✅ Conexión de email verificada');
         return true;
      } catch (error) {
         console.error('❌ Error verificando conexión SMTP:', error);
         const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
         const errorDetails = {
            message: errorMessage,
            code: (error as any)?.code,
            errno: (error as any)?.errno,
            syscall: (error as any)?.syscall,
            address: (error as any)?.address,
            port: (error as any)?.port,
         };
         console.log('🔍 Detalles del error:', errorDetails);

         return false;
      }
   }

   async sendConfirmationEmail(data: EmailData) {
      const { firstName, email } = data;

      const htmlTemplate = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Confirmación - INALA</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #134e4a; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .footer { background: #e5e7eb; padding: 15px; text-align: center; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🍃 INALA - Consulta Recibida</h1>
        </div>
        
        <div class="content">
          <h2>Hola ${firstName},</h2>
          <p>Hemos recibido tu consulta correctamente.</p>
          <p>Nos pondremos en contacto contigo en las próximas 24-48 horas.</p>
          <p>Gracias por confiar en INALA.</p>
        </div>
        
        <div class="footer">
          <p>INALA - Centro de Psicología</p>
          <p>Este es un email automático, no respondas a esta dirección</p>
        </div>
      </div>
    </body>
    </html>
    `;

      const mailOptions = {
         from: emailConfig.from,
         to: email,
         subject: 'Consulta recibida - INALA',
         html: htmlTemplate,
      };

      try {
         const result = await this.transporter.sendMail(mailOptions);
         console.log('✅ Email de confirmación enviado:', result.messageId);
         return { success: true, messageId: result.messageId };
      } catch (error) {
         console.error('❌ Error enviando confirmación:', error);
         // No lanzar error para que no falle toda la operación
         const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
         return { success: false, error: errorMessage };
      }
   }
}
