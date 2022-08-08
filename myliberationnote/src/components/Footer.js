import React, { useEffect } from "react";

const Footer = () => {
    useEffect(() => {
        console.log(window.scrollY);
        console.log(window.screen.availHeight);
        console.log(window.screen.height);
        console.log(window.outerHeight);
        console.log(window.innerHeight);
        console.log(document.documentElement.clientHeight);
        console.log(document.documentElement.scrollTop);
    }, []);
    return (
        <>
            <div className='footer-wrapper'>
                <div className='footer-icon'>
                    <div>
                        <i class='fa-brands fa-instagram fa-2xl'></i>
                    </div>
                    <div>
                        <i class='fa-brands fa-instagram fa-2xl'></i>
                    </div>
                    <div>
                        <i class='fa-brands fa-instagram fa-2xl'></i>
                    </div>
                </div>
                <div className='footer-admin'>
                    <div>about me</div>
                </div>
                <div className='footer-logo'>
                    <i class='fa-solid fa-people-line fa-xl'></i>
                    <br /> 모두가 힘내는 그날까지
                </div>
                <div className='footer-border'></div>
            </div>
        </>
    );
};

export default Footer;
