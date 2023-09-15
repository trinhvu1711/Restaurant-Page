import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './header'


const Main = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default Main