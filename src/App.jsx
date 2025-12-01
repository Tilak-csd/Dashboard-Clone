import { useState } from 'react'
import LandingPage from './components/LandingPage'
import { RecoilRoot } from 'recoil'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RecoilRoot>
      <LandingPage />
    </RecoilRoot>
    </>
  )
}

export default App
