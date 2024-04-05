import logo from "./logo.svg";
import "./App.css";
import InputField from "./Components/InputField";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [password, setPassword] = useState();

  console.log("Test", name);

  return (
    <div>
      <InputField
        type={"text"}
        inputTitle={"Name:"}
        holder={"Enter your name"}
        required={true}
        value={name}
        getValue={setName}
      />
      <InputField
        type={"number"}
        inputTitle={"Age:"}
        holder={"Enter your age"}
        required={true}
        value={age}
        getValue={setAge}
      />
      <InputField
        type={"password"}
        inputTitle={"Password:"}
        holder={"Enter your password"}
        required={true}
        value={age}
        getValue={setAge}
      />
      <p>{(name, age)}</p>
    </div>
  );
}

export default App;
