function Button(props) {
	// const handleClick = () => setCounter(counter + 1);
	return (
    <button onClick={props.onClickFunction}>
      +1
    </button>
  );
}

function Display(props) {
  return (
  <div>{props.message}</div>  
  )
}

function App() {
  const [counter, setCounter] = useState(42);
  const incrementCounter = () => setCounter(counter + 1); 
  return (
  <div>
    <Button onClickFunction={incrementCounter}/>
    <Display message={counter}/>  
  </div>
  )
}

ReactDOM.render(
  <App />,  
  document.getElementById('mountNode'),
);

// Ejercicio 2


function Button(props) {
	const handleClick = () => props.onClickFunction(props.increment);
	return (
    <button onClick={handleClick}>
      +{props.increment}
    </button>
  );
}

function Display(props) {
  return (
  <div>{props.message}</div>  
  )
}

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => setCounter(counter + incrementValue); 
  return (
  <div>
    <Button onClickFunction={incrementCounter} increment={1} />
    <Button onClickFunction={incrementCounter} increment={5} />
    <Button onClickFunction={incrementCounter} increment={10} />
    <Button onClickFunction={incrementCounter} increment={100} />
    <Display message={counter}/>  
  </div>
  )
}

ReactDOM.render(
  <App />,  
  document.getElementById('mountNode'),
);
