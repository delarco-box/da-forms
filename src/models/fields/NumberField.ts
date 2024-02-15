import { FieldType } from "../../enums/FieldType";
import { IField } from "../../interfaces/IField";

export class NumberField implements IField<number> {

    public type = FieldType.Number

    constructor(
        public id: number,
        public name: string,
        public min: number | null = null,
        public max: number | null = null,
        public value: number | null = null,
        public displayValue: number | null = null,
        public nullable: boolean = true,
        public order: number | null = null,
    ) { }

    public describe(): string {
        return `Field ${this.id}: ${this.name} (${this.type})`
    }

    public validate(): boolean {
        return false
    }

    public update(value: number): number | null {
        return value
    }
}