import { Center } from "@chakra-ui/react";
import { useState } from "react";
import Scoreboard from "./components/Scoreboard/ScoreboardComponents";
import Actions from "./components/Actions/ActionsComponent";

function App() {
  const [runs, setRuns] = useState(0);
  const [noOfFours, setNoOfFours] = useState(0);
  const [noOfSix, setNoOfSix] = useState(0);
  const [noOfWides, setNoOfWides] = useState(0);
  const [noOfNoBalls, setNoOfNoBalls] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [balls, setBalls] = useState(0);

  const actionHandller = (action) => {
    if (action === "No Ball") {
      setNoOfNoBalls((prev) => prev + 1);
      setRuns((prev) => prev + 1);
    } else if (action === "Wide") {
      setNoOfWides((prev) => prev + 1);
      setRuns((prev) => prev + 1);
    } else {
      setBalls((prev) => prev + 1);
      switch (action) {
        case "1":
          setRuns((prev) => prev + 1);
          break;
        case "2":
          setRuns((prev) => prev + 2);
          break;
        case "3":
          setRuns((prev) => prev + 3);
          break;
        case "4":
          setRuns((prev) => prev + 4);
          setNoOfFours((prev) => prev + 1);
          break;
        case "5":
          setRuns((prev) => prev + 5);
          break;
        case "6":
          setRuns((prev) => prev + 6);
          setNoOfSix((prev) => prev + 1);
          break;
        case "W":
          setWickets((prev) => prev + 1);
          break;
        default:
          break;
      }
    }
  };

  return (
    <Center h="100vh" w="100vw" flexDirection="column">
      <Scoreboard
        balls={balls}
        runs={runs}
        wickets={wickets}
        noball={noOfNoBalls}
        totalFours={noOfFours}
        totalSixs={noOfSix}
        wide={noOfWides}
      />
      <br />
      <Actions actionHandller={actionHandller} />
    </Center>
  );
}

export default App;
