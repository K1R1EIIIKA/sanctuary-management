import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

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
        
        const customerResponse = await fetch(`api/customer`);
        const customers = await customerResponse.json();

        const caps = animals.filter(animal => animal.type === 'Capybara');
        const cts = animals.filter(animal => animal.type === 'Cat');
        const shs = animals.filter(animal => animal.type === 'Shark');
        const kws = animals.filter(animal => animal.type === 'Kiwi');
        
        customers.forEach(customer => {
            caps.forEach(cap => {
              if (customer.animalId === cap.id) {
                caps.splice(cap, 1);
                console.log(caps)
                }
            });
            cts.forEach(ct => {
                if (customer.animalId === ct.id) {
                    cts.splice(ct, 1);
                }
            });
            shs.forEach(sh => {
                if (customer.animalId === sh.id) {
                    shs.splice(sh, 1);
                }
            });
            kws.forEach(kw => {
                if (customer.animalId === kw.id) {
                    kws.splice(kw, 1);
                }
            });
        });
        
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
          <h4 className={'text-center text-gilroy-extrabold mb-4'}>{sanctuary.address.length > 0 ? sanctuary.address : 'Адрес отсутствует'}</h4>
            <h4 className={'text-center text-gilroy-regular mb-4'}>{sanctuary.description.length > 0 ? sanctuary.description : 'Описание отсутствует'}</h4>

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

function dateToString(birthDate) {
  const date = new Date(birthDate);
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;

  return day + '.' + month + '.' + date.getFullYear();
}

const getCapybaras = (sanctuary, capybaras, colors) => {
  return <div className={'col-6'}>
    <h3 className={'text-center text-gilroy-extrabold'}>Капибары</h3><br/>
    {capybaras.map(animal => (
      <div key={animal.id}> 
        <a className={'link'} href={`sanctuaries/${sanctuary.id}/animals/${animal.id}`}>
          <h5 className={'text-center mb-3 text-gilroy-extrabold'}>{animal.name}</h5>
          
          <h5 className={'mb-1 text-gilroy-medium'}><b>Дата рождения:</b> {dateToString(animal.birthDate)}</h5>
          {colors &&
            <h5 className={'mb-1 text-gilroy-medium'}><b>Цвет:</b> {colors.find(color => color.id === animal.colorId).name}</h5>
          }
          <h5 className={'mb-1 text-gilroy-medium'}><b>Пол:</b> {animal.isMale ? 'Мужской' : 'Женский'}</h5>
          <h5 className={'text-gilroy-medium'}><b>Есть отклонения:</b> {animal.hasDeviations ? 'Да' : 'Нет'}</h5>
        </a>

        <br/>
      </div>
    ))}
  </div>
};

const getCats = (sanctuary, cats, colors) => {
  return <div className={'col-6'}>
    <h3 className={'text-center text-gilroy-extrabold'}>Коты</h3><br/>
    {cats.map(animal => (
      <div key={animal.id}>
        <a className={'link'} href={`sanctuaries/${sanctuary.id}/animals/${animal.id}`}>
          <h5 className={'text-center mb-3 text-gilroy-extrabold'}>{animal.name}</h5>
          <h5 className={'mb-1 text-gilroy-medium'}><b>Дата рождения:</b> {dateToString(animal.birthDate)}</h5>
          <h5 className={'mb-1 text-gilroy-medium'}><b>Цвет:</b> {colors.find(color => color.id === animal.colorId).name}</h5>
          <h5 className={'mb-1 text-gilroy-medium'}><b>Пол:</b> {animal.isMale ? 'Мужской' : 'Женский'}</h5>
          <h5 className={'text-gilroy-medium'}><b>Есть отклонения:</b> {animal.hasDeviations ? 'Да' : 'Нет'}</h5>
        </a>

        <br/>
      </div>
    ))}
  </div>
};

const getSharks = (sanctuary, sharks, colors) => {
  return <div className={'col-6'}>
    <h3 className={'text-center text-gilroy-extrabold'}>Акулы</h3><br/>
    {sharks.map(animal => (
      <div key={animal.id}>
        <a className={'link'} href={`sanctuaries/${sanctuary.id}/animals/${animal.id}`}>
          <h5 className={'text-center mb-3 text-gilroy-extrabold'}>{animal.name}</h5>
          <h5 className={'mb-1 text-gilroy-medium'}><b>Дата рождения:</b> {dateToString(animal.birthDate)}</h5>
          <h5 className={'mb-1 text-gilroy-medium'}><b>Цвет:</b> {colors.find(color => color.id === animal.colorId).name}</h5>
          <h5 className={'mb-1 text-gilroy-medium'}><b>Пол:</b> {animal.isMale ? 'Мужской' : 'Женский'}</h5>
          <h5 className={'text-gilroy-medium'}><b>Есть отклонения:</b> {animal.hasDeviations ? 'Да' : 'Нет'}</h5>
        </a>

        <br/>
      </div>
    ))}
  </div>
};

const getKiwis = (sanctuary, kiwis) => {
  return <div className={'col-6'}>
    <h3 className={'text-center text-gilroy-extrabold'}>Киви</h3><br/>
    {kiwis.map(animal => (
      <div key={animal.id}>
        <a className={'link'} href={`sanctuaries/${sanctuary.id}/animals/${animal.id}`}>
          <h5 className={'text-center mb-3 text-gilroy-extrabold'}>{animal.name}</h5>
          <h5 className={'mb-1 text-gilroy-medium'}><b>Дата рождения:</b> {dateToString(animal.birthDate)}</h5>
          <h5 className={'mb-1 text-gilroy-medium'}><b>Пол:</b> {animal.isMale ? 'Мужской' : 'Женский'}</h5>
          <h5 className={'text-gilroy-medium'}><b>Есть отклонения:</b> {animal.hasDeviations ? 'Да' : 'Нет'}</h5>
        </a>

        <br/>
      </div>
    ))}
  </div>
};

export default Sanctuary;
