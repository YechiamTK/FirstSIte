import SideBarRightOption from "./SidebarRightOption.js";

class SidebarRight extends React.Component {
  render() {
    /*<aside>
                <button class="btn btn-info" style="border-radius: 50%;position: absolute;top: 45%; left: -1rem;z-index: 3; opacity: 1
                    !important;" onclick="sidebarTransform(this, 'left',$('#sidebar-right'))"><i class="fas fa-arrow-right"></i></button>
            </aside>*/
    return /*#__PURE__*/React.createElement(Reactstrap.Col, {
      xs: {
        size: 2,
        offset: 10
      },
      style: {
        position: "fixed",
        height: '89vh'
      }
    }, /*#__PURE__*/React.createElement("ul", {
      className: "list-group bg-secondary h-100"
    }, /*#__PURE__*/React.createElement(SideBarRightOption, {
      trend: "trend",
      trendTag: "#Trend",
      popularity: "large number"
    }), /*#__PURE__*/React.createElement(SideBarRightOption, {
      trend: "trend",
      trendTag: "#Trend",
      popularity: "large number"
    }), /*#__PURE__*/React.createElement(SideBarRightOption, {
      trend: "trend",
      trendTag: "#Trend",
      popularity: "large number"
    }), /*#__PURE__*/React.createElement(SideBarRightOption, {
      trend: "trend",
      trendTag: "#Trend",
      popularity: "large number"
    }), /*#__PURE__*/React.createElement(SideBarRightOption, {
      trend: "trend",
      trendTag: "#Trend",
      popularity: "large number"
    }), /*#__PURE__*/React.createElement(SideBarRightOption, {
      trend: "trend",
      trendTag: "#Trend",
      popularity: "large number"
    }), /*#__PURE__*/React.createElement(SideBarRightOption, {
      trend: "trend",
      trendTag: "#Trend",
      popularity: "large number"
    }), /*#__PURE__*/React.createElement(Reactstrap.Button, {
      href: "#",
      color: "info",
      className: "text-white mx-auto"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h6", null, "Show more...")))));
  }

}

export default SidebarRight;