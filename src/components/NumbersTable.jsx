
function NumbersTable(props) {

    const numberOfDivs = []
    const calculateDivs = () => {
        for (let i = 1; i< props.limit+1; i++) {
            numberOfDivs.push(i)
        }
    }
    calculateDivs()

    const notEven = {
        width: '150px',
        height: '150px',
        border: '1px solid black'
    }
    const even = {
        backgroundColor:'rgb(235,50,36)',
        width: '150px',
        height: '150px',
        border: '1px solid black'
    }

  return (
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        margin:'10px'
    }}>

        {numberOfDivs.map( each => each % 2 === 0 ? <div key={each} style={even}>{each}</div> : <div key={each} style={notEven}>{each}</div>)}

    </div>
  )
}

export default NumbersTable