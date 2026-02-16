import type { ReactNode } from "react"
import { FaCheck } from "react-icons/fa"
import PreExam from "../layout/PreExam"
import useCameraCapture from "../hooks/useCameraCapture"
interface PropsType{
        loading:boolean
        loadingText:string
        troubleshootingText:string
        nextLink:string
        currentStage:number
        children: ReactNode
    }
const CameraCheck = () => {
  const {cameraReady}= useCameraCapture()
   const props:PropsType={
          currentStage:3,
          loadingText:"checking the Internet connectivity please wait",
          nextLink:"/capturePhoto",
          loading:!cameraReady,
          troubleshootingText:"If you are experiencing camera issues, please ensure the devices are properly connected and selected as default in your system settings. Close other apps that may be using them. Restart the application or device if the problem persists.",
          children: (
            <div className="flex gap-2 items-center text-white">
              <FaCheck/>
              <p className="" > Camera Found.</p>
            </div>
          )
      }
  return (
    <PreExam props={props}/>
  )
}
export default CameraCheck