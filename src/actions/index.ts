import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { EmailService } from '../services/email';
// import { EmailService } from '../services/email';

export const server = {
   sendData: defineAction({
      accept: 'form',
      input: z.object({
         email: z.string().email('Email inválido'),
         firstName: z.string().min(2, 'Nombre debe tener al menos 2 caracteres'),
         lastName: z.string().min(2, 'Apellidos debe tener al menos 2 caracteres'),
         message: z.string().min(10, 'Mensaje debe tener al menos 10 caracteres'),
      }),
      handler: async ({ email, firstName, lastName, message }) => {
         console.log('📧 DATOS RECIBIDOS:', {
            email,
            firstName,
            lastName,
            message,
            timestamp: new Date().toISOString(),
         });

         try {
            const emailService = new EmailService();
            await emailService.verifyConnection();
            const emailResult = await emailService.sendContactEmail({
               firstName,
               lastName,
               email,
               message,
            });

            await emailService.sendConfirmationEmail({
               firstName,
               lastName,
               email,
               message,
            });

            return {
               success: true,
               message: `Gracias ${firstName}, tu consulta ha sido enviada correctamente. Nos pondremos en contacto contigo pronto.`,
               data: {
                  email,
                  firstName,
                  lastName,
                  timestamp: new Date().toISOString(),
               },
            };
         } catch (error) {
            console.error('❌ Error procesando formulario:', error);

            // Manejo específico de errores de email
            const errorMessage = error instanceof Error ? error.message : 'Error desconocido';

            if (errorMessage.includes('SMTP') || errorMessage.includes('email')) {
               throw new Error('Error enviando email. Por favor, inténtalo más tarde.');
            }

            throw new Error('Error interno del servidor');
         }
      },
   }),
};
