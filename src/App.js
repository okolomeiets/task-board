import "./assets/index.scss";
import TaskBoard from "./components/TaskBoard";
import Search from "./components/Search";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
        <header className="app-header">
            <Search />
        </header>
            <div className="app-wrapper">
                <Navigation />
                <TaskBoard />
            </div>
        <footer>
            <p>Task Board</p>
        </footer>
    </div>
  );
}

export default App;
