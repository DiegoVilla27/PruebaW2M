import {UUID} from 'uuid-generator-ts'

export class Heroe {
    public id: string
    public name: string
    public power: string

    constructor(name: string, power: string) {
        const uuid = new UUID()
        this.id = uuid.getDashFreeUUID()
        this.name = name
        this.power = power
    }
}