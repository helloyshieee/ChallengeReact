import ReactDom from "react-dom";
import App from "./App";

(async function () {
  const response = await fetch(
    encodeURI("https://data.winnipeg.ca/resource/4her-3th5.json?$limit=15")
  );
  const datas = await response.json();
  const rootElement = document.getElementById("root");
  ReactDom.render(<App items={datas} />, rootElement);
})();
