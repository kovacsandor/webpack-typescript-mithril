import { generateRandomNumber, generateText } from './Helpers'
import { VOCABULARY } from './Constants'
import { UserData } from "./data/UserData";

class User implements UserData {
    email: string = `${generateText(VOCABULARY, 1).replace(`.`, ``).toLocaleLowerCase()}@${generateText(VOCABULARY, 1).replace(`.`, ``).toLocaleLowerCase()}.com`
    firstName: string = generateText(VOCABULARY, 1).replace(`.`, ``)
    id: string = `id:${generateRandomNumber(9999, 1000)}`
    lastName: string = generateText(VOCABULARY, 1).replace(`.`, ``)
    password: string = `${generateText(VOCABULARY, 1).replace(`.`, `!`)}${generateRandomNumber(99, 1)}`
}

export function generateData(count: number): User[] {
    let result: User[] = []
    for (let i = 0; i < count; i++) result.push(new User())
    return result
}