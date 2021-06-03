import React,{useState, useRef} from 'react'

function CopyApp() {
    const inputRef = useRef(null)
    const [text, setText] = useState("Ingresa el texto a copiar")

    const handleChange = (event) => {
        event.preventDefault()
        const value = event.target.value
        setText(value)
    }


    const handleCopy = ()=>{
        const input = inputRef.current
        input.select()
        document.execCommand("copy")
    }

    return (
        <div>
            <h1>Copy App</h1>
            <textarea type="text-area"
            value={text}
            onChange={handleChange}
            ref={inputRef}
            rows="4" cols="50"
            />
            <br/>
            <br/>
            <button onClick={handleCopy}>Copy</button>
        </div>
    )
}

export default CopyApp
