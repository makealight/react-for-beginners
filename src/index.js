import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode> //개발과정에서 Reat 코드를 엄격하게 검수하기 위해 두번씩 실행하게 해주는 코드
  <App />,
  // </React.StrictMode>
);
