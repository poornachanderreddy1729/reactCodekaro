function Place(props) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{props.name}</h2>
        <h2>{"Rating:  " + props.rating}</h2>
        <img className="card-img" src={props.img} alt={props.name} />
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Place;
