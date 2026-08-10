import { Link } from "react-router";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

import Logo from "./Logo";

function Footer() {
  return (
    <footer className="mt-32 w-full border-t border-gray-800/70 bg-gray-950/40">
      <div className="mx-auto max-w-14/15 px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Logo />

            <p className="mt-4 max-w-md text-sm leading-6 text-gray-500">
              A modern collaborative workspace designed to help developers and
              teams plan, build, manage, and ship better products together.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="GitHub"
                className="rounded-lg border border-gray-800 p-2 text-gray-400 transition hover:border-blue-500/50 hover:text-blue-400"
              >
                <LuGithub size={18} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="rounded-lg border border-gray-800 p-2 text-gray-400 transition hover:border-blue-500/50 hover:text-blue-400"
              >
                <LuLinkedin size={18} />
              </a>

              <a
                href="mailto:hello@flowforge.dev"
                aria-label="Email"
                className="rounded-lg border border-gray-800 p-2 text-gray-400 transition hover:border-blue-500/50 hover:text-blue-400"
              >
                <LuMail size={18} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-200">Product</h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li>
                <Link to="/features" className="hover:text-gray-300">
                  Features
                </Link>
              </li>

              <li>
                <Link to="/how-it-works" className="hover:text-gray-300">
                  How it works
                </Link>
              </li>

              <li>
                <Link to="/user/login" className="hover:text-gray-300">
                  Login
                </Link>
              </li>

              <li>
                <Link to="/user/register" className="hover:text-gray-300">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-200">Company</h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-500">
              <li>
                <Link to="/about" className="hover:text-gray-300">
                  About us
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-gray-300">
                  Contact us
                </Link>
              </li>

              <li>
                <Link to="/privacy" className="hover:text-gray-300">
                  Privacy
                </Link>
              </li>

              <li>
                <Link to="/terms" className="hover:text-gray-300">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-gray-800/70 pt-6 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FlowForge. All rights reserved.</p>

          <p>Built for modern teams.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
