import logo from './logo.svg';
import './App.css';
import {Player} from "webvtt-player"
import sample from "./audio.mpga"
import transcript from "./post.vtt"

function App() {
  return (
    <div className="App">


<Player
  audio={sample}
  transcript={transcript} />
    </div>
  );
}

export default App;
