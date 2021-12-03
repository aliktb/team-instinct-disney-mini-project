import NavigationBar from "../components/NavigationBar";
import "../CSS/home.css";

function Home() {
  return (
    <div className="App">
      <header className="Disney">
        <div sticky="top" id="navbar">
          <NavigationBar />
        </div>
        <div class="parallax"></div>
      </header>

      <h2>Team instinct Babyyyyyyyy</h2>

    </div>
  );
}


export default Home;
