import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/index';
import {Helmet} from "react-helmet";


class UsersPage extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    head() {
        return (
            <Helmet>
                <title>Users</title>
                <meta property={'og:title'} content={'Users'}/>
            </Helmet>
        );
    }

    renderUsers() {
        return this.props.users.map(user => <li className={'collection-item'} key={user.id}>{user.name}</li>);
    }

    render() {
        return (
            <div>
                {this.head()}
                <ul className={'collection with-header'}>
                    <h3>List of Users</h3>
                    {this.renderUsers()}
                </ul>
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