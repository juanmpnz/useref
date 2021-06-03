import React,{useState, useRef} from 'react'

function FocusApp() {
    const inputRef = useRef(null)
    const [text, setText] = useState("")

    const handleChange = (event) => {
        event.preventDefault()
        const value = event.target.value
        setText(value)
    }

    const handleFocus = ()=>{ 
        //console.log(inputRef.current)
        //inputRef.current.value = "valor mutado"
        inputRef.current.focus()
    }

    const handleBlur = ()=>{ 
        //.blur se usa para quitar el focus
        inputRef.current.blur()
    }

    return (
        <div>
            <h1>Focus App</h1>
            <input type="text" value={text} onChange={handleChange} ref={inputRef}/>
            <button onClick={handleFocus}>Focus</button>
            <button onClick={handleBlur}>Blur</button>

        </div> 
    )
}

export default FocusApp
