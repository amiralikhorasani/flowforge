import { motion } from "motion/react";
import { Link } from "react-router";
import { LuArrowLeft, LuArrowRight, LuMail } from "react-icons/lu";

import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Input from "../components/ui/Input";
import Logo from "../components/ui/Logo";

function ForgotPassword() {
  return (
    <main className="flex min-h-svh items-center justify-center px-4 py-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Logo size="large" className="mx-auto mb-10" />
        <Container className="p-6 sm:p-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-semibold text-gray-200">
              Forgot Password?
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>
          </div>

          <form className="space-y-5">
            <Input
              type="email"
              label="Email"
              placeholder="you@example.com"
              icon={LuMail}
            />

            <Button
              variant="secondry"
              size="large"
              className="w-full justify-center"
            >
              <span>Send Reset Link</span>
              <LuArrowRight size={18} />
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/user/login"
              className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-blue-400"
            >
              <LuArrowLeft size={16} />
              Back to Sign In
            </Link>
          </div>
        </Container>
      </motion.div>
    </main>
  );
}

export default ForgotPassword;
