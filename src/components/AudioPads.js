import React, { useEffect } from "react";

function AudioPads({
  audioClips,
  setAudioClips,
  clip,
  keyTrigger,
  keyId,
  keyName,
  setKeyName,
}) {
  useEffect(() => {
    document.addEventListener("keydown", keyPressHandler);
  }, []);

  const filterHandler = () => {
    setAudioClips(
      audioClips.map((clip) => {
        if (clip.id === keyId) {
          return {
            ...clip,
            active: true,
          };
        } else {
          return {
            ...clip,
            active: false,
          };
        }
      })
    );
  };

  const keyPressHandler = (e) => {
    const audioTag = document.getElementById(clip.keyTrigger);
    if (e.key.toUpperCase() === keyTrigger) {
      audioTag.play();
      setKeyName(keyId + " ");
      filterHandler();
    }
  };
  const playSound = (e) => {
    console.log(e.target.innerText);
    console.log(keyTrigger);
    if (e.target.innerText === keyTrigger) {
      const audioTag = document.getElementById(clip.keyTrigger);
      audioTag.play();
      setKeyName(keyId + " ");
      filterHandler();
    }
  };
  return (
    <div id="display">
      <div className="drum-pad" onClick={playSound} id={keyId}>
        {keyTrigger}
        <audio className="clip" src={clip.url} id={keyTrigger} />
      </div>
      {clip.active ? <p className="description">{keyName}</p> : ""}
    </div>
  );
}

export default AudioPads;
