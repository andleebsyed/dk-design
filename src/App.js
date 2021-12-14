import "./App.css";
import { Header } from "./components/Header/Header";
import { Process } from "./components/Process/Process";
import { Products } from "./components/Products/Products";
import { Slogan } from "./components/Slogan/Slogan";
function App() {
  return (
    <div className="App">
      <Header />
      <Slogan />
      <Process />
      <Products />
    </div>
  );
}
export default App;
