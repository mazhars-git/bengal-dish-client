import React from 'react';
// import Button from '@material-ui/core/Button';
import Button from 'react-bootstrap/Button';
import '../Css/Header.css';
import { FormControl, InputGroup } from 'react-bootstrap';
import 'animate.css';

const Header = () => {
    return (
        <div className="header-area">
            <div className="content">
                <h1 className="text-center py-4 animate__animated animate__fadeInTopLeft">
                    Best Food Waiting For Your Belly
                </h1>
                <InputGroup style={{width: '25%', margin: 'auto'}} className="mb-3">
                    <FormControl
                        placeholder="Your best recipe"
                        aria-label="Your best recipe"
                        aria-describedby="basic-addon2"
                    />
                    <Button className="searchBtn" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>   
            </div>
        </div>
    );
};

export default Header;