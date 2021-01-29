import React from "react"
import FilterContainer from "../Filter/FilterContainer";
import ProductContainer from "../ProductContainer/ProductContainer";

function Footer() {

    return (
        <div className="app-footer">
            <div className="app-footer-container">
                <div className="footer-heading">About the site</div>
                <div className="row">
                    <div className="technologies-used col-sm-1">
                        Technologies Used:
                    </div>
                    <div className="technologies-used-frontend col-sm-2">
                        Front-End:
                        <ul className="content-ul">
                            <li>React Web framework(JavaScript)</li>
                            <ul >
                                <li>Redux(For react State Management)</li>
                                <li>Axios(For async http requests)</li>
                                <li>Redux Thunk middleware</li>
                            </ul>
                        </ul>
                        <ul className="content-ul">
                            <li>CSS</li>
                            <ul >
                                <li>Bootstrap</li>
                            </ul>
                        </ul>
                        <ul className="content-ul">
                            <li>HTML</li>
                        </ul>

                    </div>
                    <div className="technologies-used-backend col-sm-4">
                        Back-End:
                        <ul className="content-ul">
                            <li>MongoDB(Using Free MongoDB Atlas Cluster)</li>
                        </ul>
                        <ul className="content-ul">
                            <li>Python</li>
                            <ul >
                                <li>PyMongo(To access and query MongoDB Atlas Cluster)</li>
                                <li>Flask(To handle API requests)</li>
                            </ul>
                        </ul>
                    </div>
                    <div className="upcoming-updates col-sm-1">
                        Upcoming Updates:
                    </div>
                    <div className="upcoming-updates-description col-sm-4">
                         <ul className="content-ul">
                            <li>Shopping Cart feature</li>
                            <li>Login Page</li>
                            <li>Sessions</li>
                            <li>Cookies</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;