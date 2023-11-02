import { useContext } from "react";;
import {QuestionContext} from "./QuizApp"
import { decode } from "html-entities";




export const TrueOrFalseQuestions = () => {
    const {questions, setQuestions} = useContext(QuestionContext);
    let BooleanQuestions = questions.filter(e => e.type === "boolean");
    const CheckAnswer = (event:React.ChangeEvent<HTMLInputElement>, index:number) =>
    {
      let newQuestions = [...BooleanQuestions]
      if(BooleanQuestions[index].correct_answer === event.target.value){
        BooleanQuestions[index].filledInAnswer = "true"
      }
      else{
        BooleanQuestions[index].filledInAnswer = "false"
      }
      let Questions = questions.filter(e => e.type === "multiple");
      setQuestions([...Questions,...newQuestions])
    }
    
     return(
      <div>
        {BooleanQuestions.map((e,index) => (
          
          <div>
            <p key={"question-" + index}>{decode(e.question)}</p>
            {e.filledInAnswer === undefined && (
            <fieldset>
              <input type="radio" value="False" name={`answer-${index}`} onChange={(event) => CheckAnswer(event, index)} /> False
              <input type="radio" value="True" name={`answer-${index}`} onChange={(event) => CheckAnswer(event, index)} style={{marginLeft:"30px"}} /> True
            </fieldset>
            )}
            {e.filledInAnswer !== undefined && (
              <div>
                {e.filledInAnswer === "true"? <p style={{color:"darkgreen"}}>Correct! you hit the right answer: {e.correct_answer}</p> : <p style={{color:"red"}}> Incorrect! the right answer is: {e.correct_answer}</p>}
              </div>
            )}
            </div>
            
          )
        
        )}
      </div>
     )
    }