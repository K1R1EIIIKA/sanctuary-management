import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const Animal = () => {
  const {sanctuaryId, animalId} = useParams();
  const [animal, setAnimal] = useState(null);
  const [showError, setShowError] = useState(false); // Здесь исправление

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
        }
      } catch (error) {
        console.log(error);
        setShowError(true);
      }
    };

    fetchData();
  }, [sanctuaryId, animalId]);


  return (
    <div>
      {showError && (
        <div className={'alert alert-danger text-center'}><h2>Животное не найдено</h2></div>
      )}
      
      {animal && (
        <div>
          <h2 className={'text-center'}>Животное {animal.name}</h2>
          <h4 className={'text-center'}> Дата рождения: {animal.birthDate}</h4>
          <hr/>
        </div>
      )}
    </div>
  );
};

export default Animal;
