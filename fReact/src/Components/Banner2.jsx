import Card from "./Card"
import list from "../../public/list.json"
function Banner2() {
   console.log("list adta",list);

          

  return (
    <>    <h1 className="font-bold text-xl pb-2 text-center" >Our Services</h1>
         <div className="grid grid-cols-1 md:grid-cols-3  justify-evenly space-x-9">
       { list.map((item)=>(
                    <Card item={item} key={item}/>
                )
                )}
     </div>
    </>
    
  )
}

export default Banner2
