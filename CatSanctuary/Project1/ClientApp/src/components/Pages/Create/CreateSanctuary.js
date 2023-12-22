import React, {useEffect, useState} from "react";
import {Await} from "react-router-dom";

const CreateSanctuary = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchData = async () => {

    };

    fetchData();
  }, []);

  const handleCreateClick = async () => {
    const newSanctuary = {
        name: name,
        address: address,
        description: description
    }

    try {
      const response = await fetch(`api/sanctuary/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSanctuary),
      });

      if (response.ok) {
        console.log('Success!')
        window.location.href = `/sanctuaries`;
      } else {
        // Handle errors or show a message
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div>
      <h1 className={'text-center text-montserrat mb-4'}>Новый приют</h1>
      <hr className={'mb-4'}/>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-6">
          <label htmlFor="nameInput" className={'form-create'}>Название:</label>
          <input
            className={'text-gilroy-regular'}
            type="text"
            id="nameInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /><br/>

            <label htmlFor="addressInput" className={'form-create'}>Адрес:</label>
            <input
              className={'text-gilroy-regular'}
              type="text"
              id="addressInput"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            /><br/>
          
            <label htmlFor="descriptionInput" className={'form-create'}>Описание:</label>
            <input
              className={'text-gilroy-regular'}
              type="text"
              id="descriptionInput"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            /><br/>
          
          <button className={'btn btn-primary'} onClick={handleCreateClick}>Создать</button>
        </div>
      </div>
    </div>
  );
};

export default CreateSanctuary;