import React, {useEffect, useState} from 'react';

const Animals = () => {
  const [animals, setAnimals] = useState(null);
  const [colors, setColors] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/animal');

        const data = await response.json();
        data.sort((a, b) => b.id - a.id);
        setAnimals(data);

        const colorResponse = await fetch(`api/animalColor`);
        const colorsList = await colorResponse.json();
        setColors(colorsList);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    fetchData();
  }, []);

  function dateToString(birthDate) {
    const date = new Date(birthDate);
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth();

    return day + '.' + month + '.' + date.getFullYear();
  }

  function dateToAge(birthDate) {
    const date = new Date(birthDate);
    const now = new Date();
    const age = now.getFullYear() - date.getFullYear();

    if (age === 0) {
      const month = now.getMonth() - date.getMonth();
      if (month === 0) {
        const day = now.getDate() - date.getDate();
        return day < 5 ? day + ' дня' : day + ' дней';
      }
      return month < 5 ? month + ' месяца' : month + ' месяцев';
    }
    return age < 5 ? age + ' года' : age + ' лет';
  }

  return (
    <div>
        <h1 className={'text-center text-montserrat mb-4'}>Все животные</h1>
      {animals && (

        <div className={'row object-center'} style={{width: '90%'}}>
          {console.log(animals)}
          <hr className={'mb-4'}/>
          {animals.map(animal => (
            <div key={animal.id} className={'col-4 object-center'}>
              <a className={'link'} href={`sanctuaries/${animal.sanctuaryId}/animals/${animal.id}`}>
                <h5 className={'text-center mb-3 text-gilroy-extrabold'}>{animal.name}</h5>

                <h5 className={'mb-1 text-gilroy-medium'}><b>Дата рождения:</b> {dateToString(animal.birthDate)}</h5>
                {/*{colors &&*/}
                {/*  <h5 className={'mb-1 text-gilroy-medium'}>*/}
                {/*    <b>Цвет:</b> {colors.find(color => color.id === animal.colorId).name}</h5>*/}
                {/*}*/}
                <h5 className={'mb-1 text-gilroy-medium'}><b>Пол:</b> {animal.isMale ? 'Мужской' : 'Женский'}</h5>
                <h5 className={'text-gilroy-medium'}><b>Есть отклонения:</b> {animal.hasDeviations ? 'Да' : 'Нет'}</h5>
              </a>

              <br/>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default Animals;