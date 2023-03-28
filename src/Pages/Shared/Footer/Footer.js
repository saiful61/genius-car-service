import React from 'react';

const Footer = () => {
    return (
        <footer style={{ position: "absolute", width: "100%" }} className='text-center text-white p-2 bg-secondary '>
            <p className='mt-2'><small>&copy;{new Date().getFullYear()} All Right Reserved By Saiful</small></p>
        </footer>
    );
};

export default Footer;