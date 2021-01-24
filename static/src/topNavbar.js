class TopNavbar extends React.Component{
    
    //it's possible to decomposite the top navbar as well, and have specific functionality
    //depending on the props (notifs=dropdown notifs etc).

    render(){
        return(
        <Reactstrap.Row className="sticky-top" name='top-row'>
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
}

export default TopNavbar;