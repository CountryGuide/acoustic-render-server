import React from 'react';
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Report } from '../../helper/httpRequest';


const frequencies = [100, 125, 160, 200, 250, 315, 400, 500, 630, 800, 1000, 1250, 1600, 2000, 2500, 3150];

const RTInput = (f, change) => {
    return (
        <div key={f}
             className="uk-form-controls uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom">
            <label className="uk-form-label">
                <input className="uk-input uk-form-width-small uk-form-small"
                       type="number" step="0.01" min="0" onInput={change}
                       required
                       name={`rt_${f}`}/>
                <span className="uk-margin-small-left">{f}</span>
            </label>
        </div>
    );
};

const ParameterInput = (props) => {
    return (
        <div
            className="uk-form-controls uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom">
            <label className="uk-form-label">
                <input className="uk-input uk-form-width-small uk-form-small"
                       type="number"
                       step="0.1"
                       min="0"
                       disabled={props.disabled}
                       onInput={props.onChange}
                       name={props.name}
                       required={props.required}
                />
                <span className="uk-margin-small-left">{props.name}</span>
            </label>
        </div>
    );
};

const FileInput = (props) => {
    return (
        <div
            className="uk-form-controls uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom">
            <label className="uk-form-label">
                <div data-uk-form-custom="target: true">
                    <input type="file" required onChange={props.onChange}/>
                    <input className="uk-input uk-form-small uk-form-width-small" type="text"
                           placeholder="Select file" disabled/>
                    <span className="uk-margin-small-left">Data source</span>
                </div>
            </label>
        </div>
    );
};

const mapStateToProps = state => ({...state.report});

const mapDispatchToProps = dispatch => ({
    onSubmit: (rtValues, paramValues, files) => dispatch({
        type: 'FORM_SUBMIT',
        payload: Report.create(rtValues, paramValues, files)
    }),
    onChangeRT: (value, name) => dispatch({
        type: 'RT_CHANGED',
        payload: {
            value, name
        }
    }),
    onChangeParam: (value, name) => dispatch({
        type: 'PARAM_CHANGED',
        payload: {
            value, name
        }
    }),
    onFileUpload: (file) => dispatch({
        type: 'FILE_UPLOAD',
        payload: {
            file
        }
    })
});

class ReportPage extends React.Component {
    constructor (props) {
        super(props);
        this.submitForm = ({rtValues, paramValues, files}) => ev => {
            ev.preventDefault();
            this.props.onSubmit(rtValues, paramValues, files);
        };
        this.changeRT = ev => {
            this.props.onChangeRT(ev.target.value, ev.target.name);
        };
        this.changeParam = ev => {
            this.props.onChangeParam(ev.target.value, ev.target.name);
        };
        this.onFileInputUpload = ev => {
            this.props.onFileUpload(ev.target.files[0])
        }
    }

    renderPath () {
        if (this.props.path) {
            return (
                <a href={`/api/download/${this.props.path}`}>Download</a>
            )
        }
    }

    render () {
        console.log(this.props);
        return (
            <form className="uk-padding-small" data-uk-grid onSubmit={this.submitForm(this.props)}>
                <Helmet>
                    <title>AR: New report</title>
                </Helmet>
                <fieldset className="uk-fieldset">
                    <legend className="uk-legend">Reverberation time, s</legend>
                    <div data-uk-grid>
                        <div>
                            {frequencies.slice(0, 8).map(f => RTInput(f, this.changeRT))}
                        </div>
                        <div>
                            {frequencies.slice(8).map(f => RTInput(f, this.changeRT))}
                        </div>
                    </div>
                </fieldset>
                <fieldset className="uk-fieldset">
                    <legend className="uk-legend">Parameters</legend>
                    {/*<div*/}
                        {/*className="uk-form-controls uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom">*/}
                        {/*<label className="uk-form-label">*/}
                            {/*<input className="uk-checkbox" type="checkbox"/>*/}
                            {/*<span className="uk-margin-small-left">Air mode</span>*/}
                        {/*</label>*/}
                    {/*</div>*/}
                    <ParameterInput name={'volume'} onChange={this.changeParam} required/>
                    {/*<ParameterInput name={'square'} disabled={true}/>*/}
                    <FileInput onChange={this.onFileInputUpload}/>
                </fieldset>
                <div className='uk-width-1-1'>
                    <button className="uk-button uk-button-primary" type='submit'>Create report</button>
                    {this.renderPath()}
                </div>
            </form>
        )
    }
}


export default {
    component: withRouter(connect(mapStateToProps, mapDispatchToProps)(ReportPage))
}
