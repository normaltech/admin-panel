import { Navbar } from '../../component/navbar/Navbar'
import { Sidebar } from '../../component/sidebar/Sidebar'
import './home.scss'

export const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          home container
        </div>
    </div>
  )
}
