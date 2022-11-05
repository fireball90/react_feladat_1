var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(React.createElement(App), document.getElementById("app-container"));
function App() {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isSubmitted = _useState2[0],
      setIsSubmitted = _useState2[1];

  var database = [{
    username: "abc",
    password: "123"
  }];

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();

    var _document$forms$ = document.forms[0],
        uname = _document$forms$.uname,
        pass = _document$forms$.pass;


    var userData = database.find(function (user) {
      return user.username === uname.value;
    });

    if (userData) {
      if (userData.password !== pass.value && userData.username !== uname.value) {
        setIsSubmitted(false);
      } else {
        setIsSubmitted(true);
      }
    }
  };

  var renderForm = React.createElement(
    'div',
    { className: 'form' },
    React.createElement(
      'form',
      { onSubmit: handleSubmit },
      React.createElement(
        'div',
        { className: 'input-container' },
        React.createElement(
          'label',
          null,
          'Username '
        ),
        React.createElement('input', { type: 'text', name: 'uname', required: true, style: { backgroundColor: isSubmitted ? "lightgreen" : "firebrick" } })
      ),
      React.createElement(
        'div',
        { className: 'input-container' },
        React.createElement(
          'label',
          null,
          'Password '
        ),
        React.createElement('input', { type: 'password', name: 'pass', required: true, style: { backgroundColor: isSubmitted ? "lightgreen" : "firebrick" } })
      ),
      React.createElement(
        'div',
        { className: 'button-container' },
        React.createElement('input', { type: 'submit' })
      )
    )
  );

  return renderForm;
}

export default App;