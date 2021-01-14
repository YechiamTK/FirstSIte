import SideBarLeftOption from './SidebarLeftOption.js';
import ProfileFooter from './profileFooter.js';
import NewTweet from './newTweet.js';
import { toggleTweet } from './modalSlice.js';

class SidebarLeft extends React.Component {
  /* constructor(props){
      super(props);
      //this.state = {show:false};
      
      //this.showModal = thi.showModal.bind(this);
      //this.hideModal = thi.hideModal.bind(this);
  } */

  /* postTweetHandler = () =>{
      this.props.postTweet(this.state.postTweet);
        //this.setState(postTweet=false)?
  } */
  //showModal = () => this.setState({show:true})
  //hideModal = () => this.setState({show:true})
  render() {
    const {
      toggleTweet
    } = this.props;
    const arrowStyle = {
      bordeRadius: '50%',
      position: 'absolute',
      top: '45%',
      right: '-0.5rem',
      zIndex: '2',
      opacity: '1!important',
      transition: 'transform 0.5s'
    };
    var transformSidebarLeft = this.props.transformSidebarLeft;
    const oppositeTransform = this.props.leftTransform == "left" ? "right" : "left";
    const transformBar = this.props.leftTransform == "left" ? {
      transform: 'translate(-80%)'
    } : {
      transform: 'translate(0%)'
    };
    const transformArrow = this.props.leftTransform == "left" ? {
      transform: 'rotate(180deg)'
    } : {
      transform: 'rotate(0deg)'
    };
    /* const [isOpen, setIsOpen] = useState(false);
      const toggle = () => setIsOpen(!isOpen); */

    return /*#__PURE__*/React.createElement(Reactstrap.Col, {
      xs: "2",
      style: {
        position: "fixed",
        transition: 'transform 0.5s',
        ...transformBar
      },
      id: "sidebar-left"
    }, /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement(Reactstrap.Button, {
      color: "info",
      style: { ...arrowStyle,
        ...transformArrow
      },
      onClick: () => transformSidebarLeft(oppositeTransform)
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-arrow-left"
    }))), /*#__PURE__*/React.createElement(Reactstrap.Container, {
      fluid: true
    }, /*#__PURE__*/React.createElement(Reactstrap.ListGroup, {
      flush: true,
      className: "bg-secondary h-100",
      id: "sb-left"
    }, /*#__PURE__*/React.createElement(SideBarLeftOption, {
      option: "#Explore"
    }), /*#__PURE__*/React.createElement(SideBarLeftOption, {
      option: "Bookmarks"
    }), /*#__PURE__*/React.createElement(SideBarLeftOption, {
      option: "Lists"
    }), /*#__PURE__*/React.createElement(SideBarLeftOption, {
      option: "Moments"
    }), /*#__PURE__*/React.createElement(SideBarLeftOption, {
      option: "Settings"
    }), /*#__PURE__*/React.createElement(Reactstrap.ListGroupItem, {
      className: "bg-secondary border-0 d-flex justify-content-center align-items-center"
    }, /*#__PURE__*/React.createElement(Reactstrap.Button, {
      color: "info",
      size: "lg",
      block: true,
      onClick: toggleTweet
    }, "Tweet"), /*#__PURE__*/React.createElement(NewTweet, null)), /*#__PURE__*/React.createElement(ProfileFooter, {
      name: "user-name",
      username: "@Username"
    }))));
  }

} //const postTweet = {type: 'modal/toggleTweet', payload: ''};


const mapDispatchToProps = dispatch => ({
  toggleTweet: () => dispatch(toggleTweet)
}); //const mapStateToProps = state => state.postTweet;


export default ReactRedux.connect(null, mapDispatchToProps)(SidebarLeft);
/*
<div className="col-2 position-fixed" id="sidebar-left">
    <aside>
        <button className="btn btn-info" style={arrowStyle + transformArrow} onClick={()=>transformSidebarLeft(oppositeTransform)}><i className="fas fa-arrow-left"></i></button>
    </aside>
    <ul  className="list-group bg-secondary h-100 collapse show" id="sb-left" style={{transition: 'transform 0.5s'} + transformBar}>
        <SideBarLeftOption option="#Explore" />
        <SideBarLeftOption option="Bookmarks" />
        <SideBarLeftOption option="Lists" />
        <SideBarLeftOption option="Moments" />
        <SideBarLeftOption option="Settings" />
        <li className="list-group-item bg-secondary border-0 d-flex justify-content-center align-items-center">
            <button type="button" className="btn btn-info btn-lg btn-block" dataToggle="modal" dataTarget="#post-tweet-id">Tweet</button>
        </li>
        <ProfileFooter name="user-name" username="@Username" />
    </ul>
</div>
*/