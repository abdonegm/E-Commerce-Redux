import "./App.css";
import Pages from "./components/Home/pages/Pages";
import { store } from "./controller/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Pages />
      </Provider>
    </>
  );
}

export default App;
