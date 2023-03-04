import React from "react";
import { Formik, Field, Form } from "formik";
import validationSchema from "./Validation";
import { useTodo } from "../Context/TodoContext";
const NewTodoForm = () => {
    const {addTodo} = useTodo();

    return (
        <Formik
            initialValues={{
                text: ""
            }}
            onSubmit={async (values, bag) => {
                addTodo(values.text)
                bag.resetForm();
            }}
            validationSchema = {validationSchema}
        >
            <Form className="input">
                <Field
                    className="newTodo"
                    placeholder="what needs to be done?"
                    id="text"
                    name="text"
                    autoFocus
                />
            </Form>
        </Formik>
    )
}

export default NewTodoForm;