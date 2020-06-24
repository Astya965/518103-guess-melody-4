import React, {useRef, useEffect, useState} from "react";
import PropTypes from "prop-types";

const AudioPlayer = (props) => {
  const {src, isStarting, onPlayButtonClick} = props;
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(isStarting);
  const [isLoading, setIsLoading] = useState(true);

  const handleButtonClick = () => {
    setIsPlaying(!isPlaying);
    onPlayButtonClick();
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = src;

    audio.oncanplaythrough = () => setIsLoading(false);

    if (isStarting && isPlaying) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }

  }, [isStarting, isPlaying]);

  return (
    <React.Fragment>
      <button
        className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
        type="button"
        disabled={isLoading}
        onClick={handleButtonClick}
      />
      <div className="track__status">
        <audio ref={audioRef} />
      </div>
    </React.Fragment>
  );
};

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isStarting: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default AudioPlayer;
