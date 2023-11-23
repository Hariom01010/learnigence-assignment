import './App.css'
import { Sidebar, Header, Navbar, Main } from './components'

function App() {
  return (
    <div className='flex'>
      <div>
        <Sidebar />
      </div>
      <div className='ml-[4rem] w-[100%]'>
        <Header />
        <Navbar />
        <Main />
      </div>
    </div>
  )
}

export default App
