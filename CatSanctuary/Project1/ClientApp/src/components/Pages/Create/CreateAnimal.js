import React, {useEffect, useState} from "react";

const CreateAnimal = () => {
  const types = [
    'Capybara',
    'Cat',
    'Shark',
    'Kiwi'
  ]

  const [sanctuaries, setSanctuaries] = useState(null);
  const [colors, setColors] = useState(null);
  const [animalType, setAnimalType] = useState('');
  const [animalName, setAnimalName] = useState('');
  const [sanctuaryId, setSanctuaryId] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [hasDeviations, setHasDeviations] = useState(false);
  const [isMale, setIsMale] = useState(false);

  const [selectedColorId, setSelectedColorId] = useState('');

  const [kiwiCount, setKiwiCount] = useState('');
  const [wingspan, setWingspan] = useState('');

  const [tangerineCount, setTangerineCount] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const [length, setLength] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch('api/sanctuary');
        const data = await response.json();
        setSanctuaries(data);

        const response2 = await fetch('api/animalColor');
        const data2 = await response2.json();
        setColors(data2);

      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleCreateClick = () => {
    const newAnimal = {
        sanctuaryId: sanctuaryId,
      type: animalType,
      name: animalName,
      birthDate: birthDate,
      hasDeviations: hasDeviations,
      isMale: isMale,
    };

    if (animalType === 'Capybara') {
      newAnimal.colorId = selectedColorId;
      newAnimal.tangerineCount = tangerineCount;
      newAnimal.weight = weight;
      newAnimal.height = height;
    }

    if (animalType === 'Kiwi') {
      newAnimal.colorId = selectedColorId;
      newAnimal.wingspan = wingspan;
      newAnimal.kiwiCount = kiwiCount;
    }

    if (animalType === 'Shark') {
      newAnimal.colorId = selectedColorId;
      newAnimal.length = length;
    }

    if (animalType === 'Cat') {
      newAnimal.colorId = selectedColorId;
      newAnimal.weight = weight;
      newAnimal.height = height;
    }

    console.log(newAnimal)

    // try {
    //   const response = fetch(`api/animal/create`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({phoneNumber, fullName}),
    //   });
    //   if (response.ok) {
    //     window.location.href = `/sanctuaries/${sanctuaryId}`;
    //   } else {
    //     // Handle errors or show a message
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };


  const colorSelect = (type) => {
    if (['Capybara', 'Cat', 'Shark'].includes(type)) {
      return (
        <div>
          <label htmlFor="colorSelect" className={'form-create'}>Выберите цвет:</label>
          <select
            className={'text-gilroy-regular'}
            id="colorSelect"
            onChange={(e) => setSelectedColorId(e.target.value)}
            value={selectedColorId}
          >
            <option value="">Выберите цвет</option>
            {colors &&
              colors.map((color) => (
                <option key={color.id} value={color.id}>
                  {color.name}
                </option>
              ))}
          </select>
        </div>
      );
    }
    return null;
  };

  const capybaraSelect = (type) => {
    if (['Capybara'].includes(type)) {
      return (
        <div>
          <label htmlFor="colorSelect" className={'form-create'}>Введите количество мандаринов:</label>
          <input
            className={'text-gilroy-regular'}
            type="number"
            id="colorSelect"
            onChange={(e) => setTangerineCount(e.target.value)}
            value={tangerineCount}>
          </input><br/><br/>

          <label htmlFor="colorSelect" className={'form-create'}>Введите рост:</label>
          <input
            className={'text-gilroy-regular'}
            type="number"
            id="colorSelect"
            onChange={(e) => setHeight(e.target.value)}
            value={height}>
          </input><br/>

          <label htmlFor="colorSelect" className={'form-create'}>Введите вес:</label>
          <input
            className={'text-gilroy-regular'}
            type="number"
            id="colorSelect"
            onChange={(e) => setWeight(e.target.value)}
            value={weight}>
          </input>


        </div>
      );
    }
    return null;
  };

  const sharkSelect = (type) => {
    if (['Shark'].includes(type)) {
      return (
        <div>
          <label htmlFor="colorSelect" className={'form-create'}>Введите длину тела:</label>
          <input
            className={'text-gilroy-regular'}
            type="number"
            id="colorSelect"
            onChange={(e) => setLength(e.target.value)}
            value={length}>
          </input><br/>

        </div>
      );
    }
    return null;
  };
  const catSelect = (type) => {
    if (['Cat'].includes(type)) {
      return (
        <div>
          <label htmlFor="colorSelect" className={'form-create'}>Введите рост:</label>
          <input
            className={'text-gilroy-regular'}
            type="number"
            id="colorSelect"
            onChange={(e) => setHeight(e.target.value)}
            value={height}>
          </input><br/>

          <label htmlFor="colorSelect" className={'form-create'}>Введите вес:</label>
          <input
            className={'text-gilroy-regular'}
            type="number"
            id="colorSelect"
            onChange={(e) => setWeight(e.target.value)}
            value={weight}>
          </input>
        </div>
      );
    }
    return null;
  };

  const kiwiSelect = (type) => {
    if (['Kiwi'].includes(type)) {
      return (
        <div>
          <label htmlFor="colorSelect" className={'form-create'}>Введите количество съеденных киви:</label>
          <input
            className={'text-gilroy-regular'}
            type="number"
            id="colorSelect"
            onChange={(e) => setTangerineCount(e.target.value)}
            value={tangerineCount}>
          </input><br/>

          <label htmlFor="colorSelect" className={'form-create'}>Введите размах крыла:</label>
          <input
            className={'text-gilroy-regular'}
            type="number"
            id="colorSelect"
            onChange={(e) => setWingspan(e.target.value)}
            value={wingspan}>
          </input>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <h1 className={'text-center text-montserrat mb-4'}>Новое животное</h1>
      <hr className={'mb-4'}/>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-6">
          <label htmlFor="typeSelect" className={'form-create'}>Выберите тип животного:</label>
          <select
            className={'text-gilroy-regular'}
            id="typeSelect"
            onChange={(e) => setAnimalType(e.target.value)}
            value={animalType}
          >
            <option value="">Выберите тип</option>
            {types.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
          <br/>
          <label htmlFor="sanctuarySelect" className={'form-create'}>Выберите приют:</label>
          <select
            className={'text-gilroy-regular'}
            id="sanctuarySelect"
            onChange={(e) => setSanctuaryId(e.target.value)}
            value={sanctuaryId}
          >
            <option value="">Выберите приют</option>
            {sanctuaries &&
              sanctuaries.map((sanctuary) => (
                <option key={sanctuary.id} value={sanctuary.id}>
                  {sanctuary.name}
                </option>
              ))}
          </select>
          <br/>
          <label htmlFor="birthDateInput" className={'form-create'}>Дата рождения:</label>
          <input
            className={'text-gilroy-regular'}
            type="date"
            id="birthDateInput"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <br/>
          <label className={'mb-1'}>
            <input
              className={'text-gilroy-regular'}
              type="checkbox"
              checked={hasDeviations}
              onChange={(e) => setHasDeviations(e.target.checked)}
            />
            <span className={'text-gilroy-extrabold'}>Есть отклонения</span>
          </label>
          <br/>
          <label className={'mb-2'}>
            <input
              className={'text-gilroy-regular'}
              type="checkbox"
              checked={isMale}
              onChange={(e) => setIsMale(e.target.checked)}
            />
            <span className={'text-gilroy-extrabold'}>Мужской пол</span>
          </label>
          <br/>
          {colorSelect(animalType)}
          {capybaraSelect(animalType)}
          {kiwiSelect(animalType)}
          {sharkSelect(animalType)}
          {catSelect(animalType)}
          <br/>
          <button className={'btn btn-primary'} onClick={handleCreateClick}>Создать</button>
        </div>
      </div>
    </div>
  );
};

export default CreateAnimal;