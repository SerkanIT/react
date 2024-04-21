import logo from "./reac.png";
import "./App.css";

import Counter from "./Components/Counter";
import square from "./Components/Counter";
import Square from "./Components/Square";
import circle from "./Components/Circle";
import Circle from "./Components/Circle";
import Navigation from "./Components/Navigation";
import Process from "./Components/Process";
import Playbutton from "./Components/Playbutton";
import Social from "./Components/Social";
import Hawaii from "./Components/Hawaii";
import Free from "./Components/Free";
import Feedback from "./Components/Feedback";
import Footer from "./Components/Footer";

function App() {
  let myName = "BMW M5 CS Competition";

  // function handlePlus() {
  //   setCounter(counter + 1 )
  // }
  // function handleMinus() {
  //   setCounter(counter - 1)
  // }
  return (
    <div className="App">
      <header className="">
        <div className="container">
          <Navigation />
          <Process />
          <Playbutton />
          <Social />
        </div>
      </header>

      <main>
        <section>
          <div className="container">
            <Hawaii />
          </div>
        </section>
      </main>
      <main>
        <section className="adam">
          <div className="container">
            <Free />
          </div>
        </section>
      </main>
      <main>
        <section>
          <div className="container">
            <Feedback />
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;

// OOP =  object-oriented programming , Инкапсюлация , Полиморфизм , Наследованый , Constructor //
