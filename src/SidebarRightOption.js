class SideBarRightOption extends React.Component{
    
    render(){
        return(
            <Button color="secondary text-white-50 mx-auto">
                <div><small>{this.props.trend}</small></div>
                <div><h4>{this.props.trendTag}</h4></div>
                <div><small>{this.props.popularity}</small></div>
            </Button>);
    }
}
/*
<button type="button" href="#" className="list-group-item list-group-item-action bg-secondary text-white-50 mx-auto">
    <div><small>{this.props.trend}</small></div>
    <div><h4>{this.props.trendTag}</h4></div>
    <div><small>{this.props.popularity}</small></div>
</button>
*/
export default SideBarRightOption;