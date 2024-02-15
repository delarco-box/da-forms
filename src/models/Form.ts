import { IField } from "../interfaces/IField"

export class Form {

    constructor(
        public id: number = -1,
        public name: string = "untitled",
        public fields: Array<IField<any>> = [],
    ) { }

    public describe(): string {

        return `Form ${this.id}: ${this.name}`
    }

    // public describe(): string {

    //     const description = `Form ${this.id}: ${this.name}`
    //         + this.fields.map(field => field.describe()).join("\n")

    //     return description
    // }
}
