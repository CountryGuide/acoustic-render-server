import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/index';
import {Helmet} from "react-helmet";


class UsersPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsers();
    };

    head() {
        return (
            <Helmet>
                <title>Users</title>
                <meta property={'og:title'} content={'Users'}/>
            </Helmet>
        );
    };

    render() {
        return (
            <div>
                {this.head()}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        users: state.users
    }
};

const usersListSorted = users => dispatch => {
    dispatch({
        type: 'USERS_LIST_SORTED',
        payload: {users}
    })
};

const loadData = store => {
    return store.dispatch(fetchUsers());
};

export default {
    loadData,
    component: connect(mapStateToProps, {usersListSorted, fetchUsers})(UsersPage)
}
