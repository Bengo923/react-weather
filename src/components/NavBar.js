import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import brandGif from '../assets/gifs/logoGif.gif';

class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="#home">
                    <img width="50px" src={brandGif} alt={"brandGIF"} />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>

                <Form onSubmit={this.props.onSubmitCitySearchForm} inline={true}>
                    <FormControl id="citySearchForm" type="text" name="citySearch" placeholder="Get weather for the city..." className="mr-sm-2" />
                    <Button type="submit" variant="outline-info">Search</Button>
                </Form>
            </Navbar >
        );
    }
}

export default NavBar