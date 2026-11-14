import { ActionError, defineAction } from "astro:actions";
import { z } from "astro/zod";
import { sendContactEmails } from "../lib/contact-email";

export const server = {
	sendData: defineAction({
		accept: "form",
		input: z.object({
			service_type: z.string().trim().min(1),
			treatment_modality: z.string().trim().min(1),
			name: z.string().trim().min(2),
			email: z.email(),
			phone: z.string().trim().max(40).optional(),
			slot: z.string().trim().max(60).optional(),
			message: z.string().trim().max(5000).optional(),
		}),
		handler: async (input) => {
			try {
				await sendContactEmails({
					name: input.name,
					email: input.email,
					phone: input.phone,
					service: input.service_type,
					modality: input.treatment_modality,
					slot: input.slot,
					message: input.message,
				});
			} catch (error) {
				console.error("Contact email failed", error);
				throw new ActionError({
					code: "INTERNAL_SERVER_ERROR",
					message: "No se ha podido enviar el mensaje.",
				});
			}
			return { ok: true };
		},
	}),
};
