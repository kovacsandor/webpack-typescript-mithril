/** Generates a random number between 0 and a given number. Minimum number can be given as second parameter. */
export function generateRandomNumber(max: number, min?: number): number {
	let minimum: number = min ? min : 0
	return Math.floor(Math.random() * (max - minimum + 1)) + minimum
}

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

/** Generates a sentence with 5-10 words from a given text. Number of words, sentences, paragraphs can be given as parameters. */
export function generateText(vocabulary: string[], wordCount?: number, sentenceCount?: number, paragraphCount?: number): string {
	let result: string = ``
	let vocabularyLength: number = vocabulary.length
	let paragraphs: number = paragraphCount ? paragraphCount : 1
	let sentences: number = sentenceCount ? sentenceCount : 1
	let words: number = wordCount ? wordCount : generateRandomNumber(10, 5)
	for (let i = 0; i < paragraphs; i++) {
		if (i != 0) result += `\n\n`
		for (let j = 0; j < sentences; j++) {
			if (j != 0) result += ` `
			for (let k = 0; k < words; k++) {
				let isDuplicate: boolean = vocabulary.length > 1 ? true : false
				let word: string
				while (isDuplicate) {
					word = vocabulary[generateRandomNumber(vocabularyLength - 1)]
					let previousWords: string[] = result.trim().split(` `)
					if (word != previousWords[previousWords.length - 1].toLowerCase()) isDuplicate = false
				}
				try { if (k == 0) word = word.charAt(0).toUpperCase() + word.slice(1) } catch (error) { console.error(error) }
				result += `${word} `
			}
			result = `${result.trim()}.`
		}
	}
	return result
}

/** Generates an array of words from a given text. */
export function generateWords(text: string): string[] {
	let result: string[] = []
	let words: string[] = text.toLowerCase().replace(/[^A-Za-z0-9\s]/g, ``).split(` `)
	for (let word of words) if (result.indexOf(word) < 0) result.push(word)
	return result
}