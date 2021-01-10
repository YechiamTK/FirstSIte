class GenericCard extends React.Component{

    constructor(props){
        super(props)
    }

    render(props){

        return(
        <Col className="px-2">
            <CardHeader {...headerArgs}>{this.cardheader}</CardHeader>
            <CardBody {...bodyArgs} style={{whiteSpace: "pre-wrap"}}>{this.cardbody}</CardBody>
            <CardFooter {...footerArgs}>{this.cardfooter}</CardFooter>
        </Col>);
    }
}

export default GenericCard;