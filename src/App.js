import "./App.css";
import Navbar from "./components/Navbar";
import RoundedButton from "./components/RoundedButton";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <div className="w-full bg-gray-100 p-5">
        <div className="flex justify-around items-center gap-10">
          <div className="flex gap-5">
            <RoundedButton value="Men" />
            <RoundedButton value="Women" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
