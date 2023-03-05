import profiles from '../data/berlin.json';

function Facebook() {

    console.log(profiles);

  return (
    <div>

        {profiles.map( each => {
            return (
                <div style={{
                    display:'flex',
                    border:'2px solid black',
                    gap:'10px',
                    margin:'30px',
                }}>
                    <div>
                        <img  style={{
                        width:'200px',
                        margin:'10px'
                    }} src={each.img} alt='profile img' />
                    </div>
                    <div>
                        <h2><span>First name: </span>{each.firstName}</h2>
                        <h2><span>Last name: </span>{each.lastName}</h2>
                        <h2><span>Country: </span>{each.country}</h2>
                        <h2><span>Type: </span>{each.isStudent ? 'Student' : 'Teacher'}</h2>
                    </div>
                </div>
            )
        })}

    </div>
  )
}

export default Facebook