import "./styles.css";
import { useState } from "react";

const responses = [
  "This isn't super strong. This isn't even little strong!",
  "No, I want this gone. ",
  "NO, GOD! NO, GOD PLEASE NO! NOOOOO!",
  "I hate looking at that. I wanna smash it.",
  "If I had a gun, with two bullets, and I was in a room with Hitler, Bin Laden and Toby, I would still find a way to shoot your keyboard twice.",
  "I would rather work for an upturned broom with a bucket for a head than watch you use that password.",
  "You are a professional idiot.",
  "Newsflash: THIS PASSWORD IS NOT STRONG!",
  "Boy, have you lost your mind? Cause I'll help you find it!",
  "Hey, you know what's even cooler than this? Every other password that ever existed!",
  "All you need is love. False. The four basic human necessities are air, water, food, and strong password (which this, isn't)",
  "Password. Pathetic. Pathetic password.",
  "Ask yourself, 'would an idiot do that?'",
  "This is somewhere between weak and very weak.",
  "Once every hour, someone is involved in an internet scam."
];

export default function App() {
  var [response, setResponse] = useState(" ");
  function inputChangeHandler() {
    var num = Math.floor(Math.random() * responses.length);
    var response = responses[num];
    setResponse(response);
    console.log(num);
  }
  return (
    <div className="App">
      <h1>The Office : Password Checker! </h1>
      <h1>Enter your password : </h1>
      <div className="inputBox">
        <input onChange={inputChangeHandler}></input>
      </div>

      <h3>{response}</h3>
    </div>
  );
}
