import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
    const adminsRoute = () => auth ? <li><Link to='/admins'>Admins</Link></li> : null;

    return (
        <nav className="uk-navbar-container header" data-uk-navbar>
            <div className="uk-navbar-left">
                <Link className="uk-navbar-item uk-logo" to='/'>AR</Link>
                <ul className="uk-navbar-nav">
                    <li><Link to='/users'>New report</Link></li>
                    {adminsRoute()}
                </ul>
            </div>
        </nav>
    )
};

function mapStateToProps ({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
