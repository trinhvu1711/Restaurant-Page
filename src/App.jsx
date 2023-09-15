import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './components/layout/Main'
import HomePage from './components/pages/HomePage'
import MenuPage from './components/pages/MenuPage'
function App() {
  return (
    <Suspense fallback>
      <Routes>
        <Route element={<Main />}>
          <Route path='/' element={
            <>
              <HomePage />
            </>
          }></Route>
          <Route path='/menu' element={
            <>
              <MenuPage />
            </>
          }></Route>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
