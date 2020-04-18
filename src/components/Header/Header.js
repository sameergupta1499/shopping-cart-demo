import React from "react"
import {CLIENT_DOMAIN_URL} from '../../services/util/domainNameURL'

function Header() {

    return (
        <div className="app-header container-fluid">
            <div className="app-header-icon-container">
                <a href={CLIENT_DOMAIN_URL}>
                <i className="fa fa-wpexplorer fa-hand-spock-o "></i>
                </a>
            </div>
        </div>
    )
}

export default Header