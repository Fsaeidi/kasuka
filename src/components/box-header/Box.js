import './box.css'
import propTypes from 'prop-types'


function Box({src,name}){
    return(
    <div id="box">
        <span>
        <img src={src} alt="" />
         <p>{name}</p>
        
        </span>
    </div>

    )
}
export default Box

Box.propTypes={
    name:propTypes.number
}