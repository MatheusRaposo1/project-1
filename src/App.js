import "./App.css";
import { Component } from "react";
class App extends Component {
  state = {
    post: [
      {
        id: 1,
        name: "Matheus",
        cpf: 64523154205,
      },
      {
        id: 2,
        name: "Anita",
        cpf: 58654421452,
      },
      {
        id: 3,
        name: "Eliezer",
        cpf: 65893254120,
      },
    ],
  };

  render() {
    const { post } = this.state;
    return (
      <div className="App">
        {post.map((post) => (
          <div key={post.id}>
            <p>{post.name}</p>
            <h1>{post.cpf}</h1>
          </div>
        ))}
      </div>
    );
  }
}
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Olá mundo !!!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
