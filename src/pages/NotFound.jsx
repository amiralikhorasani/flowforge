import { motion } from "motion/react";
import { Link } from "react-router";
import { LuArrowLeft } from "react-icons/lu";

import Button from "../components/ui/Button";
import Container from "../components/ui/Container";

function NotFound() {
  return (
    <main className="flex min-h-svh items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl"
      >
        <Container className="p-8 text-center sm:p-12">
          <span className="text-8xl font-bold text-blue-400">404</span>

          <h1 className="mt-5 text-3xl font-bold text-gray-200">
            Page not found
          </h1>

          <p className="mx-auto mt-3 max-w-md text-gray-400">
            The page you're looking for doesn't exist or may have been moved
            somewhere else.
          </p>

          <Link to="/" className="mt-8 inline-flex">
            <Button variant="secondary">
              <LuArrowLeft size={18} />
              <span>Back to Home</span>
            </Button>
          </Link>
        </Container>
      </motion.div>
    </main>
  );
}

export default NotFound;
