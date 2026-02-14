import {  useNavigate } from "react-router-dom"
import Button from "../components/Button"
import type { ReactNode } from "react"
import { useAuth } from "../context/AuthContext"

interface preExamProps{
  props:{
    loading:boolean
    loadingText:string
    troubleshootingText:string
    nextLink:string
    children: ReactNode
    currentStage:number
  }
}
const PreExam:React.FC<preExamProps> = ({props}) => {
  const navigate = useNavigate()
  const { logout} =useAuth()
  return (
    <div className="h-[80%] w-full  flex flex-col gap-10  items-center py-10">
      <h1 className="text-5xl">Pre Exam Set ups</h1>
      <div className="flex w-full h-full  justify-center p-10 gap-10">
      <div className="w-[40%]  h-full border rounded-2xl flex items-center justify-center">
        {props.loading?<div className="flex items-center gap-2">
          < div className="loader"/>{props.loadingText}</div>:props.children}
      </div>
      <div className="w-[40%] space-y-4">
        <div className="flex gap-2 ">
          {
            Array.from({length:6}).map((_,index)=>
              {
                return <div key={index} className={` w-7 h-2.5 border rounded bg-[#0070cb00] border-[#0070cb] ${index+1===props.currentStage&&props.loading? 'blink-bg':index+1===props.currentStage&&!props.loading?'bg-[#0070cb]':index+1<props.currentStage&&'bg-[#0070cb]'}`} />
              }
            )
          }
        </div>
        <h3 className="text-2xl font-semibold ">Troubleshooting Guide</h3>
        <p className="text-[16px] text-[#ddd] font-light ">{props.troubleshootingText}</p>
      </div>
      </div>
      <Button  onClick={async () => {
    navigate(props.nextLink)
  }} className="bg-[#1F7FCC]" text="Continue" />
  <Button  onClick={logout} className="bg-[#1F7FCC]" text="Logout" />
    </div>
  )
}

export default PreExam