import './App.css';
import { useEffect, useMemo, useState } from 'react'
import Quiz from './Components/Quiz';
import Timer from './Components/Timer';
import useSound from "use-sound";
import play from "../src/sounds/play.mp3"
import Username from './Components/Username';
import data from './Components/Data';
function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("₹0")
  const [letsplay] = useSound(play);

  useEffect(() => {
    letsplay();
  }, [letsplay])
  
  const money = useMemo(() =>
    [
      { id: 1, amt: '₹1,000' },
      { id: 2, amt: '₹2,000' },
      { id: 3, amt: '₹3,000' },
      { id: 4, amt: '₹5,000' },
      { id: 5, amt: '₹10,000' },
      { id: 6, amt: '₹20,000' },
      { id: 7, amt: '₹40,000' },
      { id: 8, amt: '₹80,000' },
      { id: 9, amt: '₹1,60,000' },
      { id: 10, amt: '₹3,20,000' },
      { id: 11, amt: '₹6,40,000' },
      { id: 12, amt: '₹12,50,000' },
      { id: 13, amt: '₹25,00,000' },
      { id: 14, amt: '₹50,00,000' },
      { id: 15, amt: '₹1 Crore' },
      { id: 16, amt: '₹7 Crores' }
    ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 && setEarned(money.find((m) => m.id === questionNumber - 1).amt);
  }, [money, questionNumber]);

  return (
    <div className="App">
      {!username ? (
        <Username setUsername={setUsername} />
        ) : (
        <>
          <div className='main'>
            {stop ? <h1 className='endText'>You have Earned {earned}</h1> : (
              <>
                <div className="top">
                  <div className="timer">{<Timer setStop={setStop} questionNumber={questionNumber} />}</div>
                </div>
                <div className="bottom"><Quiz
                  data={data}
                  setStop={setStop}
                  setQuestionNumber={setQuestionNumber}
                  questionNumber={questionNumber}
                /></div>
              </>
            )}
          </div>
          <div className='pyramid'>
            <ul className='moneyList' >
              {money.map((m) => (
                <li className={questionNumber === m.id ? 'moneyListItem active' : 'moneyListItem'}>
                  <span className='moneyListItemNumber'>{m.id}</span>
                  <span className='moneyListItemAmount'>{m.amt}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>

  );
}

export default App;
