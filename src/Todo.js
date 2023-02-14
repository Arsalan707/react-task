import React, { useState } from 'react';

//import Tester from './Tester';
//import SelectButton from './SelectButton';
//import Hook from './Hook';
//import Count from './Count';

const Todo = () => {
  const [state, setState] = useState({});
  const [task, setTask] = useState([]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      id: Date.now(),
      [name]: value,
    });
  };

  // const [email, setEmail] = useState('');
  // const handleChange = (event) => {
  //   const updatedEmail = event.target.value;
  //   setEmail(updatedEmail);
  // };

  const handleSubmit = () => {
    if (!state.title) return;
    setTask((task) => [state, ...task]);
    setState({});
  };

  const handleDisplay = () => {
    const allResult = task.map((value) => {
      return value;
    });
    console.log(allResult);
  };

  const handleDelete = (id) => {
    setTask((prev) => prev.filter((item) => item.id !== id));
  };

  console.log({ task });

  return (
    <>
      <div>
        {/* <Tester /> */}
        {/* <SelectButton /> */}
        {/* <Hook /> */}
        {/* <Count /> */}

        <div className="field">
          <input
            name="title"
            placeholder="title"
            value={state.title}
            onChange={(e) => handleChange(e)}
          />
          {!state.title ? null : (
            <>
              <input
                name="discription"
                placeholder="discription"
                value={state.discription}
                onChange={(e) => handleChange(e)}
              />
            </>
          )}
          <button onClick={() => handleSubmit()}> Submit </button>
          <h2> Result </h2>
          <button onClick={(e) => handleDisplay(e)}>DISPLAY</button>

          <div>
            {task.map(({ title, discription, id }) => (
              <div key={id}>
                <h3>{title}</h3>
                <p>{discription}</p>
                <h1>{id}</h1>
                <button onClick={() => handleDelete(id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
