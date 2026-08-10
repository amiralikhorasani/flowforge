import { Link } from "react-router";
import LoginForm from "../features/authentication/LoginForm";
import AuthenticationForm from "../components/forms/AuthenticationForm";

function Login() {
  return (
    <AuthenticationForm
      title="Welcome back"
      subtitle="Sign in to continue to FlowForge"
      form={LoginForm}
    >
      <p className="mt-6 text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <Link to="/user/register" className="text-blue-400 hover:text-blue-300">
          Create one
        </Link>
      </p>
    </AuthenticationForm>
  );
}

export default Login;
