import {Router} from "@reach/router";
import './App.css';
import AddAuthor from "./componwnts/AddAuthor";
import ShowAuthors from "./componwnts/ShowAuthors";
import UpdateAuthor from "./componwnts/UpdateAuthor";

function App() {
  return (
    <div className="App">
      <Router>
        <AddAuthor path="/new" />
        <ShowAuthors path="/" />
        <UpdateAuthor path="/edit/:id"/>
      </Router>
      
    </div>
  );
}

export default App;
