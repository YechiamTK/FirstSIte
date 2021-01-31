function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import SideBarLeftOption from './SidebarLeftOption.js';
import ProfileFooter from './profileFooter.js'; //import NewTweet from './newTweet.js';

import { toggleTweet } from './modalSlice.js';

class SidebarLeft extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleClick", () => {
      const {
        toggleTweet
      } = this.props;
      toggleTweet();
    });
  }

  render() {
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
      onClick: () => {
        this.handleClick();
      }
    }, "Tweet")), /*#__PURE__*/React.createElement(ProfileFooter, {
      name: "user-name",
      username: "@Username"
    }))));
  }

}

const mapDispatchToProps = {
  toggleTweet
};
export default ReactRedux.connect(null, mapDispatchToProps)(SidebarLeft);