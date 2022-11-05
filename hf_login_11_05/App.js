import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(React.createElement(App), document.getElementById("app-container"));
function App() {
    var checker = React.useState(true);
    return React.createElement(
        'div',
        { className: 'border' },
        React.createElement(FormComponent, { checker: checker })
    );
}

function FormComponent(props) {

    return React.createElement(
        'div',
        null,
        React.createElement(
            'form',
            { name: 'login-form', onSubmit: function onSubmit() {
                    checkInput(props);
                } },
            React.createElement(
                'label',
                null,
                'Login:'
            ),
            React.createElement('input', { id: 'Login', type: 'text', placeholder: 'Name', name: 'username', required: true, style: { width: "200px", height: "30px", backgroundColor: !props.checker ? "lightgreen" : "firebrick" } }),
            React.createElement('br', null),
            React.createElement(
                'label',
                null,
                'P w d:'
            ),
            React.createElement('input', { id: 'Password', type: 'password', placeholder: 'Password', name: 'password', required: true, style: { width: "200px", height: "30px", backgroundColor: !props.checker ? "lightgreen" : "firebrick" } }),
            React.createElement('br', null),
            React.createElement(
                'button',
                { type: 'submit' },
                'Login'
            )
        )
    );
}

function checkInput(props) {

    var username = document.getElementById('Login').value;
    var password = document.getElementById('Password').value;
    if (username === "abc" && password === "123") {
        return props.checker = false;
    } else {
        return props.checker = false;
    }
}

/*     <BoxComponent isActive={isActive}></BoxComponent>
    <ButtonComponent isActive={isActive} setActive={setActive}></ButtonComponent>

function ButtonComponent({ isActive, setActive }) {
  return <div style={{width: "200px", height: "200px"}} 
  className="p-2 m-5 border rounded">
    <button className="btn btn-success m-2" disabled={isActive} onClick={()=>{
        setActive(true);
    }}>
        Aktiválás
        </button>
        <button className="btn btn-success m-2" disabled={!isActive} onClick={()=>{
        setActive(false);
    }}>
        Deaktiválás
        </button>
  </div>
}
function BoxComponent(props) {
    return (
        <div className="p-2 m-5 rounded" style={{ width: "200px", height: "200px", backgroundColor: props.isActive ? "green":"firebrick"}}>
            {props.isActive ? "Aktív" : "Inaktív"}
        </div>
    );
} */
export default App;