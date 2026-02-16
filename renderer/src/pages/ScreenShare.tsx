import { useEffect, useRef, useState, type ReactNode } from "react";
import PreExam from "../layout/PreExam";
interface PropsType{
        photoTaken:boolean
        loadingText:string
        troubleshootingText:string
        nextLink:string
        currentStage:number
        children: ReactNode
    }
const ScreenShare = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [sharing, setSharing] = useState(false);
useEffect(() => {
  if (sharing && stream && videoRef.current) {
    videoRef.current.srcObject = stream;
    videoRef.current.onloadedmetadata = () => {
      videoRef.current?.play().catch(() => {});
    };
  }
}, [sharing, stream]);
const startScreenShare = async () => {
  const sources = await window.proctor.getScreenSources();
  const selectedSource = sources[0];
const constraints = {
  audio: false,
  video: {
    mandatory: {
      chromeMediaSource: "desktop",
      chromeMediaSourceId: selectedSource.id,
    },
  },
} as any;

const stream = await navigator.mediaDevices.getUserMedia(constraints);

 
  setSharing(true)
  setStream(stream);
};


 
   const props:PropsType={
          currentStage:6,
          loadingText:" please wait",
          nextLink:"/",
          photoTaken:sharing,
          troubleshootingText:"If screen sharing does not start or the preview appears blank, please ensure you grant screen recording permission when prompted by your system. Close any other applications that may be using screen recording or screen capture, then try again. On Windows, verify that screen recording permissions are enabled in Settings → Privacy & Security → Screen Recording. On macOS, confirm that this application is allowed under System Settings → Privacy & Security → Screen Recording. If the issue persists, restart the application or reboot your computer before attempting to begin the exam again.",
          children: (
            <div className="flex flex-col items-center gap-4 p-6">
            <h2 className="text-xl font-semibold">Screen Sharing Check</h2>

            {sharing ? (
                <>
                <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-150 border rounded"
                />
                </>
            ) : (
                <button
                disabled={sharing}
                onClick={startScreenShare}
                className="bg-blue-600 cursor-pointer text-white px-6 py-2 rounded"
                >
                Start Screen Sharing
                </button>
            )}
            </div>
          )
      }
  return (
        <PreExam props={props}/>
  );
};

export default ScreenShare;
