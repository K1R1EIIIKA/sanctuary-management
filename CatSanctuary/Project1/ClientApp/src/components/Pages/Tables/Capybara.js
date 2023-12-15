import React, {Component} from 'react';

export class Capybara extends Component {
  static displayName = Capybara.name;
  
    constructor(props) {
        super(props);
        this.state = {capybaras: [], loading: true};
    }

    componentDidMount() {
        this.populateCapybaraData();
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
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Capybara.renderCapybarasTable(this.state.capybaras);

        return (
            <div>
                <h1 id="tabelLabel" >Capybara</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }
}