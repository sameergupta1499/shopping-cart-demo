import React from "react"

import {CLIENT_DOMAIN_URL} from '../../services/util/domainNameURL'

function Header() {

    return (
        <div className="app-header container-fluid">
            <div className="site-logo-container">
                <a href={CLIENT_DOMAIN_URL}>
                    <div className="app-header-icon-container">
                        <i className="fa fa-wpexplorer "></i>
                    </div>
                    <div className="app-header-text-container">
                        <p>Shop <br/> Now</p>
                    </div>
                </a>
            </div>

            <div className="about-developer-container">
                <a href={"https://www.linkedin.com/in/sameer-gupta-a9531612a/"} target="_blank">
                    <div className="app-header-icon-container">
                        <i className="fa fa-address-card-o"></i>
                    </div>
                    <div className="app-header-text-container">
                        <p>Developer's <br/> Profile</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Header