import React from 'react'

function Footer() {
    return (
        <>
            <footer id="footer" className="d-flex align-items-center justify-content-around text-bg-dark p-1 my-2">
                <p className="lead">Copyright &copy; <span className="text-highlight">designTutor</span> | All rights reserved</p>
                <div className='w-25'>
                    <img src="img/socials/facebook.png" alt="facebook" className='icons img-fluid mx-2'style={{width:"8%"}}/>
                    <img src="img/socials/twitter.png" alt="twitter" className='icons img-fluid mx-2'style={{width:"8%"}}/>
                    <img src="img/socials/mail.png" alt="mail" className='icons img-fluid mx-2'style={{width:"8%"}}/>
                    <img src="img/socials/linkedin.png" alt="linkedin" className='icons img-fluid mx-2'style={{width:"8%"}}/>
                    <img src="img/socials/insta.png" alt="insta" className='icons img-fluid mx-2'style={{width:"8%"}}/>
                </div>
            </footer>
        </>
    )
}

export default Footer
