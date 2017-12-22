import React from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions/index';
import requireAuth from "../components/hocs/requireAuth";
import {Helmet} from "react-helmet";


class AdminsPage extends React.Component {
    componentDidMount () {
        this.props.fetchAdmins();
    }

    renderAdmins() {
        return this.props.admins.map(admin => <li className={'collection-item'} key={admin.id}>{admin.name}</li>);
    }

    head() {
        return (
            <Helmet>
                <title>Admins</title>
                <meta property={'og:title'} content={'Admins'}/>
            </Helmet>
        );
    }

    render () {
        return (
            <div>
                {this.head()}
                <ul className={'collection with-header'}>
                    <h3>List of Admins</h3>
                    {this.renderAdmins()}
                </ul>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        admins: state.admins
    }
}

function loadData(store) {
    return store.dispatch(fetchAdmins());
}

export default {
    loadData,
    component: connect(mapStateToProps, {fetchAdmins})(requireAuth(AdminsPage))
}
