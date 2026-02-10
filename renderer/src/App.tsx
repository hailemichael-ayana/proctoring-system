import { useState } from "react"

declare global {
  interface Window {
    api: {
      readFile: () => Promise<string>
    }
  }
}

export default function App() {
  const [content, setContent] = useState("")

  const handleClick = async () => {
    const data = await window.api.readFile()
    setContent(data)
  }

  return (
    <div className="p-40 bg-amber-300">
      <h1>Electron + Vite + React + TS</h1>
      <button onClick={handleClick}>Read File</button>
      <pre>{content}</pre>
    </div>
  )
}
