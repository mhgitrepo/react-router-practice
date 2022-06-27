import React from 'react';
import { Link } from 'react-router-dom';
// import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>React routing website!</h1>
            <nav>
                <ul style={{display:'flex', justifyContent: 'center', gap: '20px'}}>
                    <Link to='/'>Home</Link>
                    <Link to='/friends'>Friends</Link>
                    <Link to='/about'>About</Link>
                    {/* <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/friends">Friends</CustomLink>
                    <CustomLink to="/about">About</CustomLink> */}
                </ul>
            </nav>
        </div>
    );
};

export default Header;