import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import AnimalDetail from './AnimalDetail';

const Animal = () => {
  const {sanctuaryId, animalId} = useParams();
  const [animal, setAnimal] = useState(null);
  const [color, setColor] = useState(null);
  const [showError, setShowError] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

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

  const handleClaimClick = () => {
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`sanctuary/${sanctuaryId}/animal/${animalId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({phoneNumber, fullName}),
      });
      if (response.ok) {
        window.location.href = `/sanctuaries/${sanctuaryId}`;
      } else {
        // Handle errors or show a message
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

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

                <div className={'row mb-4'}>
                  <div className={'col-4'}></div>

                  <button className={'btn btn-primary mt-3 col-3'} style={{height: '100%'}} onClick={handleClaimClick}>
                    <h4>
                      Забрать</h4>
                  </button>
                </div>

                <div className={'row'}>
                  <div className={'col-4'}></div>
                  <div className={'col-4'}>
                    {showForm && (
                      <form onSubmit={handleSubmit}>
                        <div>
                          <label htmlFor="fullName" className={'form-label'}>ФИО:</label>
                          <input
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            className={'input-group'}
                            style={{width: '10em'}}
                          />
                        </div>
                        <div>
                          <label htmlFor="phoneNumber" className={'form-label'}>Номер телефона:</label>
                          <input
                            type="text"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                            className={'input-group'}
                            style={{width: '10em'}}
                          />
                          <label htmlFor="email" className={'form-label'}>Email:</label>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={'input-group'}
                            style={{width: '10em'}}
                          />
                        </div>
                        <button className={'btn btn-primary mt-4 mb-3'}
                                onClick={() => {
                                  fetch(`sanctuary/${sanctuaryId}/animal/${animalId}`, {
                                    method: 'POST',
                                    headers: {
                                      'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({ phoneNumber, fullName, email }),
                                  }).then(() => {
                                    window.location.href = `/sanctuaries/${sanctuaryId}`;
                                    });
                                }}>
                          Отправить
                        </button>
                      </form>
                    )}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Animal;
