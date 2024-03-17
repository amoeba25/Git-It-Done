import Home from "./components/Home";
import { Link, Route } from "wouter";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
      <h1 className="text-red-700">Hello world!</h1>
      <nav>
        <Link href="/"> Home </Link> <br />
        <Link href="/login"> Login</Link> <br />
        <Link href="/register">Register</Link> <br />
      </nav>
      <main>
        <Route path="/">
          {" "}
          <Home />{" "}
        </Route>
        <Route path="/login">
          {" "}
          <Login />{" "}
        </Route>
        <Route path="/register">
          {" "}
          <Register />{" "}
        </Route>
      </main>
    </>
  );
}

export default App;
