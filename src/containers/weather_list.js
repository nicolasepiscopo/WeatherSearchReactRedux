import React, {Component} from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

    renderWeather(cityData) {
        const city = cityData.city;
        const temperatures = cityData.list.map(weather => weather.main.temp);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const pressures = cityData.list.map(weather => weather.main.pressure); 

        return (
            <tr key={city.id}>
                <td>
                    <GoogleMap lon={city.coord.lon} lat={city.coord.lat} />
                </td>
                <td>
                    <Chart height={120} width={180} data={temperatures} color='red' units='K'/>
                </td>
                <td>
                    <Chart height={120} width={180} data={pressures} color='green' units='hPa' />
                </td>
                <td>
                    <Chart height={120} width={180} data={humidities} color='blue' units='%' />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }){
    return { weather }
}

export default connect(mapStateToProps)(WeatherList);