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

                //make sure the main content is adjusting to the change
                //$("div[name='main-content").attr({'style': 'transition: all 0.5s'})     //;z-index: -1
                //$("div[name='main-content").attr({"class": "col-10 container-fluid ml-4"});

                //also change the button icon! (or at least make it looks like it changes)
                //$(btn).find("i").attr({"style": "transition: transform 0.5s; transform: rotate(180deg)"});
                side = "right";
                break;
    
            case "right":
                this.setState({leftTransform: "right"});
                //sidebar.attr({'style': sidebar.attr("style")+';transform: translate(0%)'});
                //make sure the main content is adjusting to the change

                //$("div[name='main-content").attr({'style': 'transition: all 0.5s'})     //;z-index: -1
                //$("div[name='main-content").attr({"class": "col-8 offset-2 container-fluid"});

                //also change the button icon! (or at least make it looks like it changes)
                //$(btn).find("i").attr({"style": "transition: transform 0.5s; transform: rotate(0deg)"});
                side = "left";
                break;
        }
        //change the button to open/close (simply replace the function with the opposite side)
        //$(btn).attr({'onclick': "sidebarTransform(this, '"+side+"', $('#"+sidebar.attr('id')+"'))"});
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