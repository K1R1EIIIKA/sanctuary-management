import React, {useEffect, useState} from 'react';

const Animals = () => {
  const [animals, setAnimals] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/animal');

        const data = await response.json();
        data.sort((a, b) => b.id - a.id);
        setAnimals(data);

        setLoading(false);
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

  const handleCreateClick = () => {
    window.location.href = `/animals/create`;
  }

  const renderContent = () => {
    let content = <div>
      {animals && (
        <div className={'row object-center'} style={{width: '90%'}}>
          {animals.map(animal => (
            <div key={animal.id} className={'col-4 object-center'}>
              <a className={'link'} href={`sanctuaries/${animal.sanctuaryId}/animals/${animal.id}`}>
                <h5 className={'text-center mb-3 text-gilroy-extrabold'}>{animal.name}</h5>

                <h5 className={'mb-1 text-gilroy-medium'}><b>Дата рождения:</b> {dateToString(animal.birthDate)}</h5>

                <h5 className={'mb-1 text-gilroy-medium'}><b>Пол:</b> {animal.isMale ? 'Мужской' : 'Женский'}</h5>
                <h5 className={'mb-1 text-gilroy-medium'}><b>Есть отклонения:</b> {animal.hasDeviations ? 'Да' : 'Нет'}
                </h5>
                <h5 className={'text-gilroy-medium'}><b>Забрали:</b> {animal.isTaken ? 'Да' : 'Нет'}</h5>
              </a>

              <br/>
            </div>
          ))}
        </div>
      )}

    </div>

    return loading ? <h3 className={'text-center'}><em>Loading...</em></h3> : content;
  }

  return <div>
    <div className="row">
      <div className="col-3"></div>
      <h1 className={'col-6 text-center text-montserrat mb-2'}>Все животные</h1>
      <button
        className={'col-3 btn btn-primary object-center mb-4 text-gilroy-extrabold'}
        style={{height:'3em', width:'14em'}}
        onClick={handleCreateClick}>
        <h5 className={'mb-0'}>Добавить животное</h5>
      </button>
    </div>
    <hr className={'mb-4'}/>
    {renderContent()}
  </div>
}

export default Animals;