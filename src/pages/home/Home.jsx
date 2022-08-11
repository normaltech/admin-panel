import { Navbar } from '../../component/navbar/Navbar'
import { Sidebar } from '../../component/sidebar/Sidebar'
import { Widget } from '../../component/widget/Widget'
import './home.scss'

export const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earning"/>
            <Widget type="balance"/>
          </div>
          <div className="chars">
            
          </div>
        </div>
    </div>
  )
}
