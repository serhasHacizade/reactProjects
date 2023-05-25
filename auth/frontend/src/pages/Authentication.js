import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

const AuthenticationPage = () => {
  return <AuthForm />;
}

export default AuthenticationPage;

export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json({message : "Unsupported mode!"}, {status : 422});
  }

  const data = request.formData();
  const authData ={
    email : data.get("email"),
    password : data.get("password")
  };
  const response = await fetch("http://localhost:8080/login" + mode, {
  method : "POST",
  headers : {"Content-Type" : "application/json"},
  body : JSON.stringify(authData)
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  };
  if (!response.ok) {
    throw json({message : "Could not authenticate user!"}, {status : 500});
  };

  return redirect("/");

};