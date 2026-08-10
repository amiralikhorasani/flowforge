import { motion } from "motion/react";
import Container from "../../components/ui/Container";
import Logo from "../../components/ui/Logo";

function AuthenticationForm({ title, subtitle, form, children }) {
  const FormAuth = form;

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
            <h1 className="text-3xl font-bold text-gray-200">{title}</h1>

            <p className="mt-2 text-sm text-gray-400">{subtitle}</p>
          </div>

          <FormAuth />

          {children}
        </Container>
      </motion.div>
    </main>
  );
}

export default AuthenticationForm;
