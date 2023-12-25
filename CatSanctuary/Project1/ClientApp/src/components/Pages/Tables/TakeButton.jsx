function TakeButton({onClaimClick}) {
  return (
    <div className={'row mb-4'}>
      <div className={'col-4'}></div>

      <button className={'btn btn-primary mt-3 col-3'} style={{height: '100%'}} onClick={onClaimClick}>
        <h4 className={'text-gilroy-extrabold'}>
          Забрать</h4>
      </button>
    </div>
  );
}

export default TakeButton;