import './App.css'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx';

function App() {


  return (
    <>
     <Student name="Bibek Hamal" age={26} isStudent = {true}/>
     <Student name="Nini Thing" age={25} isStudent = {false}/>
     <Student name="Bishnu Thapa" age={25} isStudent = {false}/>
     <br/>
     <br/>

     <UserGreeting isLoggedIn = {false} username ="bikki"/>
    </>
  )
}

export default App;
