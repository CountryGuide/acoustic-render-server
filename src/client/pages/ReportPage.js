import React from 'react';
import {Helmet} from "react-helmet";


const frequencies = [100, 125, 160, 200, 250, 315, 400, 500, 630, 800, 1000, 1250, 1600, 2000, 2500, 3150];

const RTInput = (f) => {
    return (
        <div key={f} className="uk-form-controls uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom">
            <label className="uk-form-label">
                <input className="uk-input uk-form-width-small uk-form-small" type="number" step="0.01" min="0"/>
                <span className="uk-margin-small-left">{f}</span>
            </label>
        </div>
    );
};

class ReportPage extends React.Component {
    render() {
        return (
            <form className="uk-padding-small" data-uk-grid>
                <Helmet>
                    <title>AR: New report</title>
                </Helmet>
                <fieldset className="uk-fieldset">
                    <legend className="uk-legend">Reverberation time, Hz</legend>
                    <div data-uk-grid>
                        <div>
                            {
                                frequencies.slice(0, 8).map(f => RTInput(f))
                            }
                        </div>
                        <div>
                            {
                                frequencies.slice(8).map(f => RTInput(f))
                            }
                        </div>
                    </div>
                </fieldset>
                <fieldset className="uk-fieldset">
                    <legend className="uk-legend">Parameters</legend>
                    <div
                        className="uk-form-controls uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom">
                        <label className="uk-form-label">
                            <input className="uk-checkbox" type="checkbox"/>
                            <span className="uk-margin-small-left">Air mode</span>
                        </label>
                    </div>
                    <div
                        className="uk-form-controls uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom">
                        <label className="uk-form-label">
                            <input className="uk-input uk-form-width-small uk-form-small" type="number" step="0.1"
                                   min="0"/>
                            <span className="uk-margin-small-left">Volume</span>
                        </label>
                    </div>
                    <div
                        className="uk-form-controls uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom">
                        <label className="uk-form-label">
                            <input className="uk-input uk-form-width-small uk-form-small" type="number" step="0.1"
                                   min="0"/>
                            <span className="uk-margin-small-left">Square</span>
                        </label>
                    </div>
                    <div
                        className="uk-form-controls uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom">
                        <label className="uk-form-label">
                            <div data-uk-form-custom="target: true">
                                <input type="file"/>
                                <input className="uk-input uk-form-small uk-form-width-small" type="text"
                                       placeholder="Select file" disabled/>
                                <span className="uk-margin-small-left">Data source</span>
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
