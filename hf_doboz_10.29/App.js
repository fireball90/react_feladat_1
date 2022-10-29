// Komponensek és propok
import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';
ReactDOM.render(React.createElement(App), document.getElementById("root"));
function App() {
  const [count, setCount] = useState(1);
return React.createElement(
  "div",
  {
    style: {
      width: "100%",
      height: "",
      textAlign: "center",
      fontSize: "30px",
    },
    className: "border 3px",
  },
  "App",
  React.createElement(BoxComponent, { count: count }),
  React.createElement(ButtonComponent, { count: count, setCount: setCount}),
    "App szintű state: " + (count===1 ? "Zöld" : count===2 ? "Piros" : count===3 ? "Kék" : count===4 ? "Sárga" : count===5 ? "random szín" : "nincs szín")
);  
}
function ButtonComponent({count, setCount}) {
  return React.createElement('div',{
      style: {
        width: "80vh",
        height: "",
      },
      className: "p-2 m-5 border rounded"
  },
  React.createElement(
    "button",
    {
      style: {
        width: "150px",
        height: "50px",
      },
      className: "btn btn-success m-2",
      disabled: count===1,
      onClick: () => {
        setCount(count=1);
      }
    },
    "Zöld"
  ),
  React.createElement(
    "button",
    {
      style: {
        width: "150px",
        height: "50px",
      },
      className: "btn btn-danger m-2",
      disabled: count===2,
      onClick: () => {
        setCount(count=2);
        }
    },
    "Piros"
  ),
  React.createElement(
    "button",
    {
      style: {
        width: "150px",
        height: "50px",
      },
      className: "btn btn-primary m-2",
      disabled: count===3,
      onClick: () => {
        setCount(count=3);
        }
    },
    "Kék"
  )
  ,
  React.createElement(
    "button",
    {
      style: {
        width: "150px",
        height: "50px",
      },
      className: "btn btn-warning m-2",
      disabled: count===4,
      onClick: () => {
        setCount(count=4, BoxComponent.backgroundColor="yellow");
        }
    },
    "Sárga"
  )
  ,
  React.createElement(
    "button",
    {
      style: {
        width: "150px",
        height: "50px",
      },
      className: "btn btn-warning m-2",
      disabled: count===5,
      onClick: () => {
        setCount(count=5);
        }
    },
    "Random szín"
  )
  );
}
function rgbBg(){
  return "#" + ((1<<24)*Math.random() | 0).toString(16)
}

function BoxComponent(props) {
  return React.createElement(
    "div",
    {
      style: {
        width: "80vh",
        height: "200px",
        backgroundColor: props.count===1 ? "green" : props.count===2 ? "firebrick" : props.count===3 ? "blue" : props.count===4 ?  "yellow" : props.count===5 ? rgbBg() : "Gray",
      },
      className: "p-2 m-5 rounded",
    },
    props.count===1 ? "Zöld" : props.count===2 ? "Piros" : props.count===3 ? "Kék" : props.count===4 ?  "Sárga" : props.count===5 ? "Random szín" : "Gray"
  );
}
  
export default App;