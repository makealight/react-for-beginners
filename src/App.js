import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("created :)");
    return () => console.log("destroyed :(");
  }, []);
  return <h1>Hello</h1>;
}

// function Hello() {
//   //위의 Hello()와 같은 내용을 이해를 위해 쉽게 작성한 버전이다.
//   useEffect(function () {
//     console.log("created :)");
//     return function () {
//       console.log("destroyed :(");
//     };
//   }, []);
//   return <h1>Hello</h1>;
// }

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
