class GenericModal extends React.Component{

    constructor(props){
        super(props);
    }
    
    render(){
        return(
        <Reactstrap.Modal contentClassName="bg-dark" {...this.props.other} size="lg" className="pt-5 d-flex flex-grow-1" style={{borderRadius: '20px'}} >
            <Reactstrap.ModalHeader style={this.props.headerStyle}>{this.props.header}</Reactstrap.ModalHeader>
            <Reactstrap.ModalBody style={this.props.bodyStyle}>{this.props.body}</Reactstrap.ModalBody>
            <Reactstrap.ModalFooter style={this.props.footerStyle}>{this.props.footer}</Reactstrap.ModalFooter>
        </Reactstrap.Modal>);
    }
}

export default GenericModal;