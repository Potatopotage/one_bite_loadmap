import { useState } from "react"

function Button({text, color = 'black'}){
    const [change, setChange] = useState(text)

    const changeFunction= () => {
        setChange('변경')
    }

    return (
        <>
            <button 
                style={{color: color}}
                onClick={changeFunction}
            >{change}</button>
        </>
    )
}

export default Button