import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/index';
import {Helmet} from "react-helmet";
import {arrayMove, SortableContainer, SortableElement} from "react-sortable-hoc";


const SortableItem = SortableElement(({ value }) =>
    <li className={'collection-item'}>{value}</li>
);

const SortableList = SortableContainer(({items}) => {
    return (
        <ul className={'collection with-header'}>
            <li className={'collection-header'}><h3>List of Users</h3></li>
            {items.map((value, index) => (
                <SortableItem key={`item-${index}`} index={index} value={value} />
            ))}
        </ul>
    );
});

class UsersPage extends React.Component {
    constructor(props) {
        super(props);

        this.usersListSorted = ({oldIndex, newIndex}) => {
            const users = arrayMove(this.props.users, oldIndex, newIndex);
            this.props.usersListSorted(users);
        }
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
                <SortableList items={this.props.users} onSortEnd={this.usersListSorted}/>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        users: state.users
    }
}

const mapDispatchToProps = dispatch => ({
    fetchUsers,
    usersListSorted: users => dispatch({ type: 'USERS_LIST_SORTED', payload: {users} })
});

function loadData(store) {
    return store.dispatch(fetchUsers());
}

export default {
    loadData,
    component: connect(mapStateToProps, mapDispatchToProps)(UsersPage)
}