import { FieldType } from "../enums/FieldType";

export interface IField<T> {

    id: number
    name: string
    type: FieldType
    value: T | null
    displayValue: T | null
    nullable: boolean
    order: number | null

    describe(): string
    validate(): boolean
    update(value: T): T | null
}
