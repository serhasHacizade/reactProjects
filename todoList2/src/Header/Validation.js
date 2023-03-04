import * as Yup from "yup";
const Validation = Yup.object().shape({
  text: Yup.string().required("Text is a required field"),
});

export default Validation;