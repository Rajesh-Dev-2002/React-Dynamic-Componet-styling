import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ProductsTabs from './components/ProductsTabs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProductsTabs/>
     
    </>
  )
}

export default App
