import React, { Component } from 'react';
import {Sanctuaries} from "./Sanctuaries";

export class Home extends Component {
  static displayName = Home.name;

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
                    <h5 className={'text-center text-gilroy-medium fw-bold'}>{sanctuary.address}</h5>
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

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Sanctuaries.renderSanctuariesTable(this.state.sanctuaries);

    return (
      <div className={'container'}>
        <h1 id="tabelLabel" className={'text-center text-montserrat mb-0'}>Лапки в Ладошке</h1><br/>
        <h5 id="tabelLabel" className={'text-center text-gilroy-medium'}>Лапки в Ладошке - это сайт, который помогает найти дом для животных из приютов.</h5>
        <h5 id="tabelLabel" className={'text-center text-gilroy-medium'}>На сайте представлены приюты, которые находятся в Москве и Московской области.</h5>
        <h3 className={'text-center text-montserrat mt-5'}>Последние приюты</h3><br/>
        {contents}
      </div>
    );
  }

  async populateSanctuaryData() {
    const response = await fetch('api/sanctuary');
    let data = await response.json();
    
    data.sort((a, b) => (a.animalsCount < b.animalsCount) ? 1 : -1);
    data = data.slice(0, 6);
    this.setState({sanctuaries: data, loading: false});
  }
}
