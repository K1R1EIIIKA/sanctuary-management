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
      try {
        const response = await fetch(`sanctuary/${id}`);
        const data = await response.json();
        
        const colorResponse = await fetch(`animalColor`);
        const colorsList = await colorResponse.json();
        setCapybaraColors(colorsList);
        
        const animalResponse = await fetch(`sanctuary/${id}/animal`);
        const animals = await animalResponse.json();
        setAnimals(animals);

        setSanctuary(data);  
        
        const customerResponse = await fetch(`customer`);
        const customers = await customerResponse.json();

        const caps = animals.filter(animal => animal.type === 'Capybara');
        const cts = animals.filter(animal => animal.type === 'Cat');
        const shs = animals.filter(animal => animal.type === 'Shark');
        const kws = animals.filter(animal => animal.type === 'Kiwi');
        
        customers.forEach(customer => {
            caps.forEach(cap => {
              console.log(customer.animalId, cap.id)
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

  console.log(sanctuary);

  return (
    <div>
      {sanctuary && (
        <div>
          <h2 className={'text-center text-montserrat'}>Животные в приюте {sanctuary.name}</h2>
          <h4 className={'text-center text-gilroy-extrabold mb-4'}> Всего животных: {sanctuary.animalsCount}</h4>

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
  const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth();

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
          <h5 className={'mb-1 text-gilroy-medium'}><b>Цвет:</b> {animal.color}</h5>
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
          <h5 className={'mb-1 text-gilroy-medium'}><b>Цвет:</b> {animal.color}</h5>
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
          <h5 className={'mb-1 text-gilroy-medium'}>Дата рождения: {dateToString(animal.birthDate)}</h5>
          <h5 className={'mb-1 text-gilroy-medium'}>Пол: {animal.isMale ? 'Мужской' : 'Женский'}</h5>
          <h5 className={'text-gilroy-medium'}>Есть отклонения: {animal.hasDeviations ? 'Да' : 'Нет'}</h5>
        </a>

        <br/>
      </div>
    ))}
  </div>
};

export default Sanctuary;
