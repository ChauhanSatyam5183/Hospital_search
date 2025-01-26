
import Navbar from '../Components/navbar'
import Course from '../Components/Course'
import Footer from '../Components/footer'

function Courses() {
   
  return (
    <>
      <Navbar/>
      <div className='min-h-screen'>
        <Course/>
      </div>
      <Footer/>
    </>
  )
}

export default Courses
