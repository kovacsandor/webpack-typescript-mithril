export const Icon = {
	menu: require(`../assets/icons/menu.svg`)
}

export const P: string = `prefix`

export function ifExists(primary, fallback?: string) {
	return primary ? primary : (fallback ? fallback : ``)
}