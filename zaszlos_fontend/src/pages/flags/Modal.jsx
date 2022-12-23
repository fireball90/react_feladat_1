import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render(React.createElement(Modal), document.getElementById("root"));

function Modal() {
  return <div>
            <div class="d-flex align-items-center justify-content-center">
                <DeleteModal>
                    
                </DeleteModal>
            </div>
        </div>
     
}

function DeleteModal(){
    return (
    <div id="deleteModal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Törlés megerősítése</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p>Biztosan törölni szeretné a terméket?</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary">Igen</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Nem</button>
            </div>
            </div>
        </div>
    </div>
)
}

export default Modal;
