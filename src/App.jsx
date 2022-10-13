// i don't wanna be a machanic, i wanna be a baller 😫


import { useState } from 'react'

import './App.css'

function App() {
  const [calc, setCalc] = useState(" ")
  const [result, setResult] = useState(" ")

  const ops = ['/', '*', '+', '-', '.', '%']

  // prevents users from applying operation multiple times consecutively
  const updateCalc = value => {
    if (
      ops.includes(value) && calc === " " ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return
    }
    setCalc(calc + value)

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString())
    }
  }

  // displays the digits as they are typed in the visual box
  const createDigits = () => { 
    const digits = [];
    for (let i = 0; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString)} 
                key={i} >
                  {i}
        </button>
      )
    }
    return digits;
  }

  // evaluate the expression in the visual box
  const calculate = () => {
    setCalc(eval(calc).toString())
  }

  // to remove the last number typed in
  const deleteLast = () => {
    if (calc == '') {
      return;
    }
  
    const value = calc.slice(0, -1)
    setCalc(value);

    // this basically updates th result too, so that after a digit is deleted, the result is updated too
    setResult(eval(calc + value).toString())
  }

  // to remove the lasts number typed in
  const clear = () => {
    if (calc == '') {
      return;
    }
    const value = ''
    setCalc(value);
    setResult(value);
  }

  return (
    <div className="App">
      <main className="flex  w-screen h-screen justify-center text-white bg-[#505050] font-[montserrat]">
        <section className="grid grid-cols-4 gap-3 sm:gap-5 p-8 max-w-md sm:max-w-2xl md:max-w-md w-full h-full place-items-stretch bg-[#1C1C1C]">
          <div className="col-span-4 w-full text-right">
            <span className="text-neutral-400 text-4xl">{calc || "0"}</span>
            <br />
            <span className="break-words text-6xl text-right mr-0">{result + '=' ? result : '0' }</span>
          </div>
          <div onClick={clear} className="bg-[#D4D4D2] rounded-full text-2xl font-semibold flex items-center justify-center">C</div>
          <div onClick={deleteLast} className="bg-[#D4D4D2] rounded-full text-2xl font-semibold flex items-center justify-center">DEL</div>
          <div onClick={() => updateCalc('%')} className="bg-[#D4D4D2] rounded-full text-2xl font-semibold flex items-center justify-center">%</div>
          <div onClick={() => updateCalc('/')} className="bg-[#FF9500] rounded-full text-2xl font-semibold flex items-center justify-center">÷</div>
          <div onClick={() => updateCalc('7')} className="bg-[#505050] rounded-full text-2xl font-semibold flex items-center justify-center">7</div>
          <div onClick={() => updateCalc('8')} className="bg-[#505050] rounded-full text-2xl font-semibold flex items-center justify-center">8</div>
          <div onClick={() => updateCalc('9')} className="bg-[#505050] rounded-full text-2xl font-semibold flex items-center justify-center">9</div>
          <div onClick={() => updateCalc('*')} className="bg-[#FF9500] rounded-full text-2xl font-semibold flex items-center justify-center">×</div>
          <div onClick={() => updateCalc('4')} className="bg-[#505050] rounded-full text-2xl font-semibold flex items-center justify-center">4</div>
          <div onClick={() => updateCalc('5')} className="bg-[#505050] rounded-full text-2xl font-semibold flex items-center justify-center">5</div>
          <div onClick={() => updateCalc('6')} className="bg-[#505050] rounded-full text-2xl font-semibold flex items-center justify-center">6</div>
          <div onClick={() => updateCalc('-')} className="bg-[#FF9500] rounded-full text-2xl font-semibold flex items-center justify-center">-</div>
          <div onClick={() => updateCalc('1')} className="bg-[#505050] rounded-full text-2xl font-semibold flex items-center justify-center">1</div>
          <div onClick={() => updateCalc('2')} className="bg-[#505050] rounded-full text-2xl font-semibold flex items-center justify-center">2</div>
          <div onClick={() => updateCalc('3')} className="bg-[#505050] rounded-full text-2xl font-semibold flex items-center justify-center">3</div>
          <div onClick={() => updateCalc('+')} className="bg-[#FF9500] rounded-full text-2xl font-semibold flex items-center justify-center">+</div>
          <div onClick={() => updateCalc('0')} className="bg-[#505050] rounded-full text-2xl font-semibold w-full h-auto flex items-center justify-center col-span-2">0</div>
          <div onClick={() => updateCalc('.')} className="bg-[#505050] rounded-full text-2xl font-semibold flex items-center justify-center">.</div>
          <div onClick={calculate} className="bg-[#FF9500] rounded-full text-2xl font-semibold flex items-center justify-center">=</div>
        </section>
      </main>
    </div>
  )
}

export default App
