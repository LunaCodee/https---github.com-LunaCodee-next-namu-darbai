import styles from "./styles.module.css";
import { useState } from "react";

const uzduotysPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>

      <div className={styles.form}>
        <input
          onChange={(event) => setName(event.target.value)}
          value={name}
          placeholder="name"
        />
        <input
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          placeholder="email"
        />
        <input
          onChange={(event) => setPassword(event.target.value)}
          value={password}
          placeholder="password"
        />
        <button
          onClick={() => {
            console.log(name);
            console.log(email);
            console.log(password);
          }}
        >
          Click me
        </button>
        {/* <button onClick={() => setName("Robertas")}>Click me</button> */}
      </div>

      <div className={styles.userInfo}>
        <div>{name}</div>
        <div>{email}</div>
        <div>{password}</div>
        <div>{password.length}</div>
        <div>{name.length + email.length}</div>
      </div>
    </>
  );
};

export default uzduotysPage;