class GenericModal extends React.Component{

    constructor(props){
        super(props);
    }
    
    render(props){
        return(
        <Modal isOpen={modal} toggle={toggle} size="lg" className="bg-dark d-flex flex-grow-1" style={{borderRadius: '20px'}} id={props.id}>
            <ModalHeader>{props.header}</ModalHeader>
            <ModalBody>{props.body}</ModalBody>
            <ModalFooter>{props.footer}</ModalFooter>
        </Modal>);
    }
}

/*
<div id="post-comment" class="modal fade">
    <div class="modal-dialog modal-lg col-5 d-flex">
        <div class="modal-content bg-dark flex-grow-1" style="border-radius: 20px;">
            <div className="modal-header">
                {props.header}
            </div>
            <div className="modal-body">
                {props.body}
            </div>
            <div className="modal-footer">
                {props.footer}
            </div>        
        </div>
    </div>
</div>
*/

export default GenericModal;