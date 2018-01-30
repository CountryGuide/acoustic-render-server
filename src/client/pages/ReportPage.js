import React from 'react';


const RTInput = () => {
    return (
        <div className="uk-form-controls uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom">
            <label className="uk-form-label">
                <input className="uk-input uk-form-width-small uk-form-small" type="number" step="0.01" min="0"/>
                <span>100</span>
            </label>
        </div>
    );
};

class ReportPage extends React.Component {
    render() {
        return (
            <form className="uk-padding-small" data-uk-grid>
                <fieldset className="uk-fieldset">
                    <legend className="uk-legend">Reverberation time, Hz</legend>
                    <div data-uk-grid>
                        <div>
                            <RTInput/>
                        </div>
                        <div>
                            <RTInput/>
                        </div>
                    </div>
                </fieldset>
                <fieldset className="uk-fieldset">
                    <legend className="uk-legend">Parameters</legend>
                    <div
                        className="uk-form-controls uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom">
                        <label className="uk-form-label">
                            <input className="uk-checkbox" type="checkbox"/>
                            <span>Air mode</span>
                        </label>
                    </div>
                    <div
                        className="uk-form-controls uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom">
                        <label className="uk-form-label">
                            <input className="uk-input uk-form-width-small uk-form-small" type="number" step="0.1"
                                   min="0"/>
                            <span>Volume</span>
                        </label>
                    </div>
                    <div
                        className="uk-form-controls uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom">
                        <label className="uk-form-label">
                            <input className="uk-input uk-form-width-small uk-form-small" type="number" step="0.1"
                                   min="0"/>
                            <span>Square</span>
                        </label>
                    </div>
                    <div
                        className="uk-form-controls uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom">
                        <label className="uk-form-label">
                            <div data-uk-form-custom="target: true">
                                <input type="file"/>
                                <input className="uk-input uk-form-small uk-form-width-small" type="text"
                                       placeholder="Select file" disabled/>
                                <span>Data source</span>
                            </div>
                        </label>
                    </div>
                </fieldset>
            </form>
        )
    }
}


export default {
    component: ReportPage
}
