import * as yup from "yup";
const validations = yup.object().shape({
    title : yup.string().required(),
    description : yup.string().min(5).required(),
    price : yup.string().required(),
    photos: yup.string().required()
});

export default validations;