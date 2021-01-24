class GenericCard extends React.Component{

    constructor(props){
        super(props)
    }

    render(){

        return(
        <Reactstrap.Col className="px-2">
            <Reactstrap.CardHeader {...this.props.headerArgs}>{this.props.cardheader}</Reactstrap.CardHeader>
            <Reactstrap.CardBody {...this.props.bodyArgs} style={{whiteSpace: "pre-wrap"}}>{this.props.cardbody}</Reactstrap.CardBody>
            <Reactstrap.CardFooter {...this.props.footerArgs}>{this.props.cardfooter}</Reactstrap.CardFooter>
        </Reactstrap.Col>);
    }
}

export default GenericCard;