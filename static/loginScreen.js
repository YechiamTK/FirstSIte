function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { signInAttempt } from './flaskSlice.js';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "checkAuth", () => {
      /* const {signInAttempt} = this.props;
      fetch('/auth').then(function(response){
          return response.json();
      }).then(function(auth){
          console.log("got authentication response");
          if (auth.id != -1){
              signInAttempt();
          }
      }) */

      /* const credentials = document.getElementById('auth').values;
      let xhttp = new XMLHttpRequest();
      let auth = false;
      xhttp.onreadystatechange = function() {
          if(this.readyState == 4 && this.status == 200){
              auth = this.response[0];
              if(auth){
                  id = this.response[1];
                  signInAttempt();
              }
          }
      };
      xhttp.open("POST", '/authenticate', false);
      xhttp.send(credentials); */
      //credentials = [id, credentials];
    });

    this.checkAuth = this.checkAuth.bind();
  }
  /* fetchTweetsFromServer=()=>{
      let xhttp = new XMLHttpRequest();
      let data = "Error";
      let newTweets = [];
      xhttp.onreadystatechange = function() {
          if(this.readyState == 4 && this.status == 200){
              data = this.responseText;
              data = JSON.parse(data);
              data.forEach((o,i,a)=>newTweet(a[i],newTweets, true));
          }
      };
      xhttp.open("GET", '/fetchTweets', false);
      xhttp.send();
      return newTweets
      
  } */
  //Send form info to server to check authentication


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
    //var cols = {size: 8, offset: 2};
    //var margin = (this.props.leftTransform == "left") ? "ml-4" : "";
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
      className: "w-75 offset-1",
      method: "post",
      action: "/auth",
      onSubmit: () => {
        setTimeout(() => {
          this.checkAuth();
        }, 500);
      }
    }, /*#__PURE__*/React.createElement(Reactstrap.FormGroup, null, /*#__PURE__*/React.createElement(Reactstrap.Label, {
      for: "userName"
    }, "Enter Username"), /*#__PURE__*/React.createElement(Reactstrap.Input, {
      type: "text",
      name: "user",
      id: "userName",
      placeholder: "insert username here..."
    })), /*#__PURE__*/React.createElement(Reactstrap.FormGroup, null, /*#__PURE__*/React.createElement(Reactstrap.Label, {
      for: "password"
    }, "Enter Password"), /*#__PURE__*/React.createElement(Reactstrap.Input, {
      type: "password",
      name: "password",
      id: "password"
    })))), /*#__PURE__*/React.createElement(Reactstrap.Row, {
      className: "justify-content-center w-50 offset-3"
    }, /*#__PURE__*/React.createElement(Reactstrap.Button, {
      className: "bg-primary",
      type: "submit",
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