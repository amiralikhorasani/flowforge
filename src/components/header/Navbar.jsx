import { LuLogIn, LuMenu, LuUser } from "react-icons/lu";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import Container from "../ui/Container";
import NavbarItems from "../ui/NavbarItems";

function Navbar({ items, handlerOpenMenu }) {
  return (
    <Container className="z-50! flex items-center justify-between px-4! py-6! shadow-md shadow-gray-900">
      <Logo />

      <div className="hidden lg:flex">
        <NavbarItems items={items} />
      </div>

      <div className="flex items-center justify-center gap-2">
        <div className="hidden items-center justify-center gap-2 sm:flex">
          <Button variant="outline" to="/user/login">
            <LuLogIn size={20} />
            <span>Login</span>
          </Button>

          <Button variant="outline" to="/user/register">
            <LuUser size={20} />
            <span>Register</span>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 sm:hidden">
          <Button iconBtn={true} variant="outline" to="/user/login">
            <LuLogIn size={20} />
          </Button>

          <Button iconBtn={true} variant="outline" to="/user/register">
            <LuUser size={20} />
          </Button>
        </div>

        <Button
          iconBtn={true}
          variant="outline"
          className="shadow-none lg:hidden"
          onClick={handlerOpenMenu}
        >
          <LuMenu size={20} />
        </Button>
      </div>
    </Container>
  );
}

export default Navbar;
