function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        border: '1px solid black',
      }}
    >
      <div>
        <img src={picture} alt="personal img" />
      </div>
      <div>
        <p>
          <span>First name:</span>
          {firstName}
        </p>
        <p>
          <span>Last name:</span>
          {lastName}
        </p>
        <p>
          <span>Gender:</span>
          {gender === 'male' ? 'male' : gender === 'female' ? 'female' : null}
        </p>
        <p>
          <span>Height:</span>
          {height}
        </p>
        <p>
          <span>Birth:</span>
          {birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
