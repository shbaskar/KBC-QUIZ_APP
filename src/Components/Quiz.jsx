import { useEffect, useState } from "react"
import useSound from "use-sound";
import wrong from "../sounds/wrong.mp3"
import correct from "../sounds/correct.mp3"
export default function Quiz({
    data,
    setStop,
    setQuestionNumber,
    questionNumber }) {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer")

    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);

    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    }, [data, questionNumber])

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration)
    }
    const handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName("answer active");
        
        delay(3000, () => {
            setClassName(a.correct ? "answer correct" : "answer wrong");
        });
        delay(5000, () => {
            if (a.correct) {
                correctAnswer();
                delay(3000, () => {
                    setQuestionNumber(previous => previous + 1);
                    setSelectedAnswer(null);
                })
            }
            else {
                wrongAnswer();
                delay(3000, () => {
                    setStop(true);
                })

            }
        });
    }

    return (
        <div className="quiz">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((a) => (
                    <div className={selectedAnswer === a ? className : "answer"} onClick={() => handleClick(a)}>{a.text}</div>
                ))}

            </div>
        </div>
    )
}
