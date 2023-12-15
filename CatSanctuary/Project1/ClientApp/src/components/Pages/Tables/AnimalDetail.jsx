function AnimalDetail({title, value}) {
  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-3">
        <h4 className="text-gilroy-extrabold">{title}:</h4>
      </div>
      <div className="col-6">
        <h4 className="text-gilroy-medium">{value}</h4>
      </div>
    </div>
  );
}

export default AnimalDetail;