import React from 'react';
import { useNavigate } from "react-router-dom";

export function ZaszloAddPage() {
  const navigate = useNavigate();

  return (
    <div className="p-5 content bg-whitesmoke text-center">
      <h2>Új zászló</h2>
      <form 
        onSubmit={(e) => {
          e.persist();
          e.preventDefault();
          fetch("https://localhost:5001/zaszlo", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
              name: e.target.elements.name.value,
              price: e.target.elements.price.value,
              qty: e.target.elements.qty.value,
              flagimg: e.target.elements.flagimg.value,
            }),
          })
            .then(() => {
              navigate("/");
            })
            .catch(console.log);
        }}
      >
        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Név:</label>
          <div className="col-sm-9">
            <input type="text" name="name" className="form-control" />
          </div>
        </div>
        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Ár:</label>
          <div className="col-sm-9">
            <input type="number" name="price" className="form-control" />
          </div>
        </div>
        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Darabszám:</label>
          <div className="col-sm-9">
            <input type="number" name="qty" className="form-control" />
          </div>
        </div>
        <div className="form-group row pb-3">
          <label className="col-sm-3 col-form-label">Kép URL:</label>
          <div className="col-sm-9">
            <input type="text" name="flagimg" className="form-control" />
          </div>
        </div>
        <button type="submit" className="btn btn-success">
          Küldés
        </button>
      </form>
    </div>
  );
}

export default ZaszloAddPage;