import React, {useState} from "react";
import AudioPlayer from "../../components/audio-player/audio-player.jsx";

const withActivePlayer = (Component) => (props) => {
  const [activePlayer, setActivePlayer] = useState(0);

  return <Component
    {...props}
    renderPlayer={(src, id) => {
      const handleActiveChange = () => setActivePlayer(activePlayer === id ? -1 : id);

      return <AudioPlayer
        src={src}
        isActive={id === activePlayer}
        onPlayButtonClick={handleActiveChange}
      />;
    }}
  />;
};

export default withActivePlayer;
