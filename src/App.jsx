import React, { useState, useEffect } from "react";
import Greeter from "./components/Greeter";

const App = () => {
  const [username, setUsername] = useState("");
  const [loaded, setLoaded] = useState(false);
   // setLoaded is globally set to false.
  
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
      <div className="container-flow m-5 mt-5">
        <Greeter phrase="What's up," name="Jake?" />
        <Greeter phrase="oh shiiiii, ahahaha, YO wtf... is up" name="reagan!" />
        <Greeter phrase="That's sick," name="Jake!" />
        <Greeter phrase="yeah...man, ahaa. u wanna log in," name="reagan?" />
        <Greeter phrase="Sure! Nothing is gonna happen, right?" name="Jake..." />
        <Greeter phrase="nahhhhh" />


        <input
          placeholder="Login Username"
          value={username}
          onChange={(e) => handleUsername(e.target.value)}
        ></input>
        <p className='mt-3'>You are logging in as: {username}</p>
      </div>
    );
    //IF FALSE, PRINT THIS:
  } else {
    return (
      <div className="container">
        <h1>Website Loading...</h1>
        <button className='btn btn-danger btn-lg ' onClick={handleLoad}>Please Login! PLS</button>
      </div>
    );
  }
};

export default App;
