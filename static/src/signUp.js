import { signUpAttempt } from './flaskSlice.js';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            id: -1,     //later: fetch from cookies
            user: '',
            flname: '',
            password: ''};
    }

    handleInputChange=(event)=>{
        const target = event.target; //necessary? 
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    signup=(e)=>{           //SHOULD TRANSFER TO FETCH axios
        let _id;
        const {user, flname, password} = this.state;
        let info = {}

        info['user'] = user;
        info['flname'] = flname;
        info['password'] = password;

        fetch('/signup', {
            method: 'POST',
            body: JSON.stringify(info)
        })
        .then(function(){this.moveToSignIn()}.bind(this));
        /* .then(function(data){
            console.log(data);
            _id=data['id'];
            this.setState({id: this._id});
            signInAttempt(_id);     //idk why but type and payload are already there ?
            //ALSO: perhaps I don't need to use Redux for the id
            console.log(_id);
            console.log(this.state._id);
        }.bind(this)); */

        e.preventDefault();
    }

    moveToSignIn=()=>{
        const {signUpAttempt} = this.props;
        signUpAttempt();
    }

    render(){
        return(
            <Reactstrap.Row className="d-flex flex-grow-1">
                <Reactstrap.Col className="col align-self-center">
                        <Reactstrap.Card className="bg-secondary w-50 offset-3">
                            <Reactstrap.Row className="no-gutters text-white-50 w-50 offset-3">
                                <Reactstrap.Form id="signup" onSubmit={this.signup} className="w-75 offset-1">
                                <Reactstrap.FormGroup>
                                        <Reactstrap.Label for="flName">Enter Full Name</Reactstrap.Label>
                                        <Reactstrap.Input type="text" name="flname" id="flName" placeholder="insert name here..." value={this.state.flname} onChange={this.handleInputChange}/>
                                    </Reactstrap.FormGroup>
                                    <Reactstrap.FormGroup>
                                        <Reactstrap.Label for="userName">Enter Username</Reactstrap.Label>
                                        <Reactstrap.Input type="text" name="user" id="userName" placeholder="insert username here..." value={this.state.user} onChange={this.handleInputChange}/>
                                    </Reactstrap.FormGroup>
                                    <Reactstrap.FormGroup>
                                        <Reactstrap.Label for="password">Enter Password</Reactstrap.Label>
                                        <Reactstrap.Input type="password" name="password" id="password" value={this.state.password} onChange={this.handleInputChange}/>
                                    </Reactstrap.FormGroup>
                                </Reactstrap.Form>
                            </Reactstrap.Row>
                            <Reactstrap.Row className="justify-content-center w-50 offset-3">
                                <Reactstrap.Button className="bg-primary" type="submit" form="signup">
                                    Register</Reactstrap.Button>
                            </Reactstrap.Row>
                            <Reactstrap.Row className="justify-content-center w-50 offset-3">
                                <Reactstrap.Button className="bg-primary" type="button" onClick={()=>{this.moveToSignIn()}}>
                                    Back To Sign In</Reactstrap.Button>
                            </Reactstrap.Row>
                        </Reactstrap.Card>
                </Reactstrap.Col>
            </Reactstrap.Row>
        );
    }
}


const mapDispatchtoProps={signUpAttempt};

const mapStateToProps = state => ({
    signUp: state.flask.signUp,
});

export default ReactRedux.connect(mapStateToProps, mapDispatchtoProps)(SignUp);