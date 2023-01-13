import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';

export function ZaszloDelPage(props) {
    const params = useParams();
    const id = params.zaszloId;
    const navigate = useNavigate();
    const[zaszlo,setZaszlo] = useState([]);
    const[isPending, setPending] = useState(false);
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
    <div className="p-5 m-auto text-center content bg-lavender">
        {isPending || !zaszlo.id ? (
            <div className="spinner-border"></div>
        ) : (
                        <div className="card p-3">
                            <div className="card-body">
                            <h5 className="card-title">Törlendő elem: {zaszlo.name}</h5>
                            <div className="lead">Ár: {zaszlo.price }</div>
                            <div className="lead">Db: {zaszlo.qty}</div>
                                <img alt={zaszlo.name}
                                className="img-fluid rounded"
                                style={{maxHeight: "500px"}}
                                src={zaszlo.flagimg ? zaszlo.flagimg : 
                                "https://via.placeholder.com/400x800"} 
                                />
                              </div>
                              <form onSubmit={(event) => {
                //ez a két sor azért kell, mert szükséges megállítani a form-ot,
                // hogy ne küldje újra az adatokat a böngészőnek, mert az nem jó,
                //hanem itt nekünk az kívánatos, hogy elküldje az adatokat a backend-nek
            event.persist();
            event.preventDefault();
            fetch(`https://localhost:5001/zaszlok/${id}`, {
                method: "DELETE",
                //bekerült ez az "újítás", ami miatt nem ment:
                
            })
            // ha kész, visszadob a főoldalra! Return-öl a backend-ről minden infót!
            .then(() =>
            {
                navigate("/");
            })
            .catch(console.log);
            }}>
                              <div>
                    <NavLink to={"/"}><button className="bi bi-backspace">&nbsp;Mégsem</button></NavLink>
                    &nbsp;&nbsp;
                    <button className="bi bi-trash3">&nbsp;Törlés</button></div></form>   
                        </div>
                    
                )}
            </div>
        );
}
    export default ZaszloDelPage;