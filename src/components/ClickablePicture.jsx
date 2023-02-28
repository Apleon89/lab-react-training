import { useState } from "react"


function ClickablePicture(props) {

    const { img, imgClicked } = props

    const [ actualImg, setActualImg ] = useState(img)

    const clickedImg = () => {
        setActualImg( imgClicked)
    }
  return (
    <div>

        <img onClick={clickedImg} src={actualImg} alt="" />

    </div>
  )
}

export default ClickablePicture