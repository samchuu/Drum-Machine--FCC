import React, { useState } from "react";
import DrumMachine from "./components/DrumMachine";
import data from "./data";
function App() {
  const [audioClips, setAudioClips] = useState(data());
  const [keyName, setKeyName] = useState("");
  return (
    <div className="App">
      <h1>The Ultimate Drum Machine</h1>
      <DrumMachine
        audioClips={audioClips}
        setAudioClips={setAudioClips}
        keyName={keyName}
        setKeyName={setKeyName}
      />
    </div>
  );
}

export default App;
