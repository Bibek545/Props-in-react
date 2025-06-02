function Student(props) {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>I am {props.age} years old.</p>
            <p>Student: {props.isStudent ? 'yes' : 'no'}</p>
            <p>I am a full stack developer</p>
        </div>
    );
}

export default Student; 