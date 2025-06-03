import './App.css'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx';

function App() {


  return (
    <>
     <Student name="Bibek Hamal" age={26} isStudent = {true}/>
     <Student name="Nini Thing" age={25} isStudent = {false}/>
     <Student name="Bishnu Thapa" age={25} isStudent = {false}/>
     <UserGreeting isLoggedIn = {true} username ="bikki"/>
    </>
  )
}

export default App;
