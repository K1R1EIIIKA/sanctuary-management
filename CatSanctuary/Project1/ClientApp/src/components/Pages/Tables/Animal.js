import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Sanctuary from "./Sanctuary";

const Animal = () => {
  const {sanctuaryId, animalId} = useParams();
  const [animal, setAnimal] = useState(null);
  const [color, setColor] = useState(null);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`sanctuary/${sanctuaryId}/animal/${animalId}`);

        if (response.status === 404) {
          setAnimal(null);
          setShowError(true);
        } else {
          const data = await response.json();
          setAnimal(data);

          const colorResponse = await fetch(`animalColor/${data.colorId}`);
          const color = await colorResponse.json();
          setColor(color);
        }
      } catch (error) {
        console.log(error);
        setShowError(true);
      }
    };

    fetchData();
  }, [sanctuaryId, animalId]);

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
      {showError && (
        <div className={'alert alert-danger text-center'}><h2>Животное не найдено</h2></div>
      )}

      {animal && animal.type === 'Capybara' && (
        <div>
          <h3 className={'text-center text-montserrat'}>Капибара {animal.name}</h3>
          <div className={'row'}>
            <div className={'col-8 object-center'}>
              <hr/>

              <div>
                <AnimalDetail title="Дата рождения" value={dateToString(animal.birthDate)}/>
                <AnimalDetail title="Возраст" value={dateToAge(animal.birthDate)}/>
                <AnimalDetail title="Цвет" value={color && color.name}/>
                <AnimalDetail title="Пол" value={animal.isMale ? 'Мужской' : 'Женский'}/>
                <AnimalDetail title="Мандаринов" value={animal.tangerineCount}/>
                <AnimalDetail title="Вес" value={animal.weight}/>
                <AnimalDetail title="Рост" value={animal.height}/>
                <AnimalDetail title="Есть отклонения" value={animal.hasDeviations ? 'Да' : 'Нет'}/>
                
                <button>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function AnimalDetail({title, value}) {
  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-3">
        <h4 className="text-gilroy-extrabold">{title}:</h4>
      </div>
      <div className="col-6">
        <h4 className="text-gilroy-medium">{value}</h4>
      </div>
    </div>
  );
}

export default Animal;
