// import Button from "./Button";
// import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [serchWord, setSerachWord] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onSearch = () => {
    if (keyword !== "") {
      setSerachWord(keyword);
    }
  };
  //userEffect(함수, [데이터])는 원하는 값([데이터])이 변화할 때만 실행한다. [데이터]가 비어있을 경우 처음 한번만 실행하고, 더이상 실행하지 안는다.
  useEffect(() => {
    console.log("I run only once..");
  }, []);
  useEffect(() => {
    if (keyword !== "") {
      console.log("I run when 'keyword' changes.");
    }
  }, [keyword]);
  useEffect(() => {
    if (counter !== 0) {
      console.log("I run when 'counter' changes.");
    }
  }, [counter]);
  useEffect(() => {
    if (keyword !== "" && counter !== 0) {
      console.log("I run when 'keyword or counter' change.");
    }
  }, [keyword, counter]); // keyword 나 counter 둘 중 하나의 값이 변하면 실행한다.

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <button onClick={onSearch}>검색</button>
      <h1>카운터: {counter}</h1>
      <h1>검색결과: {serchWord}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
