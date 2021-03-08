const formModal = () => {
  document.querySelector('#add-pin-form').innerHTML = `  
  <div class="modal fade" id="editPinModal" tabindex="-1" aria-labelledby="exampleModalLabel">
    <div class="modal-dialog">
      <div class="modal-content" id="modal-content-container">
        <div class="modal-header">
          <h5 class="modal-title" id="pin-title">Edit Pin</h5>
        </div>
          <div class="modal-body" id="editPinModalBody">
          </div>
      <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
 </div>
`;
};

export default formModal;
