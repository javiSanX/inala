export const logoSrc = "/logo-light.webp";

export const contactHref = "/contacto";
export const email = "hola@inala.es";
export const instagramUrl = "https://www.instagram.com/inala_psicoterapia/";
export const therapistName = "María Sánchez";
export const licenseNumber = "NA-02300";
export const address = "C/ María Lacunza 6, portal 4";
export const addressCity = "31011 Pamplona, España";
export const addressCenter = "Centro Yssana";
export const whatsappNumber = "+34 623 050 773";
export const whatsappUrl = "https://wa.me/34623050773";
export const phoneHref = `tel:${whatsappNumber.replaceAll(" ", "")}`;

// One label for the primary action everywhere: the contact form sends a
// request, it does not book a slot.
export const ctaLabel = "Solicitar primera cita";
export const ctaNote = "Te respondo para acordar día, hora y modalidad.";

export const crisisNotice =
	"Esta consulta no atiende urgencias. Si estás en crisis o piensas en hacerte daño, llama al 024 (gratuito, 24 horas) o al 112.";

export const navLinks = [
	{ name: "Servicios", href: "/servicios" },
	{ name: "Cómo trabajo", href: "/nuestro-metodo" },
	{ name: "Sobre mí", href: "/sobre-mi" },
	{ name: "Tarifas", href: "/tarifas" },
	{ name: "Blog", href: "/blog" },
];

// Single source for services: header menu, footer, services index, home,
// pricing and the contact form. Prices and durations come from main
// (60 min; 65 € individual/online, 75 € couple/family).
export const services = [
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
		name: "Terapia Online",
		href: "/servicios/terapia-online",
		icon: "videocam",
		summary:
			"Las mismas sesiones, por videollamada, si vives lejos de Pamplona o te resulta más cómodo desde casa.",
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
		name: "Psicología Parental",
		href: "/servicios/psicologia-parental",
		icon: "child_care",
		summary:
			"Para madres y padres que buscan apoyo en la crianza: cansancio, culpa, límites o desacuerdos educativos.",
		price: "[PENDIENTE: precio]",
		duration: "[PENDIENTE: duración]",
	},
];

export const legalLinks = [
	{ name: "Aviso legal y cookies", href: "/aviso-legal-y-politica-de-cookies" },
	{ name: "Política de privacidad", href: "/política-de-privacidad" },
];
