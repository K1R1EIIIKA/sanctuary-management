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

  render() {
    let contents = this.state.loading
      ? <h3 className={'text-center'}><em>Loading...</em></h3>
      : Sanctuaries.renderSanctuariesTable(this.state.sanctuaries);

    return (
      <div className={'container'}>
        <h1 id="tabelLabel" className={'text-center text-montserrat mb-0'}>Лапки в Ладошке</h1><br/>
        <h5 id="tabelLabel" className={'text-center text-gilroy-medium'}><span className={'text-gilroy-extrabold'}>Лапки в Ладошке</span> - это сайт, который помогает найти дом для животных из приютов.</h5>
        <h5 id="tabelLabel" className={'text-center text-gilroy-medium'}>На сайте представлены приюты, которые находятся в Москве и Московской области.</h5>
        <h3 className={'text-center text-montserrat mt-5'}>Популярные приюты</h3><br/>
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
