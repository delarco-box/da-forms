import './App.css'
import { Form } from './models/Form'
import { DateField } from './models/fields/DateField'
import { EmailField } from './models/fields/EmailField'
import { NumberField } from './models/fields/NumberField'
import { PhoneField } from './models/fields/PhoneField'
import { TextField } from './models/fields/TextField'

function App() {
  
  const form = new Form(1, "form 1")
  form.fields.push(new TextField(1, "nome"))
  form.fields.push(new NumberField(2, "idade"))
  form.fields.push(new EmailField(3, "email"))
  form.fields.push(new DateField(4, "nascimento"))
  form.fields.push(new PhoneField(5, "telefone"))

  return (
    <>
      {form.describe()}
      <ul>
        {form.fields.map((field, index) => <li key={index}>{field.describe()}</li>)}
      </ul>
      <hr />
    </>
  )
}

export default App
