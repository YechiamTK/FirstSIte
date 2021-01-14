class SideBarLeftOption extends React.Component{

    render(){
        return(
            <Reactstrap.ListGroupItem className="bg-secondary border-0">
                <Reactstrap.Button href="#" color="secondary text-white-50" size="lg" block>{this.props.option}</Reactstrap.Button>
            </Reactstrap.ListGroupItem>
        );
    }
}
//<a href="#" className="btn btn-secondary btn-lg btn-block text-white-50" role="button" name="explore">{this.props.option}</a>


export default SideBarLeftOption;