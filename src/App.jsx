const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}, you are {props.age}!</p>

        </div>
    )
}
const App = () => {
    const friends = ['Peter', 'Mary']
    return (
        <div>
            <p>{friends}</p>
        </div>
    )
}

export default App;