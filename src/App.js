import logo from './logo.svg';
import './App.css';

function App() {
  let contents = 'test string';
  let myStyle = {color:'red', fontSize:'50px'}

  function 함수(){
    return 100;
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={myStyle}>개발 Blog</div>
      </div>
      <img src={logo}></img>
      <h4>{contents}</h4>
    </div>
  );
}

export default App;
