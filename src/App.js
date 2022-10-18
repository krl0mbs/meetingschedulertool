import logo from './logo.svg';
import './App.css';
import Sidebar from './sidebar';  

function App() {
  return (
    <div className="App">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <header className="App-header"> {/*defines the header, use classname="App-header" to tell which class from App.css will be used on this tag*/}
        <p>
          Meeting Scheduler {/*text that will appear in the header*/}
        </p>
      </header>
      <body className="App-body"> {/*defines the header, use classname="App-header" to tell which class from App.css will be used on this tag*/}
        <img src={logo} className="App-logo" alt="logo" /> {/*defines the logo*/}
        <p>
          Edit <code>src/App.js</code> and save to reload. {/*text that will appear in the header*/}
        </p>
        <a /*defines the destination of the link*/
          className="App-link" /*class that properties will be pulled from in App.css*/
          href="https://reactjs.org" /*link destination*/
          target="_blank"
          rel="noopener noreferrer"
        > 
          Learn React {/*defines the text that the link will be within*/} 
        </a>
      </body>
    </div>
  );
}

export default App;
