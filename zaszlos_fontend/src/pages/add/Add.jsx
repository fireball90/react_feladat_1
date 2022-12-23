import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(React.createElement(Add), document.getElementById("root"));
function Add() {
  return <div>
            <div class="d-flex align-items-center justify-content-center">
                <BackgroundComponent>
                    
                </BackgroundComponent>
            </div>
        </div>
     
}

function BackgroundComponent(){
    return (
        <div class="content-bg">
            <AddFlag>
            </AddFlag>
        </div>
    );
}

function AddFlag(){
    return (
        
        <div className="p-5 content bg-whitesmoke text-center">
            <h2 className='main-text'>Új zászló</h2>
            <form
            onSubmit={(event) => {
            event.persist();
            event.preventDefault();
            fetch(`https://localhost:5001/Product/`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json-patch+json',
                },
                body: JSON.stringify({
                    name: event.target.elements.name.value,
                    price: event.target.elements.price.value,
                    qty: event.target.elements.qty.value,
                    flagimg: event.target.elements.flagimg.value,
                }),
            })
            .catch(console.log);
            }}>
            <div className="form-group row pb-3 spacing2">
                <label className="col-sm-2 add-text">Zászló név:</label>
                <div className="col-sm-3">
                <input type="text" name="name" className="inputfield2" />
                </div>
            </div>
            <div className="form-group row pb-3 spacing2">
                <label className="col-sm-2 add-text">Ár:</label>
                <div className="col-sm-3">
                <input type="number" name="price" className="inputfield2" />
                </div>
            </div>
            <div className="form-group row pb-3 spacing2">
                <label className="col-sm-2 add-text">Darabszám:</label>
                <div className="col-sm-3">
                <input type="number" name="qty" className="inputfield2" />
                </div>
            </div>
            <div className="form-group row pb-3 spacing2">
                <label className="col-sm-2 add-text">Kép url-je:</label>
                <div className="col-sm-3">
                <input type="text" name="flagimg" className="inputfield2" />
                </div>
            </div>
            <button type="submit" className="btn2">
                Küldés
            </button>
            </form>
        </div>
    );
}

export default Add;