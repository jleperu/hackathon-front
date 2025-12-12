import {useState, useEffect} from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Types from "./pages/Types/Types";

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
            <Header />
            <Types />
        </div>
    );
}

export default App;
