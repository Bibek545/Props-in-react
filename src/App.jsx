import './App.css'
import Student from './Student.jsx'

function App() {


  return (
    <>
     <Student name="Bibek Hamal" age={26} isStudent = {true}/>
     <Student name="Nini Thing" age={25} isStudent = {false}/>
     <Student name="Bishnu Thapa" age={25} isStudent = {false}/>
     <Student name = "Srijana"/>
    </>
  )
}

export default App;
