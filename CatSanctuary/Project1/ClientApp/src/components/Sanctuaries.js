import React, { Component } from 'react';

export class Sanctuaries extends Component {
  static displayName = Sanctuaries.name;

  constructor(props) {
    super(props);
    this.state = {sanctuaries: [], loading: true};
  }

  componentDidMount() {
    this.populateSanctuaryData();
  }

  static renderSanctuariesTable(sanctuaries) {
    return (
      <div>
        <p>b{sanctuaries.length}a</p>
        <table className='table table-striped' aria-labelledby="tabelLabel">
          <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
          </thead>
          <tbody>
          {sanctuaries.map(sanctuary =>
            <tr key={sanctuary.id}>
              <td>{sanctuary.id}</td>
              <td>{sanctuary.name}</td>
            </tr>
          )}
          </tbody>
        </table>

        <table className='table table-striped' aria-labelledby="tabelLabel">
          <thead>
          {sanctuaries.map(sanctuary =>
            <tr key={sanctuary.id}>
              <td>{sanctuary.id}</td>
              <td>{sanctuary.animalsCount}</td>
            </tr>
          )}
          </thead>
        </table>

      </div>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Sanctuaries.renderSanctuariesTable(this.state.sanctuaries);

    return (
      <div>
        <h1 id="tabelLabel">Sanctuary List</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateSanctuaryData() {
    const response = await fetch('sanctuary');
    const data = await response.json();
    this.setState({sanctuaries: data, loading: false});
  }
}
