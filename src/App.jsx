import { useState } from 'react'

import './App.css'
function App() {
  

  return (
    <div className="App">
      <main className="flex  w-screen h-screen justify-center text-white bg-[#505050] font-[montserrat]">
        <section className="grid grid-cols-4 gap-3 sm:gap-6 p-8 max-w-md sm:max-w-2xl md:max-w-md w-full place-items-stretch bg-[#1C1C1C]">
          <div className="col-span-4 w-full text-right">
            03483
          </div>
          <div className="bg-[#D4D4D2] rounded-full text-2xl font-semibold flex items-center justify-center">C</div>
          <div className="bg-[#D4D4D2] rounded-full text-2xl font-semibold flex items-center justify-center">+_</div>
          <div className="bg-[#D4D4D2] rounded-full text-2xl font-semibold flex items-center justify-center">%</div>
          <div className="bg-[#FF9500] rounded-full text-2xl font-semibold flex items-center justify-center">/</div>
          <div className="bg-[#505050] rounded-full text-2xl font-semibold flex items-center justify-center">7</div>
          <div className="bg-[#505050] rounded-full text-2xl font-semibold flex items-center justify-center">8</div>
          <div className="bg-[#505050] rounded-full text-2xl font-semibold flex items-center justify-center">9</div>
          <div className="bg-[#FF9500] rounded-full text-2xl font-semibold flex items-center justify-center">x</div>
          <div className="bg-[#505050] rounded-full text-2xl font-semibold flex items-center justify-center">4</div>
          <div className="bg-[#505050] rounded-full text-2xl font-semibold flex items-center justify-center">5</div>
          <div className="bg-[#505050] rounded-full text-2xl font-semibold flex items-center justify-center">6</div>
          <div className="bg-[#FF9500] rounded-full text-2xl font-semibold flex items-center justify-center">-</div>
          <div className="bg-[#505050] rounded-full text-2xl font-semibold flex items-center justify-center">1</div>
          <div className="bg-[#505050] rounded-full text-2xl font-semibold flex items-center justify-center">2</div>
          <div className="bg-[#505050] rounded-full text-2xl font-semibold flex items-center justify-center">3</div>
          <div className="bg-[#FF9500] rounded-full text-2xl font-semibold flex items-center justify-center">+</div>
          <div className="bg-[#505050] rounded-full text-2xl font-semibold w-full h-auto flex items-center justify-center col-span-2">0</div>
          <div className="bg-[#505050] rounded-full text-2xl font-semibold flex items-center justify-center">.</div>
          <div className="bg-[#FF9500] rounded-full text-2xl font-semibold flex items-center justify-center">=</div>
        </section>
      </main>
    </div>
  )
}

export default App
