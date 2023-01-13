import React from 'react';
import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { useNavigate, NavLink  } from 'react-router-dom';

export function ZaszloModPage(props) {
    const params = useParams();
    const id = params.zaszloId;
    const[zaszlo,setZaszlo] = useState([]);
    const[isPending, setPending] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setPending(true);
        (async () => {
            try {
        const res= await fetch(`https://localhost:5001/zaszlok/${id}`)
            const zaszlo = await res.json();
            setZaszlo(zaszlo);
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
        <div className="p-5 m-auto content bg-lavender text-center">
        <h2 className='main-text'>Zászló módosítása</h2>
            {isPending || !zaszlo.id ? (
                <div className="spinner-border"></div>
            ) : (
            <form
            onSubmit={(event) => {
            event.persist();
            event.preventDefault();
            fetch(`https://localhost:5001/zaszlok/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json-patch+json',
                },
                body: JSON.stringify({
                    id:zaszlo.id,
                    name: event.target.elements.name.value,
                    price: event.target.elements.price.value,
                    qty: event.target.elements.qty.value,
                    flagimg: event.target.elements.flagimg.value,
                }),
            })
            .then(()=>{
                navigate("/");
            })
            .catch(console.log);
            }}>
            <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Név:</label>
          <div className="col-sm-9">
            <input type="text" name="name" className="form-control" placeholder={zaszlo.name} />
          </div>
        </div>
        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Ár:</label>
          <div className="col-sm-9">
            <input type="number" name="price" className="form-control" placeholder={zaszlo.price} />
          </div>
        </div>
        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Darabszám:</label>
          <div className="col-sm-9">
            <input type="number" name="qty" className="form-control" placeholder={zaszlo.qty} />
          </div>
        </div>
        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Kép URL:</label>
          <div className="col-sm-9">
            <input type="text" name="flagimg" className="form-control" placeholder={zaszlo.flagimg} />
          </div>
        </div>
        <button type="submit" className="bi bi-brush">
          Módosítás
        </button>
        &nbsp;&nbsp;
        <NavLink to={"/"}><button className="bi bi-backspace">&nbsp;Mégsem</button></NavLink>
      </form>        
            )}

        </div>
        );
}

export default ZaszloModPage;