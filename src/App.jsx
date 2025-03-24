import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const Counter = useSelector((store) => store.counter); // Get the counter value from the store
  const dispatch = useDispatch();
  const inputElement = useRef();// Hook to dispatch actions to the store


  // Handlers for increment and decrement
  useEffect(()=>{
  
  },[])
  const handleIncrement = () => {
    dispatch({ type: "increment" }); // Replace with your action type
  };

  const handleDecrement = () => {
    dispatch({ type: "decrement" }); // Replace with your action type
  };

  const handleAdd = () => {
    dispatch({
      type: "Add",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  const handlesubtract = () => {
    dispatch({
      type: "Subtract",
      payload: {
        num: inputElement.current.value,
      },
    });
    inputElement.current.value = "";
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1>Counter Value: {Counter}</h1> {/* Counter value displayed here */}
      <div style={{ marginTop: "20px" }}>
        {" "}
        {/* Buttons below the counter */}
        <button
          type="button"
          onClick={handleIncrement}
          style={{ margin: "0 10px", padding: "10px 20px" }}
        >
          +1
        </button>
        <button
          type="button"
          onClick={handleDecrement}
          style={{ margin: "0 10px", padding: "10px 20px" }}
        >
          -1
        </button>
        <br></br>
        <br></br>
        <input type="number" ref={inputElement} />
        <button
          type="button"
          onClick={handleAdd}
          style={{ margin: "0 10px", padding: "10px 20px" }}
        >
          Add
        </button>
        <button
          type="button"
          onClick={handlesubtract}
          style={{ margin: "0 10px", padding: "10px 20px" }}
        >
          Subtract
        </button>
      </div>
    </div>
  );
}

export default App;
