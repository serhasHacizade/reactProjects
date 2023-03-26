import * as yup from "yup";
const validations = yup.object().shape({
    email : yup.string().email("type a valid email").required("required!"),
    password : yup.string().min(5, "password must be greater than!").required(),
    passwordConfirm : yup.string().oneOf([yup.ref("password")], "passwords doesn't match!").required()
})

export default validations;