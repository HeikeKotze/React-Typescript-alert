import './App.css';
import Button from "./ButtonComponent";


function App() {

  //GLOBAL VARIABLE
  var name = "Heike Kotze";

  //UPPERCASE FUNCTION
  const vowelUppercase = (str: string) => {
    return str.split('').reduce((a, c) => a + (/[aeou]/i.test(c) ? c.toUpperCase() : c.toLowerCase()), "");
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

  return (
    <>
      <h1>Heike Kotze</h1>
      <Button
        border='dotted'
        color='grey'
        height='100px'
        onClick={() => displayalert()}
        radius='30%'
        width='100px'
        children="Click"
      />
    </>
  );
}

export default App;
