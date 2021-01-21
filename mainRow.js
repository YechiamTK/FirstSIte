import SidebarLeft from './sidebarLeft.js';
import MainContent from './mainContent.js';
import SidebarRight from './sidebarRight.js';

class MainRow extends React.Component {
  constructor(props) {
    super(props);
    var transformSidebarLeft = this.transformSidebarLeft.bind(this);
    this.state = {
      leftTransform: "right"
    };
    var tweets = this.props.tweets;
  }

  transformSidebarLeft(side) {
    switch (side) {
      case "left":
        this.setState({
          leftTransform: "left"
        });
        side = "right";
        break;

      case "right":
        this.setState({
          leftTransform: "right"
        });
        side = "left";
        break;
    }
  }

  render() {
    var transformSidebarLeft = this.transformSidebarLeft;
    return /*#__PURE__*/React.createElement(Reactstrap.Container, {
      fluid: true,
      className: "ml-n3"
    }, /*#__PURE__*/React.createElement(Reactstrap.Row, {
      id: "main-row"
    }, /*#__PURE__*/React.createElement(SidebarLeft, {
      transformSidebarLeft: transformSidebarLeft.bind(this),
      leftTransform: this.state.leftTransform
    }), /*#__PURE__*/React.createElement(MainContent, {
      tweets: this.props.tweets,
      leftTransform: this.state.leftTransform
    }), /*#__PURE__*/React.createElement(SidebarRight, null)));
  }

}

export default MainRow;