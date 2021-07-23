import React from "react";
import "../styles.css";
import AudioPads from "./AudioPads";

function DrumMachine({ audioClips, setAudioClips, keyName, setKeyName }) {
  return (
    <div id="drum-machine">
      {audioClips.map((clip) => {
        return (
          <AudioPads
            keyName={keyName}
            setKeyName={setKeyName}
            audioClips={audioClips}
            setAudioClips={setAudioClips}
            clip={clip}
            keyId={clip.id}
            key={clip.id}
            keyTrigger={clip.keyTrigger}
          />
        );
      })}
      <img
        src="https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg"
        alt="fcc"
      />
    </div>
  );
}

export default DrumMachine;
