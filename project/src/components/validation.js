
const validation =(values)=>{
    let errors = {}

if (!values.name) {
    errors.name="Name Required"
}
else if(values.name.length<5){
    errors.name="Name must be more than 5 characters"
}
if (!values.password) {
    errors.password="Password Required"
}
else if(values.password.length < 8){
    errors.password="Password must be more than 7 characters"
}
return errors;
}
export default validation;