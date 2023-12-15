import React, {Component} from 'react';

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
      <div className={'container'}>

        {sanctuaries.map(sanctuary =>
          <div className={'col-6 object-center'}>
            <a className={'link'} href={'sanctuaries/' + sanctuary.id}>
              <h3 className={'text-center'}>{sanctuary.name}</h3>
              <h5 className={'text-center'}>{sanctuary.address}</h5>
              <h5 className={'text-center'}>{Sanctuaries.getAnimalCount(sanctuary)}</h5>
              <p className={'text-center'}>{sanctuary.description}</p>
              <br/>
            </a>
          </div>
        )}
        
      </div>
    );
  }

  static getAnimalCount(sanctuary) {
    return sanctuary.animalsCount <= 0 ? 'нет прелестных потенциальных питомцев' :
      sanctuary.animalsCount === 1 ? sanctuary.animalsCount + ' прелестный потенциальный питомец' :
        sanctuary.animalsCount < 5 ? sanctuary.animalsCount + ' прелестных потенциальных питомца' :
          sanctuary.animalsCount + ' прелестных потенциальных питомцев';
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Sanctuaries.renderSanctuariesTable(this.state.sanctuaries);

    return (
      <div className={'container'}>
        <h1 id="tabelLabel" className={'text-center'}>Все приюты</h1><br/>
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
