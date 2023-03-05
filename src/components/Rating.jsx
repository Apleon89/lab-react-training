

function Rating(props) {
    
    let ratingNumber = Math.round(props.children)

    let stars = ''
    const rating = () => {
        
        for (let i = 0; i < ratingNumber; i++) {
            stars += '★'
        } 
        for (let i = 0; i < 5 - ratingNumber; i++) {
            stars += '☆'
        } 
    }
    rating()

  return (
    <div>

        <h2 style={{
            margin:'0'
        }}>{stars}</h2>

    </div>
  )
}

export default Rating