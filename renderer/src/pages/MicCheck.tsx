import { FaCheck } from "react-icons/fa"
import useMicCheck from "../hooks/useMicCheck"
import PreExam from "../layout/PreExam"
import type { ReactNode } from "react"
interface PropsType{
        loading:boolean
        loadingText:string
        troubleshootingText:string
        nextLink:string
        currentStage:number
        children: ReactNode
    }
const MicCheck = () => {
    const mic = useMicCheck()
    const props:PropsType={
        currentStage:2,
        loadingText:"checking the mic please wait",
        nextLink:"/camera",
        loading:!mic,
        troubleshootingText:"If you are experiencing microphone issues, please ensure your microphone is properly connected and selected as the default input device in your system settings. Make sure you have granted microphone permission to the application and that access is enabled in your operating system's privacy settings.  Close any other applications that may be using the microphone (such as Zoom or Teams), and reconnect or switch the microphone if necessary. If the problem persists, restart the application or your device and try again.",
        children: (
          <div className="flex gap-2 items-center text-white">
            <FaCheck/>
            <p className="" >Mic checked.</p>
          </div>
        )
    }
  return (
        <PreExam props={props} />
  )
}

export default MicCheck