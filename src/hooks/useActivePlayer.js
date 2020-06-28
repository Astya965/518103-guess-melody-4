import {useState} from "react";

const useActivePlayer = () => {
  const [activePlayer, setActivePlayer] = useState(0);
  const handleActiveChange = (id) => setActivePlayer(activePlayer === id ? -1 : id);

  return [activePlayer, handleActiveChange];
};

export default useActivePlayer;
