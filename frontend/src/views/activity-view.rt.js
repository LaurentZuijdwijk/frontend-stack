import React from 'react/addons';
import _ from 'lodash';
import moment from 'moment';
export default function () {
    return React.createElement('div', {}, React.createElement('h2', {}, this.state.data.name), React.createElement('div', { 'className': 'well' }, React.createElement('span', {}, 'Time : ', moment.utc(this.state.data.moving_time * 1000).format('HH:mm:ss')), React.createElement('br', {}), React.createElement('span', {}, 'Distance ', (this.state.data.distance / 1000).toFixed(2), ' km'), React.createElement('br', {}), React.createElement('span', {}, 'Average heartrate : ', this.state.data.average_heartrate), React.createElement('br', {}), React.createElement('span', {}, 'Max heartrate : ', this.state.data.max_heartrate), React.createElement('br', {}), React.createElement('span', {}, 'Average cadence : ', this.state.data.average_cadence), React.createElement('br', {}), React.createElement('span', {}, 'Average speed : ', (this.state.data.average_speed * 3.6).toFixed(2), ' km/h'), React.createElement('br', {}), React.createElement('span', {}, 'Max speed : ', (this.state.data.max_speed * 3.6).toFixed(2), ' km/h'), React.createElement('br', {})));
};