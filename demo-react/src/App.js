import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Parent from './Components/Parent';
import Functionalcomp from './Components/Functionalcomp';
import Classcomp from './Components/Classcomp';
import Parfun from './Components/Parfun';





function App() {
  return (
    <div className="App">
      {/*<Greet />
      <Welcome />*/}
      {/*<Hello name="Dora"/>*/}
      {/*<Message/>*/}
      {/* <Parent/> */}
      {/* <Functionalcomp name="dora"></Functionalcomp> */}
      <Classcomp></Classcomp>
      {/* <Parfun></Parfun> */}
    </div>
  );
}

export default App;
