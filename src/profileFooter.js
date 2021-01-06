class ProfileFooter extends React.Component{

    render(){
        return(
            <li className="list-group-item bg-secondary mt-5">
                <div className="mt-5"></div>
                <Row className="d-flex">
                    <Col xs="auto">
                        <img src={"logo.png"} className="rounded-circle img-fluid" style={{height: '40px'}} alt="Profile Picture" />
                    </Col>
                    <Col>
                    <div>{this.props.name}</div>
                    <div className="text-white"><small>{this.props.username}</small></div>
                    </Col>
                </Row>
            </li>
        );
    }
}

export default ProfileFooter;