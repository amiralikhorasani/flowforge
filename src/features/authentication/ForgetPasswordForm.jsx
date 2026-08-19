import { LuArrowRight, LuMail } from "react-icons/lu";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Form from "../../components/forms/Form";

function ForgetPasswordForm({ className = "" }) {
  return (
    <Form className={`${className} space-y-5`}>
      <Input
        type="email"
        label="Email"
        placeholder="you@example.com"
        icon={LuMail}
      />

      <Button
        variant="secondary"
        size="large"
        className="w-full justify-center"
      >
        <span>Send Reset Link</span>
        <LuArrowRight size={18} />
      </Button>
    </Form>
  );
}

export default ForgetPasswordForm;
