import { generateRandomNumber, generateText, generateWords } from '../src/typescript/Helpers'
import { VOCABULARY } from '../src/typescript/Constants'
import { UserData } from '../src/typescript/data/UserData'
import { PostData } from '../src/typescript/data/PostData'

let vocabulary: string[] = generateWords(VOCABULARY)

export class User implements UserData {
    email: string = `${generateText(vocabulary, 1).replace(`.`, ``).toLocaleLowerCase()}@${generateText(vocabulary, 1).replace(`.`, ``).toLocaleLowerCase()}.com`
    firstName: string = generateText(vocabulary, 1).replace(`.`, ``)
    id: string = `id:${generateRandomNumber(9999, 1000)}`
    lastName: string = generateText(vocabulary, 1).replace(`.`, ``)
    password: string = `${generateText(vocabulary, 1).replace(`.`, `!`)}${generateRandomNumber(99, 1)}`
}

export class Post implements PostData {
    date: Date = new Date()
    id: string = `id:${generateRandomNumber(9999, 1000)}`
    isHidden: boolean = generateRandomNumber(1) == 1 ? true : false
    post: string = generateText(vocabulary, generateRandomNumber(10, 5), generateRandomNumber(5, 3), generateRandomNumber(3, 1))
    userId: string = `id:${generateRandomNumber(9999, 1000)}`
}

export function generateData<T>(count: number, className: { new(): T }): T[] {
    let result: T[] = []
    for (let i = 0; i < count; i++) result.push(new className())
    return result
}