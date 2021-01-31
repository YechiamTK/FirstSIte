import SideBarRightOption from "./SidebarRightOption.js";

class SidebarRight extends React.Component{

    render(){
        /*<aside>
                    <button class="btn btn-info" style="border-radius: 50%;position: absolute;top: 45%; left: -1rem;z-index: 3; opacity: 1
                        !important;" onclick="sidebarTransform(this, 'left',$('#sidebar-right'))"><i class="fas fa-arrow-right"></i></button>
                </aside>*/
        return(
            <Reactstrap.Col xs={{size: 2, offset: 10}} style={{position: "fixed", height: '89vh'}}>
                <ul className="list-group bg-secondary h-100">
                    <SideBarRightOption trend="trend" trendTag="#Trend" popularity="large number"/>
                    <SideBarRightOption trend="trend" trendTag="#Trend" popularity="large number"/>
                    <SideBarRightOption trend="trend" trendTag="#Trend" popularity="large number"/>
                    <SideBarRightOption trend="trend" trendTag="#Trend" popularity="large number"/>
                    <SideBarRightOption trend="trend" trendTag="#Trend" popularity="large number"/>
                    <SideBarRightOption trend="trend" trendTag="#Trend" popularity="large number"/>
                    <SideBarRightOption trend="trend" trendTag="#Trend" popularity="large number"/>

                    <Reactstrap.Button href="#" color="info" className="text-white mx-auto">
                        <div><h6>Show more...</h6></div>
                    </Reactstrap.Button>
                </ul>
            </Reactstrap.Col>);
    }
}

export default SidebarRight;