import { Form } from "../../models/Form"

interface FormComponentProps {
    form: Form
}

export default function FormComponent(props: FormComponentProps) {

    return (
        <div className="form">

            <h2>{props.form.name}</h2>

            {/* {props.form.describe()} */}

            <hr />
            <ul>
                {props.form.fields.map((field, index) => <li key={index}>{field.describe()}</li>)}
            </ul>

            <hr />
            <pre>{JSON.stringify(props, null, 4)}</pre>

        </div>
    )
}
