import logoImage from "../assets/brand/logo.webp";
import type { IconName } from "../components/ui/icons";

export const logo = logoImage;
// Stable public URL of the same logo, for structured data.
export const logoUrl = "/logo-light.webp";
export const siteName = "INALA Centro de Psicoterapia";

export const contactHref = "/contacto";
export const email = "hola@inala.es";
export const instagramUrl = "https://www.instagram.com/inala_psicoterapia/";
// Google Business Profile of the practice (stable CID link): map link and
// schema `sameAs`/`hasMap`. Address, hours and coordinates match this listing.
export const googleBusinessUrl =
	"https://maps.google.com/?cid=8408552270441370446";
export const therapistName = "María Sánchez";
// As written in the Colegio register (see licenseRegistryUrl).
export const licenseNumber = "N-02300";
// María's entry in the public register of the Colegio Oficial de la Psicología
// de Navarra (the search URL returns only her record).
export const licenseRegistryUrl =
	"https://www.colpsinavarra.org/es/ventanilla-unica/consumidores-usuarios/registro-colegiados?field_nombre_value=maria&field_apellidos_value=sanchez+cobos";
export const address = "Calle Dra. Ariz, frente al portal 13";
export const addressCity = "31006 Pamplona, España";
export const addressCenter = "Centro Yssana";
export const whatsappNumber = "+34 623 050 773";
export const whatsappUrl = "https://wa.me/34623050773";
export const phoneHref = `tel:${whatsappNumber.replaceAll(" ", "")}`;
// The same address split into fields, for structured data. The street stays
// plain (no centre name) so it matches the Google Business Profile.
export const postalAddress = {
	streetAddress: address,
	postalCode: "31006",
	addressLocality: "Pamplona",
	addressCountry: "ES",
};
// Coordinates of the Google Business Profile pin.
export const geo = { latitude: 42.8069008, longitude: -1.6253869 };

// Opening hours, as listed on the Google Business Profile. `spec` feeds the structured data.
interface OpeningHours {
	days: string;
	hours: string;
	spec: { dayOfWeek: string[]; opens: string; closes: string }[];
}

export const openingHours: OpeningHours[] = [
	{
		days: "Lunes a viernes",
		hours: "de 10:00 a 19:00 h",
		spec: [
			{
				dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
				opens: "10:00",
				closes: "19:00",
			},
		],
	},
	{ days: "Sábados y domingos", hours: "cerrado", spec: [] },
];

export const replyTime = "de 24 a 48 horas laborables";

// One label for the primary action everywhere: the contact form sends a
// request, it does not book a slot.
export const ctaLabel = "Solicitar primera cita";

export const crisisNotice =
	"Esta consulta no atiende urgencias. Si estás en crisis o piensas en hacerte daño, llama al 024 (gratuito, 24 horas) o al 112.";

export const navLinks = [
	{ name: "Servicios", href: "/servicios" },
	{ name: "Cómo trabajo", href: "/nuestro-metodo" },
	{ name: "Sobre mí", href: "/sobre-mi" },
	{ name: "Tarifas", href: "/tarifas" },
	{ name: "Blog", href: "/blog" },
];

// Single source for services: services index, home, pricing and the contact
// form. Prices and durations come from main (60 min; 65 € individual,
// 75 € couple/family). Online is a modality available for every service, so
// it is not listed here; see `onlineLink`.
interface Service {
	name: string;
	href: string;
	icon: IconName;
	summary: string;
	price: string;
	duration: string;
}

export const services: Service[] = [
	{
		name: "Terapia Individual",
		href: "/servicios/terapia-individual",
		icon: "person",
		summary:
			"Para adultos, adolescentes y niños que atraviesan ansiedad, desánimo, un duelo o un momento de cambio.",
		price: "65 €",
		duration: "60 minutos",
	},
	{
		name: "Terapia de Pareja",
		href: "/servicios/terapia-de-pareja",
		icon: "favorite",
		summary:
			"Para parejas que quieren comunicarse mejor, salir de las discusiones que se repiten o tomar decisiones con calma.",
		price: "75 €",
		duration: "60 minutos",
	},
	{
		name: "Terapia Familiar",
		href: "/servicios/terapia-familiar",
		icon: "diversity_1",
		summary:
			"Para familias con tensiones de convivencia, cambios de etapa, separaciones o pérdidas.",
		price: "75 €",
		duration: "60 minutos",
	},
	{
		name: "Psicología Perinatal y Crianza",
		href: "/servicios/psicologia-perinatal",
		icon: "child_care",
		summary:
			"Para madres y padres que buscan apoyo en la crianza: cansancio, culpa, límites o desacuerdos educativos.",
		price: "65 €",
		duration: "60 minutos",
	},
];

// Online is how the sessions happen, not a separate service: menus list it
// after the services and link to the page that explains how it works.
export const onlineLink = {
	name: "Terapia online",
	href: "/servicios/terapia-online",
	icon: "videocam",
};

// The fear-of-flying talk is not a therapy service, but menus list it with them.
export const workshopLink = {
	name: "Taller de miedo a volar",
	href: "/taller-miedo-a-volar",
	icon: "flight_takeoff",
};

export const serviceMenuLinks = [...services, onlineLink, workshopLink];

// Training, most recent first, as María listed it. `school` also feeds the
// schema `alumniOf`; courses without a school are left out of it.
export const training: { title: string; school?: string; year: number }[] = [
	{ title: "Curso de intervención con IFS para trauma", year: 2026 },
	{ title: "Curso práctico de intervención en autoestima", year: 2026 },
	{ title: "Máster en Salud Mental Perinatal", school: "IESMP", year: 2026 },
	{
		title: "Máster en Psicología General Sanitaria",
		school: "Universidad Isabel I",
		year: 2024,
	},
	{
		title: "Máster en Terapia Sistémica de Familia y Pareja",
		school: "AVAPSI",
		year: 2023,
	},
	{
		title: "Grado en Psicología, mención en Psicología Clínica",
		school: "UNED",
		year: 2021,
	},
	{
		title: "Ciencias Empresariales",
		school: "Universidad Pública de Navarra (UPNA)",
		year: 2013,
	},
];

export const legalLinks = [
	{ name: "Aviso legal y cookies", href: "/aviso-legal-y-politica-de-cookies" },
	{ name: "Política de privacidad", href: "/política-de-privacidad" },
];
