import MainRouter from "./routes/MainRouter";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainRouter />
      </Provider>
    </div>
  );
}

export default App;
