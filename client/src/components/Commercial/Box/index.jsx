import './index.scss'

export default function Index(props) {
  const {title,text,image} = props.data
  return (
    <div className="commercial-box">
        <img src={image} alt="" />
      <h3 className="title"> {title} </h3>
      <p className="text"> {text} </p>
      <button> &#62; </button>
    </div>
  )
}
