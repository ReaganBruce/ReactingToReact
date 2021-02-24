import React, { useState, useEffect } from "react";
import Greeter from "./components/Greeter";

const App = () => {
  const [username, setUsername] = useState("");
  const [loaded, setLoaded] = useState(false); // setLoaded is globally set to false.
  
  const handleLoad = () => {
    setLoaded(true); //In the handleLoad() function, setLoaded() is redefined to true.
  };
  
    const handleUsername = (e) => {
      setUsername(e);
    };

  useEffect(() => {
    console.log(`Current State is ${loaded}`);
    setTimeout(() => {
      handleLoad(); //After three seconds call handleLoad(), which has setLoaded() === true.
    }, 3000);
  }, [loaded]);

  //IF TRUE, PRINT THIS:
  if (loaded) {
    return (
      <div>
        <Greeter phrase="What's up," name="Jake?" />
        <Greeter phrase="Oh shiiiii, ahahaha, YO wtf... is up" name="Reagan!" />
        <Greeter phrase="That's sick," name="Jake!" />
        <input
          placeholder="Login Username"
          value={username}
          onChange={(e) => handleUsername(e.target.value)}
        ></input>
        <p>You are logging in as: {username}</p>
      </div>
    );
    //IF FALSE, PRINT THIS:
  } else {
    return (
      <>
        <h1>Website Loading...</h1>
        <button onClick={handleLoad}>Please..... Login..I'm begging you so much to just pls...</button>
      </>
    );
  }
};

export default App;
