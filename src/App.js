import {Menubar} from "./components/menubar";
import {useState, useEffect} from "react";
import axios from "axios";

function App() {
  const [collaborators, setCollaborators] = useState([]);

  useEffect(() => {
    axios.get('/collaborators')
      .then((response) => {
        console.log(response.data)
      })

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <Menubar />
    </div>
  );
}

export default App;
