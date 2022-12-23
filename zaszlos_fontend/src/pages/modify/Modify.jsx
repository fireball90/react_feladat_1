import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';


ReactDOM.render(React.createElement(Modify), document.getElementById("root"));
function Modify() {
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
            <ModifyFlag>

            </ModifyFlag>
        </div>
    );
}


function ModifyFlag() {
    const params = useParams();
    const id = params.flagId;
    const[flag,setFlag] = useState([]);
    const[isPending, setPending] = useState(false);
    useEffect(() => {
        setPending(true);
        (async () => {
            try {

        const res= await fetch(`https://localhost:5001/Product/${id}`)
            const flag = await res.json();
            setFlag(flag);
        }
        catch(error) {
            console.log(error);
        }
        finally {
            setPending(false);
        }
    })
    ();
 }, [id]);

    return (
        <div className="p-5 content bg-whitesmoke text-center">
        <h2 className='main-text'>Zászló módosítása</h2>
            {isPending || !flag.Id ? (
                <div className="spinner-border"></div>
            ) : (
            <form
            onSubmit={(event) => {
            event.persist();
            event.preventDefault();
            fetch(`https://localhost:5001/Product/`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json-patch+json',
                },
                body: JSON.stringify({
                    id: event.target.elements.id.value,
                    name: event.target.elements.name.value,
                    price: event.target.elements.price.value,
                    qty: event.target.elements.qty.value,
                    flagimg: event.target.elements.flagimg.value,
                }),
            })
            .catch(console.log);
            }}>
            <div className="form-group row pb-3 spacing2">
                <label className="col-sm-2 add-text">Zászló id:</label>
                <div className="col-sm-3">
                <input type="number" name="id" className="inputfield2" value={flag.Id}/>
                </div>
            </div>
            <div className="form-group row pb-3 spacing2">
                <label className="col-sm-2 add-text">Zászló név:</label>
                <div className="col-sm-3">
                <input type="text" name="name" className="inputfield2" defaultValue={flag.Name}/>
                </div>
            </div>
            <div className="form-group row pb-3 spacing2">
                <label className="col-sm-2 add-text">Ár:</label>
                <div className="col-sm-3">
                <input type="number" name="price" className="inputfield2" defaultValue={flag.Price}/>
                </div>
            </div>
            <div className="form-group row pb-3 spacing2">
                <label className="col-sm-2 add-text">Darabszám:</label>
                <div className="col-sm-3">
                <input type="number" name="qty" className="inputfield2" defaultValue={flag.Qty}/>
                </div>
            </div>
            <div className="form-group row pb-3 spacing2">
                <label className="col-sm-2 add-text">Kép url-je:</label>
                <div className="col-sm-3">
                <input type="text" name="flagimg" className="inputfield2" defaultValue={flag.Flagimg}/>
                </div>
            </div>
            <button type="submit" onClick={() =>  window.location.href='/flags'} className="btn2">
                Küldés
            </button>
            <br></br>
            <button  className="btn2" onClick={() =>  window.location.href='/flags'}>
                Vissza
            </button>
            </form>
            )}
       
        </div>
        );
}

export default Modify;