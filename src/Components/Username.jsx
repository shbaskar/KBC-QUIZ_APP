import { useRef } from "react"

export default function Username({setUsername}) {
    const inputRef=useRef(null);

    const handleclick=()=>{
        setUsername(inputRef.current.value);
    }

  return (
    <div className="username">
        <h1 className="header">Welcome to KBC Quiz</h1>
      <input 
      className="inputstart"
      placeholder="Enter your name"
      ref={inputRef}
       />
       <button className="inputbutton" onClick={handleclick}>Start</button>
    </div>
  )
}

