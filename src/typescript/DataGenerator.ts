import { generateRandomNumber, generateText } from './Helpers'

import { Post } from './data/Post'
import { User } from './data/User'
import { VOCABULARY } from './Constants'

export class GeneratedUser implements User {
    email: string = `${generateText(VOCABULARY, 1).replace(`.`, ``).toLocaleLowerCase()}@${generateText(VOCABULARY, 1).replace(`.`, ``).toLocaleLowerCase()}.com`
    firstName: string = generateText(VOCABULARY, 1).replace(`.`, ``)
    id: string = `id:${generateRandomNumber(9999, 1000)}`
    lastName: string = generateText(VOCABULARY, 1).replace(`.`, ``)
    password: string = `${generateText(VOCABULARY, 1).replace(`.`, `!`)}${generateRandomNumber(99, 1)}`
}

export class GeneratedPost implements Post {
    date: Date = new Date()
    id: string = `id:${generateRandomNumber(9999, 1000)}`
    isHidden: boolean = generateRandomNumber(1) == 1 ? true : false
    post: string = generateText(VOCABULARY, generateRandomNumber(10, 5), generateRandomNumber(5, 3), generateRandomNumber(3, 1))
    userId: string = `id:${generateRandomNumber(9999, 1000)}`
}

export function generateData<T>(count: number, className: { new(): T }): T[] {
    let result: T[] = []
    for (let i = 0; i < count; i++) result.push(new className())
    return result
}