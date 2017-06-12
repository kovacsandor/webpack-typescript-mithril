export const P: string = `prefix`

export function ifExists(primary, fallback?: string) {
	return primary ? primary : (fallback ? fallback : ``)
}