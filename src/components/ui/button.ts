// Button styles shared by <Button> links and native <button> elements.
export type ButtonVariant =
	| "primary"
	| "secondary"
	| "inverse"
	| "inverse-outline";

const base =
	"group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center text-small font-semibold transition-[background-color,border-color,color,scale] duration-150 ease-out active:scale-97 motion-reduce:active:scale-100";

const variants: Record<ButtonVariant, string> = {
	primary: "bg-teal text-white hover:bg-teal-strong",
	secondary:
		"border border-line-strong bg-white text-ink hover:border-teal hover:text-teal",
	inverse: "bg-seafoam text-cypress hover:bg-seafoam-soft",
	"inverse-outline":
		"border border-cypress-line text-on-dark hover:border-seafoam hover:text-seafoam-soft",
};

export const buttonClass = (variant: ButtonVariant = "primary") =>
	`${base} ${variants[variant]}`;
