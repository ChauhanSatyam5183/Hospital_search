
function Cards({item}) {
    
  return (
    <>
        <div className="card bg-base-100 w-92 shadow-xl mt-4 my-3 p-3 hover:scale-105 duration-200">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{item.address}</div>
      <div className="badge badge-outline px-2 py-2 cursor-pointer rounded-full  hover:bg-pink-500 text-white duration-200 ">{item.phoneNumber}</div>
    </div>
  </div>
</div>
</>
  )
}

export default Cards
