import Button from "../components/ui/Button";

function login() {
  return (
    <div>
      <h1>Login</h1>
      <Button type="button" variant="primary" outline={false}>
        Login
      </Button>
      <Button type="button" variant="primary" outline={true}>
        Login
      </Button>

      <hr className="my-5" />

      <Button type="button" variant="secondry">
        Login
      </Button>
    </div>
  );
}

export default login;
