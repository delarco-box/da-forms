import { FieldType } from "../../enums/FieldType";
import { IField } from "../../interfaces/IField";

export class TextField implements IField<string> {

    public type = FieldType.Text

    constructor(
        public id: number,
        public name: string,
        public minLength: number | null = null,
        public maxLength: number | null = null,
        public value: string = "",
        public displayValue: string = "",
        public nullable: boolean = true,
        public order: number | null = null,
    ) { }

    public describe(): string {
        return `Field ${this.id}: ${this.name} (${this.type})`
    }

    public validate(): boolean {
        return false
    }

    public update(value: string): string | null {
        return value
    }
}
