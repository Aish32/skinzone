import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Home from "./Home";
import Compare from "./Compare";
import Questionnaire from "./Questionnaire";
import "./App.css";

const App = () => {
  const [dataset, setDataset] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await axios.get(
        "https://aish32.github.io/skinzone/dataset.json"
      );
      console.log(data);
      setDataset(data);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/compare"
          component={() => <Compare products={dataset} />}
        />
        <Route exact path="/skintype" component={Questionnaire} />
      </BrowserRouter>
    </div>
  );
};

export default App;
