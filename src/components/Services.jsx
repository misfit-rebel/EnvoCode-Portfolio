const Services = ({name,img}) => {
  return (
    <div className="d-flex">
        <img src={img} alt=''/>
        <h5 className="align-self-center ms-3" >{name}</h5>
    </div>
  )
}
export default Services