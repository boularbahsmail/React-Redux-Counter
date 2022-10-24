import React from 'react';
import { IoIosAddCircle, IoIosRemoveCircleOutline } from 'react-icons/io';
import { RiNumber1, RiNumber0 } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({type: 'INCREMENT'});
  }

  const decrement = () => {
    dispatch({type: 'DECREMENT'});
  }

  const addBy = () => {
    dispatch({type: "ADDBY10", payload: 10});
  }

  const reduceBy = () => {
    dispatch({type: "REDUCEBY10", payload: 10});
  }

  return (
    <div className="App">
      <h2>React Redux Counter</h2>
      <h1>{counter}</h1>

      <div className="actions_buttons">
        <button onClick={reduceBy}>
          -<RiNumber1 /><RiNumber0 />
        </button>
        <button onClick={increment}>
          <IoIosAddCircle />
        </button>
        <button onClick={decrement}>
          <IoIosRemoveCircleOutline />
        </button>
        <button onClick={addBy}>
          +<RiNumber1 /><RiNumber0 />
        </button>
      </div>

      <h5>
        &copy; 2022 - React Redux Counter | {" "}
        <a href="https://twitter.com/boularbahsmail" target="_blank" title="Twitter">
          Ismailium
        </a>
      </h5>
    </div>
  );
}

export default App;
