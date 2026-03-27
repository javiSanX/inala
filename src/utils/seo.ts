export const slugify = (value: string) =>
	value
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '')
		.replace(/-{2,}/g, '-')

export const getAuthorSlug = (author: string) => slugify(author)

export const getPostSlug = (entry: { id: string; data?: { slug?: string } }) =>
	slugify(entry.data?.slug ?? entry.id)
