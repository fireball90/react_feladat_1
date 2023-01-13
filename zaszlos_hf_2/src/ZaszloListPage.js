import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';

export function ZaszloListPage() {

    const[zaszlos,setZaszlos] = useState([]);
    const[isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);
        fetch("https://localhost:5001/zaszlok")
        .then((res) => res.json())
        .then((zaszlok) => setZaszlos(zaszlok))
        .catch(console.log)
        .finally(() => {
            setFetchPending(false);
        });
  }, []);
  return (
    <div className="p-5 m-auto text-center content bg-ivory">
        {isFetchPending ? (
            <div className="spinner-border"></div>
        ) : (
            <div>
                <h2>Zászlók</h2>
            {zaszlos.map((zaszlo,index) => (
                <div className="card col-sm-3 d-inline-block m-1 p-2" key={index}>
                    <p className="text-dark">Név: {zaszlo.name}</p>
                    <p className="text-dark">Ár: {zaszlo.price}</p>
                    <p className="text-dark">Db: {zaszlo.qty}</p>
                    <div className="card-body">
                        <NavLink to={"/zaszlo/" + zaszlo.id}>
                            <img alt={zaszlo.name}
                            className="img-fluid"
                            style={{ maxHeight: 200 }}
                            src={zaszlo.flagimg ? zaszlo.flagimg :
                            "https://via.placeholder.com/400x800"} />
                        </NavLink>
                        <br/>
                        <NavLink to={"/mod-zaszlo/" + zaszlo.id}><i class="bi bi-brush"></i></NavLink>
                        &nbsp;&nbsp;
                        <NavLink to={"/del-zaszlo/" + zaszlo.id}><i class="bi bi-file-earmark-excel"></i></NavLink>

                    </div>
            </div>
        ))}
    </div>
  )}
 </div>
  );
}
export default ZaszloListPage;