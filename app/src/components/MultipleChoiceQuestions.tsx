import { useContext } from "react";;
import {QuestionContext} from "./QuizApp"
import { decode } from "html-entities";



export const MultipleChoiceQuestion = () => {
    const {questions,setQuestions} = useContext(QuestionContext)
    let multipleChoiceQuestions = questions.filter(question => question.type === 'multiple').map((question) =>{
      {
        return{
          ...question,
          allOptions: [question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5)
  
        }
      }   
  }) 
  
  const QuestionAnswer = (event: React.ChangeEvent<HTMLSelectElement>,index:number) => {
    const newQuestions = [...multipleChoiceQuestions];
    let filledInAnswer = event.target.value;
    if(filledInAnswer === multipleChoiceQuestions[index].correct_answer){
      multipleChoiceQuestions[index].filledInAnswer = "true"
    }
    else{
      multipleChoiceQuestions[index].filledInAnswer = "false"
    }
    let booleanQuestions = questions.filter(e => e.type === "boolean");
    setQuestions([...booleanQuestions,...newQuestions])
   
  }
  
  return (
    <>
      {multipleChoiceQuestions.map((question, index) => (
        <div key={`question-wrapper-${index}`}>
          <p>{decode(question.question)}</p>
  
         
          {question.filledInAnswer === undefined && (
            <select onChange={(event) => QuestionAnswer(event, index)}>
              <option value="" disabled selected>
                Answer
              </option>
              {question.allOptions?.map((answer, Optionindex) => (
                <option value={answer} key={Optionindex}>
                  {decode(answer)}
                </option>
              ))}
            </select>
          )}
  
          
          {question.filledInAnswer !== undefined && (
            <div>
              {question.filledInAnswer === "true" ? (
                <p style={{color:'darkgreen'}}>Correct! You chose the right answer: {decode(question.correct_answer)} </p>
              ) : (
                <div>
                  <p style={{color:'red'}}>Incorrect! The right answer: {decode(question.correct_answer)}</p>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </>
  );
  }
  