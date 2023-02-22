import React from 'react'
import validationSchema from "./validations";
import { useFormik } from 'formik';


const Contact = () => {
    const { handleSubmit, handleChange, handleBlur, values, isSubmitting, errors, touched } = useFormik({
        initialValues: {
            name: "",
            surname: "",
            email: "",
            username: ""
        },
        onSubmit: async (values, bag) => {
            console.log(values);
            bag.resetForm();
        },
        validationSchema
    });

    return (
        <div className='container'>
            <h1>Validation in React</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className='formGroup'>
                    <label htmlFor='name' className='label'>Name</label>
                    <input
                        type="text"
                        id='name'
                        value={values.name}
                        disabled={isSubmitting}
                        onChange={handleChange("name")}
                        onBlur={handleBlur("name")}
                        className='input' />
                    {
                        errors && touched.name && <div className='error'>{errors.name}</div>
                    }
                </div>
                <div className='formGroup'>
                    <label htmlFor='surname' className='label'>Surname</label>
                    <input
                        type="text"
                        id='surname'
                        value={values.surname}
                        disabled={isSubmitting}
                        onChange={handleChange("surname")}
                        onBlur={handleBlur("surname")}
                        className='input' />
                    {
                        errors && touched.surname && <div className='error'>{errors.surname}</div>
                    }
                </div>
                <div className='formGroup'>
                    <label htmlFor='email' className='label'>E-mail</label>
                    <input
                        type="text"
                        id='email'
                        value={values.email}
                        disabled={isSubmitting}
                        onChange={handleChange("email")}
                        onBlur={handleBlur("email")}
                        className='input' />
                    {
                        errors && touched.email && <div className='error'>{errors.email}</div>
                    }
                </div>
                <div className='formGroup'>
                    <label htmlFor='username' className='label'>User name</label>
                    <input
                        type="text"
                        id='username'
                        value={values.username}
                        disabled={isSubmitting}
                        onChange={handleChange("username")}
                        onBlur={handleBlur("username")}
                        className='input' />
                    {
                        errors && touched.username && <div className='error'>{errors.username}</div>
                    }
                </div>
                <div className='btnContainer'>
                    <button
                        type='submit'
                        name="submit"
                        value="Submit"
                        disabled={isSubmitting}
                        className="submitBtn"><span>Submit</span></button>
                </div>
            </form>
        </div>
    )
}
export default Contact;