import React, {useRef, useEffect, useState} from "react";

const AudioPlayer = (props) => {
  const {src, isStarting, onPlayButtonClick} = props;
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(isStarting);
  const [isLoading, setIsLoading] = useState(true);

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

  }, [isStarting, isPlaying])

  return (
    <React.Fragment>
      <button
        className={`track__button track__button--${isPlaying ? `pause` : `play`}`}
        type="button"
        disabled={isLoading}
        onClick={() => {
          setIsPlaying(!isPlaying);
          onPlayButtonClick();
        }}
      />
      <div className="track__status">
        <audio ref={audioRef} />
      </div>
    </React.Fragment>
  )
}

export default AudioPlayer;
