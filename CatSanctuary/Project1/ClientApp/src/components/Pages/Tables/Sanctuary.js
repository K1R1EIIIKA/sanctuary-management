import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const Sanctuary = () => {
  const {id} = useParams();
  const [sanctuary, setSanctuary] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`sanctuary/${id}`);
        const data = await response.json();
        setSanctuary(data);
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
          <hr/>

          {sanctuary.animals.map(animal => (
            <div key={animal.id}>
              <h5>{animal.name}</h5>
              <h6>{animal.id}</h6>
              <h6>{animal.birthDate}</h6>
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
      )}
    </div>
  );
};

export default Sanctuary;
