import { useState } from "react";
import { useLoginMutation } from "../../app/services/pairTradeBlocks";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;
  const [login, { error }] = useLoginMutation();

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleLogon() {
    if (email && password) {
      login({
        email: email,
        password: password,
      });
    }
  }
  return (
    <div>
      <div>
        <label htmlFor="email-input">Email: </label>
        <input
          className="email-input"
          id="email-input"
          name="email"
          placeholder=""
          value={email}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="password-input">Password: </label>
        <input
          className="password-input"
          id="password-input"
          name="password"
          placeholder=""
          value={password}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button onClick={() => handleLogon()}>Login</button>
      <span>
        {" "}
        {error !== undefined && (
          <div>
            {error.status} {JSON.stringify(error.data)}
          </div>
        )}
      </span>
    </div>
  );
};

export default Login;
