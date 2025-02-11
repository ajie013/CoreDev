import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import './styles/App.css'
import { lazy, Suspense } from "react"


const HomePage = lazy(() => import('./pages/Home/Home'));
const SoftwarePage = lazy(() => import('./pages/Products/Software'));


function App() {
 
  return (
    <> 
      <BrowserRouter>
       <Routes>
        <Route element={<MainLayout/>}>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/Products/Software" element={<SoftwarePage/>}></Route>
        </Route>
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
