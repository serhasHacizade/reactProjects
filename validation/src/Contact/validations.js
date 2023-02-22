import {object, string} from "yup";


const submitSchema = object({
    name : string().required(), //also u can add a error message
    surname : string().required(),
    email : string().email().required(),
    username : string().required()
});

export default submitSchema;