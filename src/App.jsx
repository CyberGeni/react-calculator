import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main className="flex  w-screen h-screen justify-center text-white bg-[#505050]">
        <section className="grid grid-cols-4 gap-3 p-8 max-w-md w-full place-items-stretch bg-[#1C1C1C]">
          <div className="col-span-4 w-full text-right">
            03483
          </div>
          <div className="bg-[#D4D4D2] rounded-full flex items-center justify-center">C</div>
          <div className="bg-[#D4D4D2] rounded-full flex items-center justify-center">+_</div>
          <div className="bg-[#D4D4D2] rounded-full flex items-center justify-center">%</div>
          <div className="bg-[#FF9500] rounded-full flex items-center justify-center">/</div>
          <div className="bg-[#505050] rounded-full flex items-center justify-center">7</div>
          <div className="bg-[#505050] rounded-full flex items-center justify-center">8</div>
          <div className="bg-[#505050] rounded-full flex items-center justify-center">9</div>
          <div className="bg-[#FF9500] rounded-full flex items-center justify-center">x</div>
          <div className="bg-[#505050] rounded-full flex items-center justify-center">4</div>
          <div className="bg-[#505050] rounded-full flex items-center justify-center">5</div>
          <div className="bg-[#505050] rounded-full flex items-center justify-center">6</div>
          <div className="bg-[#FF9500] rounded-full flex items-center justify-center">-</div>
          <div className="bg-[#505050] rounded-full flex items-center justify-center">1</div>
          <div className="bg-[#505050] rounded-full flex items-center justify-center">2</div>
          <div className="bg-[#505050] rounded-full flex items-center justify-center">3</div>
          <div className="bg-[#FF9500] rounded-full flex items-center justify-center">+</div>
          <div className="bg-[#505050] rounded-full w-full h-auto flex items-center justify-center col-span-2">0</div>
          <div className="bg-[#505050] rounded-full flex items-center justify-center">.</div>
          <div className="bg-[#FF9500] rounded-full flex items-center justify-center">=</div>
        </section>
      </main>
    </div>
  )
}

export default App
