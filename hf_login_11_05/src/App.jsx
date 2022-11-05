import React, { useState } from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(React.createElement(App), document.getElementById("app-container"));
function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "abc",
      password: "123"
    }
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value && userData.username!==uname.value) {
        setIsSubmitted(false);
      } else {
        setIsSubmitted(true);
      }
    } 
  };


  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required style={{ backgroundColor: isSubmitted ? "lightgreen":"firebrick"}}/>
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required style={{ backgroundColor: isSubmitted ? "lightgreen":"firebrick"}}/>
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return renderForm
}

export default App;