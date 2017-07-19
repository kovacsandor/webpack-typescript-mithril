import { Post } from '../src/typescript/data/Post'
import { User } from '../src/typescript/data/User'

const VOCABULARY: string = `Latiatuc feleym ʒumtuchel mic vogmuc. ýſa pur eſ chomuv uogmuc. Menýi miloſtben terumteve eleve mív iſemucut adamut. eſ odutta vola neki paradiſumut haʒóá. Eſ mend paradiſumben uolov gimilcíctul munda nekí elnie. Heon tilutoa wt ig fa gimilcetvl. Ge mundoa nekí meret nū eneẏc. ẏſa kí nopun emdul oʒ gimilſ twl. halalnec halaláál holʒ. Hadlaua choltat terumteve iſten tvl. ge feledeve. Engede urdung intetvinec. eſ evec oʒ tiluvt gimilſtwl. eſ oʒ gimilſben halalut evec. Eſ oʒ gimilſnec wl keſeruv uola viʒe. hug turchucat mige ʒocoʒtia vola. Num heon muga nec. ge mend w foianec halalut evec. Horoguvec iſten. eſ veteve wt eʒ muncaſ vilagbele. eſ levn halalnec eſ puculnec feʒe. eſ mend w nemenec. Kic oʒvc. miv vogmuc. Hug eſ tiv latiatuc ſʒumtuchel. iſa eſ num igg ember mulchotia eʒ vermut. yſa mend oʒchuʒ iarov vogmuc. Wimagguc uromc iſten kegilmet eʒ lelic ert. hug iorgoſſun w neki. eſ kegiggen. eſ bulſcaſſa mend w bunet. Eſ vimagguc ſʒen achſcin mariat. eſ bovdug michael archangelt. eſ mend angelcut. hug uimaggonoc erette. Eſ uimagguc ſʒent peter urot. kinec odut hotolm ovdonia. eſ ketnie. hug ovga mend w bunet. Eſ vimagguc mend ſʒentucut. hug legenec nekí ſeged uromc ſcine eleut. hug iſten ív ui- madſagucmia bulſaſſa w bunet. Eſ ʒoboducha wt urdung ildetuitvl. eſ pucul kinzotviatwl. eſ veʒeſſe wt paradiſū nugulmabeli. eſ oggun neki munhi uruʒagbele utot. eſ mend iovben reʒet. Eſ keaſſatuc uromchuʒ charmul. Kirł. Scerelmeſ bratým uimagguc omuc eʒ ſcegin ember lilki ert. kit vr eʒ nopun eʒ homuſ vilag timnucebelevl mente. kinec eʒ nopun teſtet tumetívc. hug ur uvt kegilmehel abraam. ẏſaac. iacob. kebeleben helheʒie. hug birſagnop iv́tua mend w ſʒentíí eſ unuttei cuzicun iov felevl iochtotnia ileʒie wt. Eſ tiv bennetuc. Clamate`

let vocabulary: string[] = generateWords(VOCABULARY)

export class GeneratedUser implements User {
	email: string = `${generateText(vocabulary, 1).replace(`.`, ``).toLocaleLowerCase()}@${generateText(vocabulary, 1).replace(`.`, ``).toLocaleLowerCase()}.com`
	firstName: string = generateText(vocabulary, 1).replace(`.`, ``)
	id: string = `id:${generateRandomNumber(9999, 1000)}`
	lastName: string = generateText(vocabulary, 1).replace(`.`, ``)
	password: string = `${generateText(vocabulary, 1).replace(`.`, `!`)}${generateRandomNumber(99, 1)}`
}

export class GeneratedPost implements Post {
	date: Date = new Date()
	id: string = `id:${generateRandomNumber(9999, 1000)}`
	isHidden: boolean = generateRandomNumber(1) == 1 ? true : false
	post: string = generateText(vocabulary, generateRandomNumber(10, 5), generateRandomNumber(5, 3), generateRandomNumber(3, 1))
	userId: string = `id:${generateRandomNumber(9999, 1000)}`
}

/** Generates an instance of a given type or array containing a given number of a given type. */
export function generateData<T>(className: { new (): T }, count?: number): T | T[] {
	let result: T | T[] = new className()
	if (count > 1) {
		result = []
		for (let i = 0; i < count; i++) result.push(new className())
	}
	return result
}

/** Generates a random number between 0 and a given number. Minimum number can be given as second parameter. */
function generateRandomNumber(max: number, min?: number): number {
	let minimum: number = min ? min : 0
	return Math.floor(Math.random() * (max - minimum + 1)) + minimum
}

/** Generates a sentence with 5-10 words from a given text. Number of words, sentences, paragraphs can be given as parameters. */
function generateText(vocabulary: string[], wordCount?: number, sentenceCount?: number, paragraphCount?: number): string {
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
function generateWords(text: string): string[] {
	let result: string[] = []
	let words: string[] = text.toLowerCase().replace(/[^A-Za-z0-9\s]/g, ``).split(` `)
	for (let word of words) if (result.indexOf(word) < 0) result.push(word)
	return result
}