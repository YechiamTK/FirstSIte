class SideBarLeftOption extends React.Component{

    render(){
        return(
            <li className="bg-secondary border-0">
                <Button href="#" color="secondary text-white-50" size="lg" block>{this.props.option}</Button>
            </li>
        );
    }
}
//<a href="#" className="btn btn-secondary btn-lg btn-block text-white-50" role="button" name="explore">{this.props.option}</a>


export default SideBarLeftOption;