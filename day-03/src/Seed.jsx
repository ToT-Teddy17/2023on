function ProductFunc(props) {

    const { img, name, age, } = props
    return (
  
      <div className='container'>
        <div className='profile'>
  
          <img src={img} alt='' />
          <hr></hr>
          <div className='text'>
            <p>name:{name}</p>
            <p>age:{age}</p>
          </div>
        </div>
      </div>
    )
  }
export default ProductFunc