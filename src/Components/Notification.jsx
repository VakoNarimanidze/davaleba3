import success from '../../src/Components/images/success.png'
import error from '../../src/Components/images/error.png'
import warning from '../../src/Components/images/warning.png'
import info from '../../src/Components/images/info.png'
import './notification.css'

const BoxItems = [
    {
        id: 1,
        img: success,
        'title': 'Success',
        'text' :'Order Placed Successfully. You can check order delivery status.'
    },
    {
        id: 2,
        img: error,
        'title': 'Error',
        'text' :'Order Placed Successfully. You can check order delivery status.'
    },
    {
        id: 3,
        img: warning,
        'title': 'Warning',
        'text' :'Order Placed Successfully. You can check order delivery status.'
    },
    {
        id: 4,
        img: info,
        'title': 'Info',
        'text' :'Order Placed Successfully. You can check order delivery status.'
    }
]


export function Boxes(props) {
    return(
    <div className="boxContainer">
        <img src={props.success} alt="" />
        <div className="flex">
            <h2>{props.title}</h2>
        <p>{props.text}</p>
        </div>
        </div>
    )
}

export default function Map() {
    return (
        (BoxItems.map((item) => (<Boxes title={item.title} text={item.text} success={item.img} /> )) )
    )
}
