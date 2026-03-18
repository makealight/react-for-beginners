import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]); // ...은 javascript의 확장 연산자 ...뒤의 내용(배열)을 풀어놓는다.
    setToDo("");
    // console.log(toDos);
  };
  useEffect(() => {
    console.log(toDos);
  }, [toDos]); //return 위에 오게 해야 한다.
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>My To Dos ({toDos.length})</h1>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        ></input>
        <button>Add To Do</button>
      </form>
      <hr></hr>
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
