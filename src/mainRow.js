import SidebarLeft from './sidebarLeft.js';
import MainContent from './mainContent.js';
import SidebarRight from './sidebarRight.js';

class MainRow extends React.Component{

    constructor(props){
        super(props);
        var transformSidebarLeft = this.transformSidebarLeft.bind(this);
        this.state = {leftTransform: "right"};
        var tweets = this.props.tweets;
    }

    transformSidebarLeft(side){
        switch (side){
            case "left":
                this.setState({leftTransform: "left"});
                side = "right";
                break;
    
            case "right":
                this.setState({leftTransform: "right"});
                side = "left";
                break;
        }
    }

    render(){
        var transformSidebarLeft = this.transformSidebarLeft;

        return(
        <Reactstrap.Container fluid className="ml-n3">
            <Reactstrap.Row id="main-row">
                <SidebarLeft transformSidebarLeft = {transformSidebarLeft.bind(this)} leftTransform = {this.state.leftTransform} />
                <MainContent tweets={this.props.tweets} leftTransform = {this.state.leftTransform} />
                <SidebarRight />
            </Reactstrap.Row>
        </Reactstrap.Container>);
    }
}

export default MainRow;