function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { signInAttempt } from './flaskSlice.js';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props); //this.checkAuth = this.checkAuth.bind(this);

    _defineProperty(this, "handleInputChange", event => {
      const target = event.target; //necessary? 

      const name = target.name;
      this.setState({
        [name]: target.value
      });
    });

    _defineProperty(this, "authentication", e => {
      //SHOULD TRANSFER TO FETCH axios
      let _id;

      const {
        user,
        password
      } = this.state;
      const {
        signInAttempt
      } = this.props;
      let verify = {};
      verify['user'] = user;
      verify['password'] = password;
      fetch('/auth', {
        method: 'POST',
        body: JSON.stringify(verify)
      }).then(response => response.json()).then(function (data) {
        console.log(data);
        _id = data['id'];
        this.setState({
          id: this._id
        });
        signInAttempt();
        console.log(_id);
        console.log(this.state._id);
      }.bind(this));
      e.preventDefault();
    });

    this.handleInputChange = this.handleInputChange.bind(this);
    this.authentication = this.authentication.bind(this);
    this.state = {
      id: -1,
      //later: fetch from cookies
      user: '',
      password: ''
    };
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
  render() {
    return /*#__PURE__*/React.createElement(Reactstrap.Row, {
      className: "d-flex flex-grow-1"
    }, /*#__PURE__*/React.createElement(Reactstrap.Col, {
      className: "col align-self-center"
    }, /*#__PURE__*/React.createElement(Reactstrap.Card, {
      className: "bg-secondary w-50 offset-3"
    }, /*#__PURE__*/React.createElement(Reactstrap.Row, {
      className: "no-gutters text-white-50 w-50 offset-3"
    }, /*#__PURE__*/React.createElement(Reactstrap.Form, {
      id: "authenticate",
      onSubmit: this.authentication,
      className: "w-75 offset-1"
    }, /*#__PURE__*/React.createElement(Reactstrap.FormGroup, null, /*#__PURE__*/React.createElement(Reactstrap.Label, {
      for: "userName"
    }, "Enter Username"), /*#__PURE__*/React.createElement(Reactstrap.Input, {
      type: "text",
      name: "user",
      id: "userName",
      placeholder: "insert username here...",
      value: this.state.user,
      onChange: this.handleInputChange
    })), /*#__PURE__*/React.createElement(Reactstrap.FormGroup, null, /*#__PURE__*/React.createElement(Reactstrap.Label, {
      for: "password"
    }, "Enter Password"), /*#__PURE__*/React.createElement(Reactstrap.Input, {
      type: "password",
      name: "password",
      id: "password",
      value: this.state.password,
      onChange: this.handleInputChange
    })))), /*#__PURE__*/React.createElement(Reactstrap.Row, {
      className: "justify-content-center w-50 offset-3"
    }, /*#__PURE__*/React.createElement(Reactstrap.Button, {
      className: "bg-primary",
      type: "submit"
      /* onClick={this.authentication} */
      ,
      form: "authenticate"
    }, "Login")))));
  }

}

const mapDispatchtoProps = {
  signInAttempt
};

const mapStateToProps = state => ({
  signIn: state.flask.signIn
});

export default ReactRedux.connect(mapStateToProps, mapDispatchtoProps)(LoginScreen);