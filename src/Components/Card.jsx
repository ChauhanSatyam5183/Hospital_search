

function Card({item}) {
  return (
    <div className="card bg-bg-900 w-70 shadow-xl  mt-6 my-5  hover:scale-105 duration-200">
  <figure>
    <img
      src={item.image} className=" w-60  mt-4"
      alt="item" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title ml-20">
      {item.category}
     
    </h2>
  
  </div>
</div>
  )
}

export default Card
