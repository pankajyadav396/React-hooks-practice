import React, { useRef, useEffect, useState } from 'react'

const Refstate = () => {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");
  const count = useRef(0);


  useEffect(() => {
    count.current = count.current + 1;
    previousInputValue.current = inputValue;
  }, [inputValue]);
  const inputElement = useRef();
  const focusInput = () => {
    inputElement.current.focus();
  };
  return (
    <>
      <div className=' flex items-center gap-3 justify-center flex-col mt-10'>
        <div className=' flex items-center justify-center flex-col w-[600px]'>
          <h1 className=' text-center text-5xl mb-3'>Use ref</h1>
          It show the previous value
          <input className=' border-2 border-green-500'
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            
          />
          <h2 className=' text-2xl'>Current Value: {inputValue}</h2>
          <h2 className=' text-2xl'>Previous Value: {previousInputValue.current}</h2>
          <h1 className=' text-2xl'>Render Count: {count.current}</h1>
          <input className=' mt-5 border mb-4 border-green-500' type="text" ref={inputElement} />
          <button className=' bg-red-700 mb-10 text-white px-4 py-2 text-xl' onClick={focusInput}>Focus Input</button>
        </div>
      </div>
    </>
  )
}

export default Refstate