import React from 'react';
import {useState, useEffect} from 'react';


function Flags() {
  return <div className="content-bg">
            <div className='py-4'>
            <div class="container">
            <div class="row">   
            <FlagComponent>
            </FlagComponent>
            </div> 
            </div> 
            </div>  
        </div>    
}

export function FlagComponent() {

    const[flags,setFlags] = useState([]);
    const[isFetchPending, setFetchPending] = useState(false);


    useEffect(() => {
        setFetchPending(true);
        fetch("https://localhost:5001/Product/")
            .then((res) => res.json())
            .then((flags) => setFlags(flags))
            .catch(console.log)
            .finally(() => {
                setFetchPending(false);
            });
    }, []);
    return (

        <div>       
            <h2 className='main-text'>Zászlók</h2>
            {isFetchPending ? (
                <div className="spinner-border"></div>
            ) : (
                <div className='spacing'>
                    
                    {flags.map((flags)=>(
                        <p key={flags.Id}>
                            {     
                            <div class="col-md-4">        
                            <div class="card2" style={{width: 300, height: 400}}>
                                <img class="card-img-top" alt={flags.Name} style={{minHeight: 200}} src={flags.Flagimg ? flags.Flagimg :  "https://via.placeholder.com/400x800"}/>
                                <div class="card-body">
                                    <h5 class="card-title">{flags.Name}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Ár: {flags.Price} Ft</h6>
                                    <p class="card-text">Elérhető: {flags.Qty} Db</p>
                                    <button onClick={() =>  window.location.href=`/modify/${flags.Id}`} class="btn2 mr-2">Módosítás</button>
                                    <br></br>
                                    <button onClick={() => DeleteFlag(flags.Id)} class="btn2">Törlés</button>
                                </div>
                            </div> 
                            </div>                                               
                            }
                        </p>
                    ))}
                </div>
            )}

        </div>
        
    );
}
//onClick={() => {setClicked(!clicked)}}
// onClick={event =>  window.location.href=`/modify/${flags.Id}`}
function DeleteFlag(id){
    fetch(`https://localhost:5001/Product/${id}`, {
        method: "DELETE"
    })
    .then(window.location.reload(false))
    .catch(console.log);
}




export default Flags;
