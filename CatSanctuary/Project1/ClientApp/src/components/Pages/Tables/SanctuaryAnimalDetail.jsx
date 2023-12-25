import React from 'react';

function SanctuaryAnimalDetail({animal, sanctuary, colors}) {
  function dateToString(birthDate) {
    const date = new Date(birthDate);
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;

    return day + '.' + month + '.' + date.getFullYear();
  }

  const getColorNameById = (colorId) => {
    if (!colorId) {
      return 'Unknown Color';
    }
    const color = colors.find((color) => color.id === colorId);
    return color ? color.name : 'Unknown Color';
  };

  return (
    <div key={animal.id}>
      <a className={'link'} href={`sanctuaries/${sanctuary.id}/animals/${animal.id}`}>
        <h5 className={'text-center mb-3 text-gilroy-extrabold'}>{animal.name}</h5>
        <h5 className={'mb-1 text-gilroy-medium'}><b>Дата рождения:</b> {dateToString(animal.birthDate)}</h5>
        {animal.type !== 'Kiwi' && (
          <h5 className={'mb-1 text-gilroy-medium'}><b>Цвет:</b> {getColorNameById(animal.colorId)}</h5>
        )}
        <h5 className={'mb-1 text-gilroy-medium'}><b>Пол:</b> {animal.isMale ? 'Мужской' : 'Женский'}</h5>
        <h5 className={'text-gilroy-medium'}><b>Есть отклонения:</b> {animal.hasDeviations ? 'Да' : 'Нет'}</h5>
      </a>
      <br/>
    </div>
  );
}

export default SanctuaryAnimalDetail;
