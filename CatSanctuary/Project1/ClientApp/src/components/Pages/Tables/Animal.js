import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import AnimalDetail from './AnimalDetail';
import TakeButton from "./TakeButton";
import CustomerDetails from "./CustomerDetails";

const Animal = () => {
  const {sanctuaryId, animalId} = useParams();
  const [animal, setAnimal] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [color, setColor] = useState(null);
  const [showError, setShowError] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`api/sanctuary/${sanctuaryId}/animal/${animalId}`);

        const customerResponse = await fetch(`api/customer`);
        const customerData = await customerResponse.json();
        const cus = customerData.filter(c => c.animalId === Number(animalId));
        setCustomer(cus);
        {console.log(cus)}

        if (response.status === 404) {
          setAnimal(null);
          setShowError(true);
        } else {
          const data = await response.json();
          setAnimal(data);

          if (data.type !== 'Kiwi') {
            const colorResponse = await fetch(`api/animalColor/${data.colorId}`);
            const color = await colorResponse.json();
            setColor(color);
          }
          setLoading(false);
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
    const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;

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
        return day !== 1 ? day < 5 ? day + ' дня' : day + ' дней' : day + ' день';
      }
      return month !== 1 ? month < 5 ? month + ' месяца' : month + ' месяцев' : month + ' месяц';
    }
    return age !== 1 ? age < 5 ? age + ' года' : age + 'лет' : age + ' год';
  }

  const handleClaimClick = () => {
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`api/sanctuary/${sanctuaryId}/animal/${animalId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({phoneNumber, fullName}),
      });
      if (response.ok) {
        window.location.href = `/sanctuaries/${sanctuaryId}`;
      } else {
        setError('Ошибка');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const renderForm = () => {
    let content = <div className={'row'}>
      <div className={'col-4'}></div>
      <div className={'col-4'}>
        {showForm && (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName" className={'form-label fw-bold text-gilroy-medium'}>ФИО:</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className={'input-group mb-2'}
                style={{width: '12em'}}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className={'form-label fw-bold text-gilroy-medium'}>Номер
                телефона:</label>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className={'input-group mb-2'}
                style={{width: '12em'}}
              />
              <label htmlFor="email" className={'form-label fw-bold text-gilroy-medium'}>Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={'input-group'}
                style={{width: '12em'}}
              />
            </div>
            <button className={'btn btn-primary mt-3 mb-3 text-gilroy-extrabold'}
                    onClick={() => {
                      fetch(`api/sanctuary/${sanctuaryId}/animal/${animalId}/take`, {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({phoneNumber, fullName, email}),
                      }).then(() => {
                        window.location.href = `/sanctuaries/${sanctuaryId}`;
                      });
                    }}>
              <h4>Отправить</h4>
            </button>
          </form>
        )}
      </div>

    </div>

    return loading ? <h3 className={'text-center'}><em>Loading...</em></h3> : content;
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

                {!animal.isTaken && (
                  <div>
                    <TakeButton onClaimClick={handleClaimClick}/>

                    {renderForm()}
                    {error && <h5 className={'alert alert-danger text-gilroy-extrabold'}>{error}</h5>}
                  </div>
                )}
                
                {animal.isTaken && (
                  <CustomerDetails customer={customer}/>
                )}

              </div>
            </div>
          </div>
        </div>
      )}

      {animal && animal.type === 'Cat' && (
        <div>
          <h3 className={'text-center text-montserrat'}>Кот {animal.name}</h3>
          <div className={'row'}>
            <div className={'col-8 object-center'}>
              <hr/>

              <div>
                <AnimalDetail title="Дата рождения" value={dateToString(animal.birthDate)}/>
                <AnimalDetail title="Возраст" value={dateToAge(animal.birthDate)}/>
                <AnimalDetail title="Цвет" value={color && color.name}/>
                <AnimalDetail title="Пол" value={animal.isMale ? 'Мужской' : 'Женский'}/>
                <AnimalDetail title="Вес" value={animal.weight}/>
                <AnimalDetail title="Рост" value={animal.height}/>
                <AnimalDetail title="Есть отклонения" value={animal.hasDeviations ? 'Да' : 'Нет'}/>

                {!animal.isTaken && (
                  <div>
                    <TakeButton onClaimClick={handleClaimClick}/>

                    {renderForm()}
                    {error && <h5 className={'alert alert-danger text-gilroy-extrabold'}>{error}</h5>}
                  </div>
                )}
                {animal.isTaken && (
                  <CustomerDetails customer={customer}/>
                )}

              </div>
            </div>
          </div>
        </div>
      )}

      {animal && animal.type === 'Shark' && (
        <div>
          <h3 className={'text-center text-montserrat'}>Акула {animal.name}</h3>
          <div className={'row'}>
            <div className={'col-8 object-center'}>
              <hr/>

              <div>
                <AnimalDetail title="Дата рождения" value={dateToString(animal.birthDate)}/>
                <AnimalDetail title="Возраст" value={dateToAge(animal.birthDate)}/>
                <AnimalDetail title="Цвет" value={color && color.name}/>
                <AnimalDetail title="Пол" value={animal.isMale ? 'Мужской' : 'Женский'}/>
                <AnimalDetail title="Длина" value={animal.length}/>
                <AnimalDetail title="Есть отклонения" value={animal.hasDeviations ? 'Да' : 'Нет'}/>

                {!animal.isTaken && (
                  <div>
                    <TakeButton onClaimClick={handleClaimClick}/>

                    {renderForm()}
                    {error && <h5 className={'alert alert-danger text-gilroy-extrabold'}>{error}</h5>}
                  </div>
                )}
                {animal.isTaken && (
                  <CustomerDetails customer={customer}/>
                )}

              </div>
            </div>
          </div>
        </div>
      )}

      {animal && animal.type === 'Kiwi' && (
        <div>
          <h3 className={'text-center text-montserrat'}>Киви {animal.name}</h3>
          <div className={'row'}>
            <div className={'col-8 object-center'}>
              <hr/>

              <div>
                <AnimalDetail title="Дата рождения" value={dateToString(animal.birthDate)}/>
                <AnimalDetail title="Возраст" value={dateToAge(animal.birthDate)}/>
                <AnimalDetail title="Пол" value={animal.isMale ? 'Мужской' : 'Женский'}/>
                <AnimalDetail title="Съедено киви" value={animal.kiwiEaten}/>
                <AnimalDetail title="Размах крыла" value={animal.wingspan}/>
                <AnimalDetail title="Есть отклонения" value={animal.hasDeviations ? 'Да' : 'Нет'}/>

                {!animal.isTaken && (
                  <div>
                    <TakeButton onClaimClick={handleClaimClick}/>

                    {renderForm()}
                    {error && <h5 className={'alert alert-danger text-gilroy-extrabold'}>{error}</h5>}
                  </div>
                )}
                {animal.isTaken && (
                  <CustomerDetails customer={customer}/>
                )}

              </div>
            </div>
          </div>
        </div>
      )
      }
    </div>
  );
};

export default Animal;
