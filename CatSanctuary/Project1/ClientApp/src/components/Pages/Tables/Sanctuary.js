import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const Sanctuary = () => {
  const {id} = useParams();
  const [sanctuary, setSanctuary] = useState(null);
  const [capybaras, setCapybaras] = useState(null);
  const [cats, setCats] = useState(null);
  const [sharks, setSharks] = useState(null);
  const [kiwis, setKiwis] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`sanctuary/${id}`);
        const data = await response.json();

        setSanctuary(data);

        setCapybaras(data.animals.filter(animal => animal.type === 'Capybara'));
        console.log(data.animals.filter(animal => animal.type === 'Shark'));
        setCats(data.animals.filter(animal => animal.type === 'Cat'));
        setSharks(data.animals.filter(animal => animal.type === 'Shark'));
        setKiwis(data.animals.filter(animal => animal.type === 'Kiwi'));

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
          <h2 className={'text-center'}>Животные в приюте {sanctuary.name}</h2>
          <h4 className={'text-center'}> Всего животных: {sanctuary.animalsCount}</h4>

          <div className={'row object-center'} style={{width: '90%'}}>
            <hr/>
            {capybaras.length !== 0 && getCapybaras(sanctuary, capybaras)}
            {cats.length !== 0 && getCats(sanctuary, cats)}
            {sharks.length !== 0 && getSharks(sanctuary, sharks)}
            {kiwis.length !== 0 && getKiwis(sanctuary, kiwis)}
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

const getCapybaras = (sanctuary, capybaras) => {
  return <div className={'col-6'}>
    <h3 className={'text-center'}>Капибары</h3><br/>
    {capybaras.map(animal => (
      <div key={animal.id}> 
        <a className={'link'} href={`sanctuaries/${sanctuary.id}/animals/${animal.id}`}>
          <h5 className={'text-center'}>{animal.name}</h5>
          {/*<h6>{animal.id}</h6>*/}
          <h6>Дата рождения: {dateToString(animal.birthDate)}</h6>
          <h6>Пол: {animal.isMale ? 'Мужской' : 'Женский'}</h6>
          <h6>Есть отклонения: {animal.hasDeviations ? 'Да' : 'Нет'}</h6>
        </a>
        <button className={'btn btn-primary'} onClick={() => {
          fetch(`sanctuary/${sanctuary.id}/animal/${animal.id}`, {
            method: 'DELETE',
          })
        }}>
          Забрать
        </button>
        <br/>
        <br/>
      </div>
    ))}
  </div>
};

const getCats = (sanctuary, cats) => {
  return <div className={'col-6'}>
    <h3 className={'text-center'}>Коты</h3><br/>
    {cats.map(animal => (
      <div key={animal.id}>
        <a className={'link'} href={`sanctuaries/${sanctuary.id}/animals/${animal.id}`}>
          <h5>{animal.name}</h5>
          <h6>{animal.id}</h6>
          <h6>Дата рождения: {dateToString(animal.birthDate)}</h6>
          <h6>{animal.type}</h6>
        </a>
        <button className={'btn btn-primary'} onClick={() => {
          fetch(`sanctuary/${sanctuary.id}/animal/${animal.id}`, {
            method: 'DELETE',
          })
        }}>
          Забрать
        </button>
        <br/>
        <br/>
      </div>
    ))}
  </div>
};

const getSharks = (sanctuary, sharks) => {
  return <div className={'col-6'}>
    <h3 className={'text-center'}>Акулы</h3><br/>
    {sharks.map(animal => (
      <div key={animal.id}>
        <a className={'link'} href={`sanctuaries/${sanctuary.id}/animals/${animal.id}`}><h5>{animal.name}</h5>
          <h6>{animal.id}</h6>
          <h6>Дата рождения: {dateToString(animal.birthDate)}</h6>
          <h6>{animal.type}</h6>
        </a>
        <button className={'btn btn-primary'} onClick={() => {
          fetch(`sanctuary/${sanctuary.id}/animal/${animal.id}`, {
            method: 'DELETE',
          })
        }}>
          Забрать
        </button>
        <br/>
        <br/>
      </div>
    ))}
  </div>
};

const getKiwis = (sanctuary, kiwis) => {
  return <div className={'col-6'}>
    <h3 className={'text-center'}>Киви</h3><br/>
    {kiwis.map(animal => (
      <div key={animal.id}>
        <a className={'link'} href={`sanctuaries/${sanctuary.id}/animals/${animal.id}`}>
          <h5>{animal.name}</h5>
          <h6>{animal.id}</h6>
          <h6>Дата рождения: {dateToString(animal.birthDate)}</h6>
          <h6>{animal.type}</h6>
        </a>
        <button className={'btn btn-primary'} onClick={() => {
          fetch(`sanctuary/${sanctuary.id}/animal/${animal.id}`, {
            method: 'DELETE',
          })
        }}>
          Забрать
        </button>
        <br/>
        <br/>
      </div>
    ))}
  </div>
};

export default Sanctuary;
