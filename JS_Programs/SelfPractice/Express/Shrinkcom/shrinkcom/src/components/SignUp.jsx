import { useRef } from "react";
import axios from "axios";

function SignUp() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const submit = async (e) => {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:3101/user/create",
        data
      );
      console.log("Sign Up Successfully");
    } catch (error) {
      console.log("Sign up failed!");
    }
  };

  return (
    <form onSubmit={submit}>
      <label htmlFor="email">Name : </label>
      <input ref={nameRef} type="name" name="name" />
      <br />

      <label htmlFor="email">Email : </label>
      <input ref={emailRef} type="email" name="email" />
      <br />

      <label htmlFor="password">Password : </label>
      <input ref={passwordRef} type="password" name="password" />
      <br />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default SignUp;
