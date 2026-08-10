import { motion } from "motion/react";
import { Link } from "react-router";
import { LuArrowRight, LuLock, LuMail, LuUser } from "react-icons/lu";

import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Input from "../components/ui/Input";
import Logo from "../components/ui/Logo";

function Register() {
  return (
    <main className="flex min-h-svh items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Logo size="large" className="mx-auto mb-10" />
        <Container className="p-6 sm:p-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-200">
              Create your account
            </h1>

            <p className="mt-2 text-sm text-gray-400">
              Start building with FlowForge
            </p>
          </div>

          <form className="space-y-5">
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
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/user/login"
              className="text-blue-400 hover:text-blue-300"
            >
              Sign in
            </Link>
          </p>
        </Container>
      </motion.div>
    </main>
  );
}

export default Register;
