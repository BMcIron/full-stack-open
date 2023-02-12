const Header = (props) => {
  return(
  <div>
    <h1>{props.course}</h1>
  </div>
  )
}

const Part = (props) => {
  return(
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part = {props.parts[0].part} exercises = {props.parts[0].exercises}/>
      <Part part = {props.parts[1].part} exercises = {props.parts[1].exercises}/>
      <Part part = {props.parts[2].part} exercises = {props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  console.log (props.exercises3)
  return(
  <div>
    <p>Number of exercises {props.exercises1  + props.exercises2 + props.exercises3}</p>
  </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14}
  ]

  return(
    <div>
      <Header course = {course}/>
      <Content parts = {parts} />
      <Total exercises1 = {parts[0].exercises} exercises2 = {parts[1].exercises} exercises3 = {parts[2].exercises}/>
    </div>
  )
}

export default App;
