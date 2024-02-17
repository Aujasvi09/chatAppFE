import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import ChatsPage from "./Pages/ChatsPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/chats" Component={ChatsPage} />
      </Routes>
    </div>
  );
}

export default App;
