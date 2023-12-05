import React, {useEffect, useState} from 'react';
import axios from 'axios';

const shuffleAnswers = (array) => {
    const shuffledAnswers = [...array]; //shallow copy
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
      } 
      return shuffledAnswers
}


export default function Trivia(){
    const [data, setData] = useState({});
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const url = 'https://opentdb.com/api.php?amount=1'

    useEffect(() => {
        axios.get(url)
        .then((response) => {
            setData(response.data);
            setSelectedAnswer(null);
        })
        .catch(function(error) {
            console.error("trivia error")
            console.error(error);
        });
    }, []);

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
    }

    const isCorrectAnswer =(answer) => {
        return answer === data.results[0].correct_answer;
    }

    return(
        <div className='card my-4 trivia-container'>
            <React.Fragment>
                <div className='card-body'>
                    <p className='display-6 title m-0'>Trivia</p>
                        {data.results ? (
                            <React.Fragment>
                                <p className='trivia-question'>{data.results[0].question}</p>
                                {data.results[0].type === "multiple" ? (
                                    <div className='multipleChoiceAnswers'>
                                        {shuffleAnswers([...data.results[0].incorrect_answers, data.results[0].correct_answer]).map((answer, index) => (
                                            <button 
                                                key={index} 
                                                className={`m-2 btn ${
                                                    selectedAnswer === answer ? 
                                                        isCorrectAnswer(answer) ? 'correct' : 'incorrect' 
                                                        : 'notAnswered'}`}
                                                onClick={() => handleAnswerClick(answer)}
                                                disabled={selectedAnswer !== null}
                                                >
                                                    {answer}
                                                    </button>
                                        ))}
                                    </div>
                                ) : (
                                    <div className='trueFalseAnswers'>
                                        <button className={`btn ${
                                            selectedAnswer === 'True'
                                            ? isCorrectAnswer('True')
                                            ? 'correct'
                                            : 'incorrect'
                                        : 'notAnswered'
                                        }`} onClick={() => setSelectedAnswer('True')}
                                            disabled = {selectedAnswer !== null}>
                                        True
                                        </button>
                                        <button className={`btn ${
                                            selectedAnswer === 'False'
                                            ? isCorrectAnswer('False')
                                            ? 'correct'
                                            : 'incorrect'
                                        : 'notAnswered'
                                        }`} onClick={() => setSelectedAnswer('False')}
                                            disabled = {selectedAnswer !== null}>
                                        False
                                        </button>
                                
                                    </div>
                                )}
                            </React.Fragment>
                        ) : (
                            <p>Loading...</p>
                        )}                    
                </div>
            </React.Fragment>
        </div>
    )
}