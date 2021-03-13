import './App.css';
import myWonderfulImage from "./download.png";
import "./style.css";

function App() {
  return (
    <div className="App" style={{border:'solid(1px)black',maxwidth:'100vw'}}>
     <h1 className="titlered">Your name here</h1>
     <img src={myWonderfulImage}  alt="myimage" />
     <br/>
     <img src="/logo-og.png" alt="myimage" />
     
    </div>

  );
}

export default App;
