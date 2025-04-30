import "./app.css";
import LeftBar from "./components/leftBar/leftBar";
import TopBar from "./components/topBar/topBar";
import Gallery from "./components/gallery/gallery";

const App = () => {
  return (
    <div className="app">
      <LeftBar />
      <div className="container">
        <TopBar />
        <Gallery />
      </div>
    </div>
  );
};

export default App;
