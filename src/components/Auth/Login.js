import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const loginUser = () => {
    axios
      .post("https://api.qtlms.uz/api/v1/login", {
        name: phone,
        password: pass,
      })
      .then((res) => {
        const token = res.data.access_token;
        localStorage.setItem("token", token);
        // console.log(res);
      })
      .catch((err) => {});
  };
  return (
    <div>
      <div>Telfon raqam</div>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <div>Parol</div>
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <br />
      <button onClick={loginUser}>Kirish</button>
    </div>
  );
};
export default Login;
