import { useNetwork } from "../hooks/useNetwork";
import PreExam from "../layout/PreExam";
import { FaCheck } from "react-icons/fa";

const InternetConnectivity = () => {
  const online = useNetwork()
  return (
    <PreExam currentStage={1} loadingText="checking the Internet connectivity please wait" nextLink="/mic" loading={!online} troubleshootingText="If you are experiencing internet connectivity issues, please ensure your Wi-Fi or mobile data is turned on and working properly. Try opening another website to confirm your connection, restart your router and reconnect, move closer to the router for a stronger signal, and close any applications that may be using the internet. If the problem persists, restart the application or your device and try again."
     >
      <div className="flex gap-2 items-center text-white">
        <FaCheck/>
      <p className="" >checked the Internet connectivity.</p>
      </div>
    </PreExam>
  )
}

export default InternetConnectivity