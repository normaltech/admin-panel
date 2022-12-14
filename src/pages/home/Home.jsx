import { Chart } from '../../component/chart/Chart'
import { Featured } from '../../component/featured/Featured'
import { Navbar } from '../../component/navbar/Navbar'
import { Sidebar } from '../../component/sidebar/Sidebar'
import { List } from '../../component/table/Table'
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
          <div className="charts">
            <Featured/>
            <Chart title="Last 6 Months (Revenue)" aspect={2/1}/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Lastest Transactions</div>
            <List/>
          </div>
        </div>
    </div>
  )
}
