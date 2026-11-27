import nodemailer from "nodemailer";
import { email as inbox, replyTime, siteName } from "../data/site";

export interface ContactRequest {
	name: string;
	email: string;
	phone?: string;
	service: string;
	modality: string;
	slot?: string;
	message?: string;
}

// Same SMTP account as the live site (main): DonDominio mailbox hola@inala.es.
// The password is a server-only env var set in Vercel.
function createTransport() {
	return nodemailer.createTransport({
		host: "mail.dondominio.com",
		port: 587,
		secure: false,
		auth: { user: inbox, pass: import.meta.env.SMTP_PASSWORD },
		tls: { rejectUnauthorized: false },
	});
}

// Visitor input goes into HTML mail, so escape it.
function escapeHtml(value: string) {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&#39;");
}

function fields(data: ContactRequest) {
	return [
		["Nombre", data.name],
		["Email", data.email],
		["Teléfono", data.phone || "-"],
		["Servicio", data.service],
		["Modalidad", data.modality],
		["Horario preferido", data.slot || "-"],
		["Mensaje", data.message || "-"],
		[
			"Fecha",
			new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" }),
		],
	] as const;
}

export async function sendContactEmails(data: ContactRequest) {
	const transporter = createTransport();
	const rows = fields(data);

	await transporter.sendMail({
		from: inbox,
		to: inbox,
		replyTo: data.email,
		subject: `Solicitud de cita: ${data.service} - ${data.name}`,
		text: rows.map(([label, value]) => `${label}: ${value}`).join("\n"),
		html: `<h2>Nueva solicitud desde el formulario de contacto</h2>${rows
			.map(
				([label, value]) =>
					`<p><strong>${label}:</strong><br>${escapeHtml(value).replaceAll("\n", "<br>")}</p>`,
			)
			.join("")}`,
	});

	// Confirmation to the visitor, as on main. A failure here does not fail the request.
	try {
		const greeting = `Hola ${data.name},`;
		const body = [
			"He recibido tu consulta correctamente.",
			`Te responderé en un plazo ${replyTime}.`,
			`Gracias por confiar en ${siteName}.`,
		];
		await transporter.sendMail({
			from: inbox,
			to: data.email,
			subject: `Consulta recibida - ${siteName}`,
			text: [greeting, "", ...body].join("\n"),
			html: `<p>${escapeHtml(greeting)}</p>${body.map((line) => `<p>${line}</p>`).join("")}`,
		});
	} catch (error) {
		console.error("Contact confirmation email failed", error);
	}
}
