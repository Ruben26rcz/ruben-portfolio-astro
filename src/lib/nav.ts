export const navLinks = [
	{ href: '/', label: 'Works' },
	{ href: '/codeground', label: 'CodeGround' },
	{ href: '/about', label: 'About' },
	{ href: '/contact', label: 'Contact' },
]

/** Whether `href` is the current section. Project pages (/work/*) count as Works. */
export const isCurrent = (href: string, pathname: string) => {
	const path = pathname.replace(/\/+$/, '') || '/'
	if (href === '/') return path === '/' || path.startsWith('/work/')
	return path === href
}
