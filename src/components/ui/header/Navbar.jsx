import { LuLogIn, LuMenu, LuUser } from "react-icons/lu";
import Button from "../Button";
import Logo from "../Logo";
import Container from "../Container";
import NavbarItems from "./NavbarItems";

function Navbar({ items, handlerOpenMenu }) {
  return (
    <Container className="flex items-center justify-between px-4! py-6!">
      <Logo />

      <div className="hidden lg:flex">
        <NavbarItems items={items} />
      </div>

      <div className="flex items-center justify-center gap-2">
        <div className="hidden items-center justify-center gap-2 sm:flex">
          <Button outline={true} to="/login">
            <LuLogIn size={20} />
            <span>Login</span>
          </Button>

          <Button outline={true} to="/register">
            <LuUser size={20} />
            <span>Register</span>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 sm:hidden">
          <Button iconBtn={true} outline={true} to="/login">
            <LuLogIn size={20} />
          </Button>

          <Button iconBtn={true} outline={true} to="/register">
            <LuUser size={20} />
          </Button>
        </div>

        <Button
          iconBtn={true}
          outline={true}
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
