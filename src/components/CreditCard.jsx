import visa from '../assets/images/visa.png';

function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  let privateNumber = `•••• •••• •••• ${number.slice(-4)}`;

  return (
    <div
      style={{
        width: '400px',
        height: '200px',
        margin: '50px auto',
        backgroundColor: bgColor,
        color: color,
        borderRadius: '15px',
      }}
    >
      {type === 'Visa' ? (
        <img
          src={visa}
          alt="Visa Logo"
          style={{
            width: '50px',
            position: 'relative',
            left: '155px',
            top: '15px',
          }}
        />
      ) : null }

      <h4
        style={{
          fontSize: '2.4rem',
          fontWeight: 'initial',
          marginBottom: '0',
        }}
      >
        {privateNumber}
      </h4>

      <div
        style={{
          display: 'flex',
          gap: '15px',
          marginLeft: '25px',
        }}
      >
        <p
          style={{
            marginBottom: '0',
          }}
        >
          Expires {expirationMonth}/{expirationYear}
        </p>
        <p
          style={{
            marginBottom: '0',
          }}
        >
          {bank}
        </p>
      </div>
      <p
        style={{
          textAlign: 'start',
          margin: '0',
          marginLeft: '25px',
        }}
      >
        {owner}
      </p>
    </div>
  );
}

export default CreditCard;
