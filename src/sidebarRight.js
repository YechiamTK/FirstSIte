import SideBarRightOption from "./SideBarRightOption.js";

class SidebarRight extends React.Component{

    render(){
        /*<aside>
                    <button class="btn btn-info" style="border-radius: 50%;position: absolute;top: 45%; left: -1rem;z-index: 3; opacity: 1
                        !important;" onclick="sidebarTransform(this, 'left',$('#sidebar-right'))"><i class="fas fa-arrow-right"></i></button>
                </aside>*/
        return(
            <div className="col-2 position-fixed offset-10 overflow-auto" style={{height:'89vh'}}>
                
                <ul className="list-group bg-secondary h-100">
                    <SideBarRightOption trend="trend" trendTag="#Trend" popularity="large number"/>
                    <SideBarRightOption trend="trend" trendTag="#Trend" popularity="large number"/>
                    <SideBarRightOption trend="trend" trendTag="#Trend" popularity="large number"/>
                    <SideBarRightOption trend="trend" trendTag="#Trend" popularity="large number"/>
                    <SideBarRightOption trend="trend" trendTag="#Trend" popularity="large number"/>
                    <SideBarRightOption trend="trend" trendTag="#Trend" popularity="large number"/>
                    <SideBarRightOption trend="trend" trendTag="#Trend" popularity="large number"/>

                    <button type="button" href="#" className="list-group-item list-group-item-action bg-info text-white mx-auto">
                        <div><h6>Show more...</h6></div>
                    </button>
                </ul>      
            </div>);
    }
}

export default SidebarRight;