import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { useGlobalContext } from "./context"

const Output = () => {
     const { textInput} = useGlobalContext()
  return (
    <div className="input-container">
      <ReactMarkdown
        className="text-output"
        children={textInput}
        remarkPlugins={[remarkGfm]}
      />
    </div>
  )
}

export default Output
