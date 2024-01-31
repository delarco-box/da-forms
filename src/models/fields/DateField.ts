import { FieldType } from "../../enums/FieldType";
import { IField } from "../../interfaces/IField";

export class DateField implements IField<Date> {

    public type = FieldType.Date

    constructor(
        public id: number,
        public name: string,
        public minDate: Date | null = null,
        public maxMax: Date | null = null,
        public value: Date = new Date(),
        public displayValue: any = "",
        public nullable: boolean = true,
    ) { }

    public describe(): string {
        return `Field ${this.id}: ${this.name} (${FieldType[this.type]})`
    }

    public validate(): boolean {
        return false
    }

    public update(value: Date): Date | null {
        return value
    }
}