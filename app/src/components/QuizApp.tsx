import { IQuestionsContext,IQuestions } from "./Interfaces";
import { useState,createContext,useEffect } from "react";
import { MultipleChoiceQuestion } from "./MultipleChoiceQuestions";
import { TrueOrFalseQuestions } from "./BooleanQuestions";

 export const QuestionContext = createContext<IQuestionsContext>({questions:[],setQuestions:() => {}})
 
 export const QuizAppEasy = () => {
    const [questions, setQuestions] = useState<IQuestions[]>([]);
    const GetQuestions = async() =>{
  
      let result = await fetch("https://opentdb.com/api.php?amount=10&category=31&difficulty=easy");
      let json = await result.json();
      setQuestions(json.results)
    }
    useEffect(()=> {
      GetQuestions();
    },[])
    
    return(
      <div style={{paddingLeft:"30px"}}>
      <QuestionContext.Provider value={{questions,setQuestions}}>
        <h1>Easy Questions</h1>
          <MultipleChoiceQuestion/>
          <TrueOrFalseQuestions/>
      </QuestionContext.Provider>
      </div>
    )
  }
  export const QuizAppMedium = () => {
    const [questions, setQuestions] = useState<IQuestions[]>([]);
    const GetQuestions = async() =>{
  
      let result = await fetch("https://opentdb.com/api.php?amount=10&category=31&difficulty=medium");
      let json = await result.json();
      setQuestions(json.results)
    }
    useEffect(()=> {
      GetQuestions();
    },[])
    
    return(
      <div style={{paddingLeft:"30px"}}>
        <h1>Medium Questions</h1>
      <QuestionContext.Provider value={{questions,setQuestions}}>
          <MultipleChoiceQuestion/>
          <TrueOrFalseQuestions/>
      </QuestionContext.Provider>
      </div>
    )
  }
  export const QuizAppHard = () => {
    const [questions, setQuestions] = useState<IQuestions[]>([]);
    const [loading, SetLoading] = useState(true);
    const GetQuestions = async() =>{
  
      let result = await fetch("https://opentdb.com/api.php?amount=10&category=31&difficulty=hard");
      let json = await result.json();
      setQuestions(json.results)
    }
    useEffect(()=> {
        
      GetQuestions();
    },[])
    
    return(
      <div style={{paddingLeft:"30px"}}>
      <QuestionContext.Provider value={{questions,setQuestions}}>
        <h1>Hard Questions</h1>
          <MultipleChoiceQuestion/>
          <TrueOrFalseQuestions/>
      </QuestionContext.Provider>
      </div>
    )
  }