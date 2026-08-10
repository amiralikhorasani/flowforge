import { LuArrowRight, LuLock, LuMail, LuUser } from "react-icons/lu";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Form from "../../components/forms/Form";

function RegisterForm({ className = "" }) {
  return (
    <Form className={`${className} space-y-5`}>
      <Input
        type="text"
        label="Full name"
        placeholder="John Doe"
        icon={LuUser}
      />

      <Input
        type="email"
        label="Email"
        placeholder="you@example.com"
        icon={LuMail}
      />

      <Input
        type="password"
        label="Password"
        placeholder="••••••••"
        icon={LuLock}
      />

      <Button
        variant="secondry"
        size="large"
        className="mt-7 w-full justify-center"
      >
        <span>Create Account</span>
        <LuArrowRight size={18} />
      </Button>
    </Form>
  );
}

export default RegisterForm;
