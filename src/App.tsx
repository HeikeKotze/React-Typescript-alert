import React from 'react';
import './App.css';


function App() {

  var name = "Heike";

  //UPPERCASE FUNCTION
  const vowelUppercase = (str: string) => {
    var N = str.length;
    for (var i = 0; i < N; i++) {
      if (
        str[i] === "a" ||
        str[i] === "e" ||
        str[i] === "i" ||
        str[i] === "o" ||
        str[i] === "u"
      ) {
        document.write(str[i].toUpperCase());
      } else {
        document.write(str[i]);
      }
    }
  }



  //REVERSE NAME FUNCTION
  const reverseName = (str: string) => {
    var splitstring = str.split("");
    var reverseArray = splitstring.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
  }

  //DISPLAY ALERT FUNCTION
  function displayalert() {
    var reversestring = reverseName(name);
    var uppercasestring = vowelUppercase(reversestring);
    alert(uppercasestring);

  }

  //BUTTON CLICK FUNCTION
  const buttonClick = () => {
    displayalert()
  }


  return (
    <div className="App">
      <h1>Heike</h1>
      <button type="button" onClick={buttonClick}>CLICK</button>
    </div>
  );
}

export default App;
