import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Sidebar from './Components/Siderbar'
import PostListProvider from './store/PostListStore'
import {Outlet, useLocation} from 'react-router-dom'
function App() {
 
  const location = useLocation()
  const tab = location.pathname === '/create-post' ? 'Create Post' : 'Home'

  return (
    <>
    <PostListProvider>
      
    <div className='bg-orange-200 '>
      <Header/>
      <div className='flex'>
      <Sidebar tab={tab} />
      <div className='flex-1'>
      <Outlet />
      </div>
      </div>
      <Footer/>
    </div>
    </PostListProvider>
      
    </>
  )
}

export default App

