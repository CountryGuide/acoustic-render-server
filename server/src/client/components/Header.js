import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
    console.log(`Auth status: ${auth ? 'Authenticated' : 'Not authenticated'}`);

    const authBtn = auth ? (
        <a href="/api/logout">Logout</a>
    ) : (
        <a href="/api/auth/google">Login</a>
    );

    const adminsRoute = () => auth ? <li><Link to='/admins'>Admins</Link></li> : null;

    return (
        <nav>
            <div className='nav-wrapper'>
                <Link to='/' className='brand-logo'>React SSR</Link>
                <ul className={'right'}>
                    <li><Link to='/users'>Users</Link></li>
                    {adminsRoute()}
                    <li>{authBtn}</li>
                </ul>
            </div>
        </nav>
    )
};

function mapStateToProps ({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);