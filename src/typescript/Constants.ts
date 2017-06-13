export const Icon = {
	dropdown: require(`../assets/icons/dropdown.svg`),
	menu: require(`../assets/icons/menu.svg`)
}

export const P: string = `prefix`

export function ifExists(primary, fallback?: string) {
	return primary ? primary : (fallback ? fallback : ``)
}