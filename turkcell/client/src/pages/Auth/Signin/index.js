import React from "react";
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button, Alert } from "@chakra-ui/react";
import { useFormik } from "formik";
import validationSchema from "./validations";
import { fetchLogin } from "../../../api";
import { useAuth } from "../../../Context/AuthContext";

//burası
import { createBrowserHistory } from "@remix-run/router";



const Signin = () => {
  const history = createBrowserHistory();
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema,
    onSubmit: async (values, bag) => {
      try {
        const loginResponse = await fetchLogin({ email: values.email, password: values.password });
        login(loginResponse)
        //burası çalışmıyor
        history.push("/profile");
        console.log(loginResponse);
      } catch (error) {
        bag.setErrors({ general: error.response.data.message })
      }
    }
  });



  return (
    <Flex align="center" width="full" justifyContent="center">
      <Box pt="10">
        <Box textAlign="center">
          <Heading>Sign in</Heading>
        </Box>
        <Box my={5}>
          {
            formik.errors.general && (
              <Alert status="error">{formik.errors.general}</Alert>
            )
          }
        </Box>
        <Box my="5" textAlign="left">
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                isInvalid={formik.touched.email && formik.errors.email} />
            </FormControl>
            <FormControl marginTop="4">
              <FormLabel>Password</FormLabel>
              <Input name="password" type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                isInvalid={formik.touched.password && formik.errors.password} />
            </FormControl>
            <Button marginTop="4" width="100%" type="submit">Signin</Button>
          </form>
        </Box>
      </Box>

    </Flex>
  )
}

export default Signin;