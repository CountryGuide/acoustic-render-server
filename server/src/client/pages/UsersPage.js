import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';
import { Helmet } from "react-helmet";


class UsersPage extends React.Component {
    componentDidMount () {
        this.props.fetchUsers();
    }

    head() {
        return (
            <Helmet>
                <title>Users App</title>
                <meta property={'og:title'} content={'Users App'}/>
            </Helmet>
        );
    }

    renderUsers() {
        return this.props.users.map(user => <li key={user.id}>{user.name}</li>);
    }

    render () {
        return (
            <div>
                {this.head()}
                List of Users
                <ul>{this.renderUsers()}</ul>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function loadData(store) {
    return store.dispatch(fetchUsers());
}

export default {
    loadData,
    component: connect(mapStateToProps, {fetchUsers})(UsersPage)
}