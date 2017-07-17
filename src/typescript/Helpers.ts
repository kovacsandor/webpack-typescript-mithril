/** Returns an object if it exists or an empty string. Other return string can be given as a second parameter. */
export function ifExists<T>(primary: T, fallback?: string): string | T {
	return primary ? primary : (fallback ? fallback : ``)
}

/** Returns an array containing the given object given times. */
export function multiplyObject<T>(count: number, object: T): T[] {
	let result: T[] = []
	for (let i = 0; i < count; i++) result.push(object)
	return result
}