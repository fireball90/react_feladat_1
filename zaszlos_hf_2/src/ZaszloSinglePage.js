import React, {useState, useEffect} from 'react';
import {useParams ,NavLink} from 'react-router-dom';

export function ZaszloSinglePage(props) {
    const params = useParams();
    const id = params.zaszloId;
    const[zaszlo,setZaszlo] = useState([]);
    const[isPending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        (async () => {
            try {
        const res = await fetch(`https://localhost:5001/zaszlok/${id}`)
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
    <div className="p-5 m-auto text-center content bg-lavender">
        {isPending || !zaszlo.id ? (
            <div className="spinner-border"></div>
        ) : (
            <div>
                <h2>Zászlók</h2>
                <div className="card p-3">
                <div className="card-body">
                    <p className="text-dark">Név: {zaszlo.name}</p>
                    <p className="text-dark">Ár: {zaszlo.price}</p>
                    <p className="text-dark">Db: {zaszlo.qty}</p>
                            <img alt={zaszlo.name}
                            className="img-fluid"
                            style={{ maxHeight: 200 }}
                            src={zaszlo.flagimg ? zaszlo.flagimg :
                            "https://via.placeholder.com/400x800"} />
                    </div>
                    <NavLink to={"/"}><i class="bi bi-backspace"></i></NavLink>
                    
                        <NavLink to={"/mod-zaszlo/" + zaszlo.id}><i class="bi bi-brush"></i></NavLink>

            </div>
            </div>
        )}   
    </div>
  );
}
export default ZaszloSinglePage;