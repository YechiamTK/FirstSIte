class TopNavbar extends React.Component{
    
    //it's possible to decomposite the top navbar as well, and have specific functionality
    //depending on the props (notifs=dropdown notifs etc).

    render(){
        return(
        <Row fixed='top' name='top-row'>
            <Col xs='12' className='bg-dark'>
                <Navbar color='dark' expand='sm' className='pt-3 shadow d-flex'>
                    <img src={"logo.png"} style={{height:'50px'}} className="rounded-circle" alt="Profile Picture" />
                    <span className="mx-5"></span>
                    <Nav className="mx-auto">
                        <NavItem className="mx-5"><NavLink href="#" name="home">Home</NavLink></NavItem>
                        <UncontrolledDropdown nav inNavbar className="mx-5">
                            <DropdownToggle nav>Notifications</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>notification number one long</DropdownItem>
                                <DropdownItem>notification num 2</DropdownItem>
                                <DropdownItem>notification number three long</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar className="mx-5">
                            <DropdownToggle nav>Messages</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>message number one long</DropdownItem>
                                <DropdownItem>message num 2</DropdownItem>
                                <DropdownItem>message number three long</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <Form inline className="ml-auto">
                        <Input type="search" className="bg-dark form-control btn-outline-dark text-white-50" placeholder="Search..."></Input>
                        <InputGroup><Button color="dark"><i className="fas fa-search"></i></Button></InputGroup>
                    </Form>
                </Navbar>
            </Col>
        </Row>);
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