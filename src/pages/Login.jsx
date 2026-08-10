import { motion } from "motion/react";
import { Link } from "react-router";
import { LuArrowRight, LuLock, LuMail } from "react-icons/lu";

import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Input from "../components/ui/Input";

function Login() {
  return (
    <main className="flex min-h-svh items-center justify-center px-4 py-5">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Container className="p-6 sm:p-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-200">Welcome back</h1>

            <p className="mt-2 text-sm text-gray-400">
              Sign in to continue to FlowForge
            </p>
          </div>

          <form className="space-y-5">
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
                    to="/forgot-password"
                    className="text-xs text-blue-400 hover:text-blue-300"
                  >
                    Forgot password?
                  </Link>
                </div>
              }
              placeholder="••••••••"
              icon={LuLock}
            />

            <Button
              variant="secondry"
              size="large"
              className="w-full justify-center"
            >
              <span>Sign In</span>
              <LuArrowRight size={18} />
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/user/register"
              className="text-blue-400 hover:text-blue-300"
            >
              Create one
            </Link>
          </p>
        </Container>
      </motion.div>
    </main>
  );
}

export default Login;
