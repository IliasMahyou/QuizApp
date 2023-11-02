import { QuizAppEasy,QuizAppHard,QuizAppMedium } from './components/QuizApp'
import { Outlet, createBrowserRouter, RouterProvider, Link } from "react-router-dom";


const Root = () => {
    return(
        <div className="root-body">
            <div className="root-header">
                <Link style={{margin:"10px"}} to="/">Easy Questions</Link>
                <Link style={{margin:"10px"}} to="/MediumQuestions">Medium Questions</Link>
                <Link style={{margin:"10px"}} to="/HardQuestions">Hard Questions</Link>
            </div>
            <div className="root-main">
                <Outlet/>
            </div>
            <footer className="root-footer">

            </footer>
        </div>
    )
}










function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Root/>,
      children: [
        {
          path: "",
          element:<QuizAppEasy/>
        },
        {
          path: "MediumQuestions",
          element:<QuizAppMedium/>
        },
        {
          path: "HardQuestions",
          element:<QuizAppHard/>
        },

      ]
    }
  ])

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
