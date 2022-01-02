import {useGlobalContext} from "./context"

const Input = () =>{
    const { textInput, setTextInput } = useGlobalContext()
    return (
      <div className="input-container">
        <textarea className="text-input" value={textInput} onChange={(e)=>{setTextInput(e.target.value)}}/>
      </div>
    )
}

export default Input