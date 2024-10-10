const Header = (props) => {
    return (
        <div>
            <h1>Coure Name: {props.course}</h1>
        </div>
    )
}
const Part = (props) => {
    return (
        <div>
            <p>{props.name} — {props.excercise}</p>
        </div>
    )

}
const Content = (props) => {
    return (
        <div>
            <h2>Course Content/Exercise:</h2>
            <ul>
                <Part name={props.part1} excercise={props.exercises1}/>
                <Part name={props.part2} excercise={props.exercises2}/>
                <Part name={props.part3} excercise={props.exercises3}/>
            </ul>

        </div>
    )
}

const Total = (props) => {
    const total = props.exercises1 + props.exercises2 + props.exercises3
    return (
        < div >
            < h2 > Exercise
                :</h2>
            <p>Total exercises: {total}</p>
        </div>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14


    return (
        <div>
            <Header course={course} />
            <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3} />
            <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
        </div>
    )
}

export default App