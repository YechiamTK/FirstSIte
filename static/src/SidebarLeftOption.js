class SideBarLeftOption extends React.Component{

    render(){
        return(
            <Reactstrap.ListGroupItem className="bg-secondary border-0">
                <Reactstrap.Button href="#" color="secondary text-white-50" size="lg" block>{this.props.option}</Reactstrap.Button>
            </Reactstrap.ListGroupItem>
        );
    }
}

export default SideBarLeftOption;