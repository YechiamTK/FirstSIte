class SideBarLeftOption extends React.Component{

    render(){
        return(
            <li className="list-group-item bg-secondary border-0">
                <a href="#" className="btn btn-secondary btn-lg btn-block text-white-50" role="button" name="explore">{this.props.option}</a>
            </li>
        );
    }
}

export default SideBarLeftOption;