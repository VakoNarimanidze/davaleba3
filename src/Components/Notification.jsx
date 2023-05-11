import successCircle from '../../src/Components/images/succes-circle.png'
import successVector from '../../src/Components/images/seccess-verctor.png'
import errorCircle from '../../src/Components/images/error-circle.png'
import errorVector from '../../src/Components/images/error-vector.png'
import warningCircle from '../../src/Components/images/warning-circle.png'
import warningVector from '../../src/Components/images/warning-vector.png'
import infoCircle from '../../src/Components/images/info-circle.png'
import infoVector from '../../src/Components/images/warning-vector.png'
import './notification.css'

const BoxItems = [
    {
        id: 1,
        before : "",
        imgBg: successCircle,
        img :successVector,
        'title': 'Success',
        'text' :'Order Placed Successfully. You can check order delivery status.'
    },
    {
        id: 2,
        before : '',
        imgBg: errorCircle,
        img :errorVector,
        'title': 'Error',
        'text' :'Order Placed Successfully. You can check order delivery status.'
    },
    {
        id: 3,
        before : '',
        imgBg: warningCircle,
        img : warningVector,
        'title': 'Warning',
        'text' :'Order Placed Successfully. You can check order delivery status.'
    },
    {
        id: 4,
        before : "",
        imgBg: infoCircle,
        img :infoVector,
        'title': 'Info',
        'text' :'Order Placed Successfully. You can check order delivery status.'
    }
]


export function Boxes(props) {
    return(
        <div className="boxContainer">
            <div className="boxes">
                <div className="beforeDiv">
                    <div className='before'>{props.before}</div>
                </div>
            <div className="relative">
                <img className='circle' src={props.successCircle} alt="" />
                <img className='vector' src={props.successVector} alt="" /> 
            </div>
        <div className="flex">
            <h2>{props.title}</h2>
        <p>{props.text}</p>
        </div>
            </div>
        </div>
    )
}

export default function Map() {
    return (
        (BoxItems.map((item) => (<Boxes title={item.title} text={item.text} successCircle={item.img} successVector={item.imgBg} before={ item.before} /> )) )
    )
}
