import React from 'react';

const CustomerDetails = ({ customer }) => {
  return (
    <div className={'mt-5'}>
      {customer && customer.length > 0 && (
        <div className={'col-6 object-center'}>
          <h4 className={'text-gilroy-extrabold text-center mb-3'}>Забрал:</h4>
          <h5 className={'text-gilroy-medium mb-3'}>
            <b className={'text-gilroy-extrabold'}>ФИО:</b> {customer[0].fio}
          </h5>
          <h5 className={'text-gilroy-medium mb-3'}>
            <b className={'text-gilroy-extrabold'}>Телефон:</b> {customer[0].phoneNumber}
          </h5>
          <h5 className={'text-gilroy-medium'}>
            <b className={'text-gilroy-extrabold'}>Почта:</b> {customer[0].email}
          </h5>
        </div>
      )}
    </div>
  );
};

export default CustomerDetails;
