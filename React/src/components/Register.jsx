import { useState } from "react"

const Register = () => {
    const [name, setName] = useState('')

    const onChange = (e) => {
        setName(e.target.value)
    }

    return(
        <div>
            <input 
                type="text" 
                placeholder="이름"
                onChange={onChange}
            />
             
            <input type="date" />
        </div>
    )
}

export default Register