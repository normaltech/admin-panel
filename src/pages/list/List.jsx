import { Datatable } from '../../component/datatable/Datatable'
import { Navbar } from '../../component/navbar/Navbar'
import { Sidebar } from '../../component/sidebar/Sidebar'
import './list.scss'

export const List = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}
