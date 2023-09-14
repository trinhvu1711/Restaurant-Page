import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './components/layout/main'
import HomePage from './components/pages/HomePage'
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
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
