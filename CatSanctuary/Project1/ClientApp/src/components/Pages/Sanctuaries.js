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

        <div className={'row'}>

          <div className={'col-10 object-center'}>
            <div className={'row'}>
              <hr className={'mb-4'}/>
              {sanctuaries.map(sanctuary =>
                <div className={'col-6 object-center'}>
                  <a className={'link'} href={'sanctuaries/' + sanctuary.id}>
                    <h3 className={'text-center text-gilroy-extrabold'}>{sanctuary.name}</h3>
                    <h5 className={'text-center text-gilroy-medium'}><b>{sanctuary.address}</b></h5>
                    <h5 className={'text-center text-gilroy-medium'}>{Sanctuaries.getAnimalCount(sanctuary)}</h5>
                    <p className={'text-center text-gilroy-regular'}>{sanctuary.description}</p>
                    <br/>
                  </a>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    );
  }

  static getAnimalCount(sanctuary) {
    return sanctuary.animalsCount <= 0 ? 'нет прелестных потенциальных питомцев' :
      sanctuary.animalsCount === 1 ? sanctuary.animalsCount + ' прелестный потенциальный питомец' :
        sanctuary.animalsCount < 5 ? sanctuary.animalsCount + ' прелестных потенциальных питомца' :
          sanctuary.animalsCount + ' прелестных потенциальных питомцев';
  }
  
  static handleCreateClick = () => {
    window.location.href = `/sanctuaries/create`;
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Sanctuaries.renderSanctuariesTable(this.state.sanctuaries);

    return (
      <div className={'container'}>
        <div className="row">
          <div className="col-3"></div>
          <h1 className={'col-6 text-center text-montserrat mb-4'}>Все приюты</h1>
          <button
            className={'col-3 btn btn-primary object-center mb-4'}
            style={{height:'3em', width:'13em'}}
            onClick={Sanctuaries.handleCreateClick}>
            Добавить приют
          </button>
        </div>
        
        {contents}
      </div>
    );
  }

  async populateSanctuaryData() {
    const response = await fetch('api/sanctuary');
    const data = await response.json();
    data.sort((a, b) => b.id - a.id);
    
    this.setState({sanctuaries: data, loading: false});
  }
}
