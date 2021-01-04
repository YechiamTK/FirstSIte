class ProfileFooter extends React.Component{

    render(){
        return(
            <li className="list-group-item bg-secondary mt-5">
                <div className="mt-5"></div>
                <div className="row d-flex">
                    <div className="col-auto">
                        <img src={"logo.png"} className="rounded-circle img-fluid" style={{height: '40px'}} alt="Profile Picture" />
                    </div>
                    <div className="col">
                    <div>{this.props.name}</div>
                    <div className="text-white"><small>{this.props.username}</small></div>
                    </div>
                </div>
            </li>
        );
    }
}

export default ProfileFooter;