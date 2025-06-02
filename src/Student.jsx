
function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age {props.age} years old.</p>
            <p>Student: {props.isStudent ? 'yes' : 'no'}</p>
            {/* <p>I am a full stack developer</p> */}
        </div>
    );
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}
export default Student; 