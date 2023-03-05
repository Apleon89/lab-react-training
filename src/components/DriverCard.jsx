import Rating from './Rating';

function DriverCard(props) {
  const { img, car, name, rating } = props;
  const { licensePlate, model } = car;

  const style = {
    margin: '5px 20px',
    textAlign: 'start',
  };

  return (
    <div
      style={{
        backgroundColor: 'rgb(69,93,181)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '20px',
        margin: ' 20px 0',
        padding: '20px 0',
      }}
    >
      <div>
        <img
          style={{
            width: '130px',
            height: '130px',
            objectFit: 'cover',
            borderRadius: '130px',
          }}
          src={img}
          alt=""
        />
      </div>
      <div>
        <h2 style={style}>{name}</h2>
        <h3 style={style}>
          <Rating children={rating} />
        </h3>
        <p style={style}>
          {model} - {licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
