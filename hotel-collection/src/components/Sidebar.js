import React from 'react'

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <div className="Sidebar__nav">
                <a className="Sidebar-logo" href="#">Neverrest</a>
                <a className="Sidebar-home" href="#">HOME</a>
                <a className="Sidebar-explore" href="#">EXPLORE</a>
                <a className="Sidebar-favorite" href="#">FAVORITE</a>
                <a className="Sidebar-author" href="#">AUTHOR</a>
                <a className="Sidebar-contact" href="#">CONTACT</a>
            </div>
            
            <div className="Sidebar__social">
                <a className="Sidebar__social-ig" href="#">IG</a>
                <a className="Sidebar__social-tweeter" href="#">TW</a>
                <a className="Sidebar__social-facebook" href="#">FA</a>
            </div>

        </div>
    )
}

export default Sidebar
