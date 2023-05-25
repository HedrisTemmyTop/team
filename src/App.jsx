import "./App.css";

import Form from "./components/Form";
import CloseBtn from "./components/CloseBtn";
import Checkout from "./components/Checkout";
function App() {
  return (
    <div className="wrapper grid grid-cols-12">
      <CloseBtn />
      <Form />
      <Checkout />
    </div>
  );
}

export default App;
