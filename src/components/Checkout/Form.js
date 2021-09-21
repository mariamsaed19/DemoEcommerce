import "../Styles/Form.scss"
const Form = () =>{
    return (
    <div className="form">
    <input type="email" placeholder="Email" name="Email" />
    <input type="text" placeholder="Address" name="Address" />
    <input type="text" placeholder="First name" name="firstname" />
    <input type="text" placeholder="City" name="city" />
    <input type="text" placeholder="Last name" name="lastname" />
    <input type="number" placeholder="Postal Code / ZIP" name="zip" />
    <input type="number" placeholder="Phone number" name="phone" />
    <input type="text" placeholder="Country" name="country" />
  </div>)
}
export default Form