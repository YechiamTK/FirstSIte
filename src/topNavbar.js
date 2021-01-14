class TopNavbar extends React.Component{
    
    //it's possible to decomposite the top navbar as well, and have specific functionality
    //depending on the props (notifs=dropdown notifs etc).

    render(){
        return(
        <Reactstrap.Row fixed='top' name='top-row'>
            <Reactstrap.Col xs='12' className='bg-dark'>
                <Reactstrap.Navbar color='dark' expand='sm' className='pt-3 shadow d-flex'>
                    <img src={"logo.png"} style={{height:'50px'}} className="rounded-circle" alt="Profile Picture" />
                    <span className="mx-5"></span>
                    <Reactstrap.Nav className="mx-auto">
                        <Reactstrap.NavItem className="mx-5"><Reactstrap.NavLink href="#" name="home">Home</Reactstrap.NavLink></Reactstrap.NavItem>
                        <Reactstrap.UncontrolledDropdown nav inNavbar className="mx-5">
                            <Reactstrap.DropdownToggle nav>Notifications</Reactstrap.DropdownToggle>
                            <Reactstrap.DropdownMenu>
                                <Reactstrap.DropdownItem>notification number one long</Reactstrap.DropdownItem>
                                <Reactstrap.DropdownItem>notification num 2</Reactstrap.DropdownItem>
                                <Reactstrap.DropdownItem>notification number three long</Reactstrap.DropdownItem>
                            </Reactstrap.DropdownMenu>
                        </Reactstrap.UncontrolledDropdown>
                        <Reactstrap.UncontrolledDropdown nav inNavbar className="mx-5">
                            <Reactstrap.DropdownToggle nav>Messages</Reactstrap.DropdownToggle>
                            <Reactstrap.DropdownMenu>
                                <Reactstrap.DropdownItem>message number one long</Reactstrap.DropdownItem>
                                <Reactstrap.DropdownItem>message num 2</Reactstrap.DropdownItem>
                                <Reactstrap.DropdownItem>message number three long</Reactstrap.DropdownItem>
                            </Reactstrap.DropdownMenu>
                        </Reactstrap.UncontrolledDropdown>
                    </Reactstrap.Nav>
                    <Reactstrap.Form inline className="ml-auto">
                        <Reactstrap.Input type="search" className="bg-dark form-control btn-outline-dark text-white-50" placeholder="Search..."></Reactstrap.Input>
                        <Reactstrap.InputGroup><Reactstrap.Button color="dark"><i className="fas fa-search"></i></Reactstrap.Button></Reactstrap.InputGroup>
                    </Reactstrap.Form>
                </Reactstrap.Navbar>
            </Reactstrap.Col>
        </Reactstrap.Row>);
    }
    /*
<div className="row sticky-top" name="top-row">
            <div className="col-12 bg-dark">
                <nav className="navbar navbar-dark navbar-expand-sm pt-3 shadow d-flex">
                    <img src={"logo.png"} style={{height:'50px'}} className="rounded-circle" alt="Profile Picture" />
                    <span className="mx-5"></span>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item mx-5"><a href="#" className="nav-link" name="home">Home</a></li>
                        <li className="nav-item mx-5 dropdown">
                            <a href="#" className="nav-link" data-toggle="dropdown" name="notifications">Notifications</a>
                            <div className="dropdown-menu mx-auto">
                                <a href="#" className="dropdown-item">notification number one long</a>
                                <a href="#" className="dropdown-item">notification num 2</a>
                                <a href="#" className="dropdown-item">notification number three long</a>
                            </div>
                        </li>
                        <li className="nav-item mx-5 dropdown">
                            <a href="#" className="nav-link" data-toggle="dropdown" name="messages">Messages</a>
                            <div className="dropdown-menu mx-auto">
                                <a href="#" className="dropdown-item">message number one long<br /><br /></a>
                                <a href="#" className="dropdown-item">message num 2</a>
                                <a href="#" className="dropdown-item">message number three long</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline ml-auto">
                        <input className="form-control search bg-dark btn-outline-dark text-white-50"
                                    type="text" placeholder="Search..."></input>
                        <div className="input-group-btn">
                            <button className="btn btn-dark" type="submit">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </form>
                </nav>
            </div>
        </div>
    */
}

export default TopNavbar;