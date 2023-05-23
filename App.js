import './App.css';
import Jokes from "./components/jokessetup"
// import IntroHead from './components/introhead';
import JokesData from "./components/jokedata"




export default function App() {
  const jokeElements = JokesData.map(Joke => {
      return <Jokes 
      setup= {Joke.setup} 
      punchline= {Joke.punchline}
       />
  })
  return (  
      <div>
          {jokeElements}
      </div>
  )
}
