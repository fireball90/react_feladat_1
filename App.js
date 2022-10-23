// Komponensek és propok
import React from 'react';
import ReactDOM from 'react-dom';
function App() {
  return React.createElement(
    "div",
    {
      className: "border",
    },
    "App",
    React.createElement(BoxComponent, { hatterSzin: Rgb(), felirat: RandomNumber(100,1) }),
    React.createElement(BoxComponent, { hatterSzin: Rgb(), felirat: RandomNumber(100,1) }),
    React.createElement(BoxComponent, { hatterSzin: Rgb(), felirat: RandomNumber(100,1) }),
    React.createElement(BoxComponent, { hatterSzin: Rgb(), felirat: RandomNumber(100,1) }),
    React.createElement(BoxComponent, { hatterSzin: Rgb(), felirat: RandomNumber(100,1) })
  );
}

document.getElementById("add").onclick = function RandomBox(){
  //ReactDOM.render(React.createElement(BoxComponent, { hatterSzin: Rgb(), felirat: RandomNumber(100,1) }), document.getElementById("root"));
  const root = ReactDOM.createRoot(document.getElementById("root"))
  const box = React.createElement(BoxComponent, { hatterSzin: Rgb(), felirat: RandomNumber(100,1) })
  root.render(box)
  
}


function RandomNumber(max,min){
  return Math.floor(Math.random() * (max - min + 1) ) + min
}

function Rgb(){
  return "#" + ((1<<24)*Math.random() | 0).toString(16)
}

function randomSize(max,min){
  let rngSize = Math.floor(Math.random() * (max - min + 1) ) + min
  let size = rngSize.toString();
  return size+"px"
}

function BoxComponent(props) {
  return React.createElement(
    "div",
    {
      style: {
        width: randomSize(200,50),
        height: randomSize(200,50),
        backgroundColor: props.hatterSzin,
      },
      className: "p-2 m-5 rounded",
    },
    props.felirat
  );
}
ReactDOM.render(React.createElement(App),document.getElementById("root"));
export default App;