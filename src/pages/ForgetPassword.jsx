import { Link } from "react-router";
import { LuArrowLeft } from "react-icons/lu";
import ForgetPasswordForm from "../features/authentication/ForgetPasswordForm";
import AuthenticationForm from "../components/forms/AuthenticationForm";

function ForgotPassword() {
  return (
    <AuthenticationForm
      title="Forgot Password?"
      subtitle="Enter your email address and we'll send you a link to reset your password."
      form={ForgetPasswordForm}
    >
      <div className="mt-6 text-center">
        <Link
          to="/user/login"
          className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-blue-400"
        >
          <LuArrowLeft size={16} />
          Back to Sign In
        </Link>
      </div>
    </AuthenticationForm>
  );
}

export default ForgotPassword;
