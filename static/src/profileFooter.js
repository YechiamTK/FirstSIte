class ProfileFooter extends React.Component{

    render(){
        return(
            <li className="list-group-item bg-secondary mt-5">
                <div className="mt-5"></div>
                <Reactstrap.Row className="d-flex">
                    <Reactstrap.Col xs="auto">
                        <img src={"/static/images/logo.png"} className="rounded-circle img-fluid" style={{height: '40px'}} alt="Profile Picture" />
                    </Reactstrap.Col>
                    <Reactstrap.Col>
                    <div>{this.props.name}</div>
                    <div className="text-white"><small>{this.props.username}</small></div>
                    </Reactstrap.Col>
                </Reactstrap.Row>
            </li>
        );
    }
}

export default ProfileFooter;