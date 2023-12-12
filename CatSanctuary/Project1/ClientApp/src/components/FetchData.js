import React, {Component} from 'react';
import {SanctuaryList} from "./SanctuaryList";

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = {forecasts: [], capybaras: [], loading: true};
  }

  componentDidMount() {
    this.populateWeatherData();
    this.populateCapybaraData();
  }

  static renderForecastsTable(forecasts) {
    return (
      <div>
        <p>b{forecasts.length}a</p>
        <table className='table table-striped' aria-labelledby="tabelLabel">
          <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
          </thead>
          <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }

  static renderCapybarasTable(capybaras) {
    return (
      <div>
        <p>b{capybaras.length}a</p>
        <table className='table table-striped' aria-labelledby="tabelLabel">
          <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
          </thead>
          <tbody>
          {capybaras.map(capybara =>
            <tr key={capybara.id}>
              <td>{capybara.id}</td>
              <td>{capybara.name}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    let contents = this.state.loading ?
      <p><em>Loading...</em></p> : FetchData.renderForecastsTable(this.state.forecasts);
    let capybaras = this.state.loading ?
      <p><em>Loading...</em></p> : FetchData.renderCapybarasTable(this.state.capybaras);

    return (
      <div>
        <div>
          <h1 id="tabelLabel">Weather forecast</h1>
          <p>This component demonstrates fetching data from the server.</p>
          {contents}
        </div>

        <div>
          <h1 id="tabelLabel">Capybara</h1>
          <p>This component demonstrates fetching data from the server.</p>
          {capybaras}
        </div>
        
        <SanctuaryList />
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    this.setState({forecasts: data, loading: false});
  }

  async populateCapybaraData() {
    const response = await fetch('capybara');
    // log all routes
    const data = await response.json();
    this.setState({capybaras: data, loading: false});
  }
}
