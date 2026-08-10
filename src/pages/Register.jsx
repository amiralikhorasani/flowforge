import { Link } from "react-router";
import RegisterForm from "../features/authentication/RegisterForm";
import AuthenticationForm from "../components/forms/AuthenticationForm";

function Register() {
  return (
    <AuthenticationForm
      title="Create your account"
      subtitle="Start building with FlowForge"
      form={RegisterForm}
    >
      <p className="mt-6 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link to="/user/login" className="text-blue-400 hover:text-blue-300">
          Sign in
        </Link>
      </p>
    </AuthenticationForm>
  );
}

export default Register;
