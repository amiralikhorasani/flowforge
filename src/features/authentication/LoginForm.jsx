import { LuArrowRight, LuLock, LuMail } from "react-icons/lu";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import { Link } from "react-router";
import Form from "../../components/forms/Form";

function LoginForm({ className = "" }) {
  return (
    <Form className={`${className} space-y-5`}>
      <Input
        type="email"
        label="Email"
        placeholder="you@example.com"
        icon={LuMail}
      />

      <Input
        type="password"
        label={
          <div className="flex items-center justify-between">
            <span>Password</span>
            <Link
              to="/user/forgot-password"
              className="text-xs text-blue-400 hover:text-blue-300"
            >
              Forgot password?
            </Link>
          </div>
        }
        placeholder="••••••••"
        icon={LuLock}
      />

      <Button variant="secondry" size="large" className="w-full justify-center">
        <span>Sign In</span>
        <LuArrowRight size={18} />
      </Button>
    </Form>
  );
}

export default LoginForm;
