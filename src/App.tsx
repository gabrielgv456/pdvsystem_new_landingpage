import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/home'
import { GlobalStyle } from './style/global'

function App() {

  return (
    <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App
