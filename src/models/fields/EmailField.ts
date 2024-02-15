import { FieldType } from "../../enums/FieldType";
import { IField } from "../../interfaces/IField";
import { TextField } from "./TextField";

export class EmailField extends TextField implements IField<string> {

    public type = FieldType.Email

    constructor(
        public id: number,
        public name: string,
        public minLength: number | null = null,
        public maxLength: number | null = null,
        public value: string = "",
        public displayValue: string = "",
        public nullable: boolean = true,
        public order: number | null = null,
    ) {
        super(id, name, maxLength, minLength, value, displayValue, nullable)
    }

    public describe(): string {
        return `Field ${this.id}: ${this.name} (${this.type})`
    }

    public validate(): boolean {
        if(!super.validate()) return false
        return false
    }

    public update(value: string): string | null {
        return value
    }
}