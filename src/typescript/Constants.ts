export function tryWithFallback(primary, fallback?: string) {
	return primary ? primary : (fallback ? fallback : ``)
}