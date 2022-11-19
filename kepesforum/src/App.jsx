import React from 'react';
import ReactDOM from 'react-dom';
export default function App() {
  const[items, setItems] = React.useState([]);
  const[tipus, setTipus] = React.useState("Comments");

  React.useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/" + tipus)
    .then((res) => (res.ok ? res.json(): []))
    .then((tartalom) => {
      setItems(tartalom)
    });
  }, [tipus]);  
  return (
    <div className="container">
      <div className="row m-5 kulso p-5">
        <FormKomponens setTipus={setTipus} />
        <ListaKomponens elemek={items} />
        </div>
    </div>
  );
}

const FormKomponens = ({ setTipus }) => (
    <form
    className="w-100"
    onSubmit={(event) => {
      event.preventDefault();
      setTipus(event.target.elements.contentType.value);
    }}
    >
      <select
      name="contentType"
      className="form-control mb-2 select">
        <option value="comments">Kommentek</option>
        <option value="posts">Posztok</option>
      </select>
      <button
      className="btn btn-warning mb-2"
      type="submit">
        Kiválaszt
      </button>
    </form>
  );
    //{elem.id===1 ? <img src={require('./images/1.jpg')} width="100" alt="pic"/> : elem.id===2 ? <img src={require('./images/2.jpg')} width="100" alt="pic"/> : elem.id===3 ? <img src={require('./images/3.jpg')} width="100" alt="pic"/> : elem.id===4 ? <img src={require('./images/4.jpg')} width="100" alt="pic"/> : elem.id===5 ? <img src={require('./images/5.jpg')} width="100" alt="pic"/> : <img src={require('./images/no_image.jpg')} width="100" alt="no pic"/>}
const ListaKomponens = ({elemek}) => (
  
    <ul>
      {elemek.map((elem) => (
      <div class="bejegyzes">
        <li>{imageRender(elem.id)}
        <hr></hr>
        <li>{elem.title}</li>
        <hr></hr>
        <li>{elem.body}</li>
        <hr></hr>
        <li>{elem.email}</li>
        </li>
      </div>
      ))}
    </ul>
  
);
function imageRender(id){
  if (id >= 1 && id <=5){
    return <img src={require(`./${id}.jpg`)} alt="pic" width="100"/>
  }
  else{
    return <img src={require('./no_image.jpg')} alt="nopic" width="100"/>
  }
} 


ReactDOM.render(<App />, document.getElementById("root"));
