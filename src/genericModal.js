class GenericModal extends React.Component{

    constructor(props){
        super(props);
    }
    
    render(){
        return(
        <Reactstrap.Modal contentClassName="bg-dark" {...this.props.other} /* isOpen={modal} toggle={toggle} */ size="lg" className="pt-5 d-flex flex-grow-1" style={{borderRadius: '20px'}} /* id={props.id} */>
            <Reactstrap.ModalHeader>{this.props.header}</Reactstrap.ModalHeader>
            <Reactstrap.ModalBody>{this.props.body}</Reactstrap.ModalBody>
            <Reactstrap.ModalFooter>{this.props.footer}</Reactstrap.ModalFooter>
        </Reactstrap.Modal>);
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