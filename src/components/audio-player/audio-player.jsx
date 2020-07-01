import React, {useRef, useEffect, useState} from "react";
import PropTypes from "prop-types";

const AudioPlayer = (props) => {
  const {src, isActive, onPlayButtonClick} = props;
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(isActive);
  const [isLoading, setIsLoading] = useState(true);

  const handleButtonClick = () => {
    setIsPlaying(!isPlaying);
    onPlayButtonClick();
  };

  useEffect(() => {
    const audio = audioRef.current;

    audio.oncanplaythrough = () => setIsLoading(false);
  });

  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

  }, [isPlaying]);

  useEffect(() => {
    if (!isActive) {
      setIsPlaying(false);
    }

  }, [isActive]);

  return (
    <React.Fragment>
      <button
        aria-label={`${isPlaying ? `Pause` : `Play` } button`}
        className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
        type="button"
        disabled={isLoading}
        onClick={handleButtonClick}
      />
      <div className="track__status">
        <audio ref={audioRef} src={src} />
      </div>
    </React.Fragment>
  );
};

AudioPlayer.defaultProps = {
  onPlayButtonClick: () => {},
};

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default AudioPlayer;
