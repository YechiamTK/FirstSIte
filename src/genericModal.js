class GenericModal extends React.Component{

    constructor(props){
        super(props);
    }
    
    render(){
        return(
        <Reactstrap.Modal contentClassName="bg-dark" {...this.props.other} size="lg" className="pt-5 d-flex flex-grow-1" style={{borderRadius: '20px'}} >
            <Reactstrap.ModalHeader {...this.props.headerArgs}>{this.props.header}</Reactstrap.ModalHeader>
            <Reactstrap.ModalBody {...this.props.bodyArgs}>{this.props.body}</Reactstrap.ModalBody>
            <Reactstrap.ModalFooter {...this.props.footerArgs}>{this.props.footer}</Reactstrap.ModalFooter>
        </Reactstrap.Modal>);
    }
}

export default GenericModal;