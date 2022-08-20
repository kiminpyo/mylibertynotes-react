import React, { useEffect } from "react";

const Footer = () => {
    return (
        <>
            <div className='footer-wrapper'>
                <div className='footer-icon'>
                    <div>
                        <i className='fa-brands fa-instagram fa-2xl'></i>
                    </div>
                    <div>
                        <i className='fa-brands fa-instagram fa-2xl'></i>
                    </div>
                    <div>
                        <i className='fa-brands fa-instagram fa-2xl'></i>
                    </div>
                </div>
                <div className='footer-admin'>
                    <div>about me</div>
                </div>
                <div className='footer-logo'>
                    <i className='fa-solid fa-people-line fa-xl'></i>
                    <br /> 모두가 힘내는 그날까지
                </div>
                <div className='footer-border'></div>
            </div>
        </>
    );
};

export default Footer;
