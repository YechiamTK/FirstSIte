import { signInAttempt } from './flaskSlice.js';

class LoginScreen extends React.Component{

    constructor(props){
        super(props);
        //this.checkAuth = this.checkAuth.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.authentication = this.authentication.bind(this);
        this.state = {
            id: -1,     //later: fetch from cookies
            user: '',
            password: ''}; 
    }

    handleInputChange=(event)=>{
        const target = event.target; //necessary? 
        const name = target.name;
        this.setState({
            [name]: target.value
        });
    }

    authentication=(e)=>{           //SHOULD TRANSFER TO FETCH axios
        let _id;
        const {user, password} = this.state;
        let verify = {}

        verify['user'] = user;
        verify['password'] = password;

        fetch('/auth', {
            method: 'POST',
            body: JSON.stringify(verify)
        })
        .then(response=>response.json())
        .then(function(data){
            console.log(data);
            _id=data['id'];
            this.setState({id: this._id});
            console.log(_id);
            console.log(this.state._id);
        }.bind(this));

        e.preventDefault();
    }

    /* handleUpdate=()=>{
        const {updateTweets} = this.props;  
        const {update} = this.props;
        if(update){
            this.setState({tweets: this.fetchTweetsFromServer()});
            updateTweets();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if (prevProps.update !== this.props.update){
            this.handleUpdate();
        }
    } */

    render(){
        return(
            <Reactstrap.Row className="d-flex flex-grow-1">
                <Reactstrap.Col className="col align-self-center">
                        <Reactstrap.Card className="bg-secondary w-50 offset-3">
                            <Reactstrap.Row className="no-gutters text-white-50 w-50 offset-3">
                                <Reactstrap.Form id="authenticate" onSubmit={this.authentication} className="w-75 offset-1">
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
                                <Reactstrap.Button className="bg-primary" type="submit" /* onClick={this.authentication} */ form="authenticate">
                                    Login</Reactstrap.Button>
                            </Reactstrap.Row>
                        </Reactstrap.Card>
                </Reactstrap.Col>
            </Reactstrap.Row>
            );
    }   
}

const mapDispatchtoProps={signInAttempt};

const mapStateToProps = state => ({
    signIn: state.flask.signIn,
});

export default ReactRedux.connect(mapStateToProps, mapDispatchtoProps)(LoginScreen);