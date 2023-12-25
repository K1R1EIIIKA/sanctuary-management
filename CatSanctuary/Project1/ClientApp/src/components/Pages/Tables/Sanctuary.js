import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import SanctuaryAnimalDetail from "./SanctuaryAnimalDetail";

const Sanctuary = () => {
  const {id} = useParams();
  const [sanctuary, setSanctuary] = useState(null);
  const [capybaras, setCapybaras] = useState(null);
  const [capybaraColors, setCapybaraColors] = useState(null);
  const [animals, setAnimals] = useState(null);
  const [cats, setCats] = useState(null);
  const [sharks, setSharks] = useState(null);
  const [kiwis, setKiwis] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log(111)
      try {
        const response = await fetch(`api/sanctuary/${id}`);
        const data = await response.json();

        const colorResponse = await fetch(`api/animalColor`);
        const colorsList = await colorResponse.json();
        setCapybaraColors(colorsList);

        const animalResponse = await fetch(`api/sanctuary/${id}/animal`);
        const animals = await animalResponse.json();
        setAnimals(animals);

        setSanctuary(data);

        const caps = animals.filter(animal => animal.type === 'Capybara' && animal.isTaken === false);
        const cts = animals.filter(animal => animal.type === 'Cat' && animal.isTaken === false);
        const shs = animals.filter(animal => animal.type === 'Shark' && animal.isTaken === false);
        const kws = animals.filter(animal => animal.type === 'Kiwi' && animal.isTaken === false);

        setCapybaras(caps);
        setCats(cts);
        setSharks(shs);
        setKiwis(kws);

      } catch (error) {
        console.error('Error fetching sanctuary data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleCreateClick = () => {
    window.location.href = `/animals/create`;
  }

  return (
    <div>
      {sanctuary && (
        <div>
          <div className="row">
            <div className="col-3"></div>
            <h1 className={'col-6 text-center text-montserrat mb-4'}>Приют "{sanctuary.name}"</h1>
            <button
              className={'col-3 btn btn-primary object-center mb-4 text-gilroy-extrabold'}
              style={{height: '3em', width: '14em'}}
              onClick={handleCreateClick}>
              <h5 className={'mb-0'}>Добавить животное</h5>
            </button>
          </div>
          <h4 className={'text-center text-gilroy-extrabold'}> Всего животных: {sanctuary.animalsCount}</h4>
          <h4
            className={'text-center text-gilroy-extrabold mb-4'}>{sanctuary.address.length > 0 ? sanctuary.address : 'Адрес отсутствует'}</h4>
          <h4
            className={'text-center text-gilroy-regular mb-4'}>{sanctuary.description.length > 0 ? sanctuary.description : 'Описание отсутствует'}</h4>

          <div className={'row object-center'} style={{width: '90%'}}>
            <hr/>
            {capybaras && capybaras.length !== 0 && getCapybaras(sanctuary, capybaras, capybaraColors)}
            {cats && cats.length !== 0 && getCats(sanctuary, cats, capybaraColors)}
            {sharks && sharks.length !== 0 && getSharks(sanctuary, sharks, capybaraColors)}
            {kiwis && kiwis.length !== 0 && getKiwis(sanctuary, kiwis)}
          </div>

        </div>
      )}
    </div>
  );
};

const getCapybaras = (sanctuary, capybaras, colors) => {
  return <div className={'col-6'}>
    <h3 className={'text-center text-gilroy-extrabold'}>Капибары</h3><br/>
    {capybaras.map(animal => (
      <SanctuaryAnimalDetail animal={animal} colors={colors} sanctuary={sanctuary}/>
    ))}
  </div>
};

const getCats = (sanctuary, cats, colors) => {
  return <div className={'col-6'}>
    <h3 className={'text-center text-gilroy-extrabold'}>Коты</h3><br/>
    {cats.map(animal => (
        <SanctuaryAnimalDetail animal={animal} colors={colors} sanctuary={sanctuary}/>
    ))}
  </div>
};

const getSharks = (sanctuary, sharks, colors) => {
  return <div className={'col-6'}>
    <h3 className={'text-center text-gilroy-extrabold'}>Акулы</h3><br/>
    {sharks.map(animal => (
        <SanctuaryAnimalDetail animal={animal} colors={colors} sanctuary={sanctuary}/>
    ))}
  </div>
};

const getKiwis = (sanctuary, kiwis) => {
  return <div className={'col-6'}>
    <h3 className={'text-center text-gilroy-extrabold'}>Киви</h3><br/>
    {kiwis.map(animal => (
        <SanctuaryAnimalDetail animal={animal} sanctuary={sanctuary} colors={null}/>
    ))}
  </div>
};

export default Sanctuary;
