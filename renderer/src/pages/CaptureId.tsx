import { useEffect, useState } from "react";
import PreExam from "../layout/PreExam";
import useCameraCapture from "../hooks/useCameraCapture";
import Button from "../components/Button";

interface PropsType {
  loading: boolean;
  loadingText: string;
  troubleshootingText: string;
  nextLink: string;
  currentStage: number;
  children: React.ReactNode;
  photoTaken?:boolean
}

const CaptureId = () => {
  const { videoRef,canvasRef,cameraReady,capturePhoto: capture,stopCamera,photo,setPhoto,devices,selectedDeviceId,setSelectedDeviceId,setVideoKey,videoKey } = useCameraCapture();

  const [photoTaken, setPhotoTaken] = useState<boolean>(false);

  useEffect(() => {
    const realCamera = devices.find(
      (d) => !d.label.toLowerCase().includes("virtual")
    );
    if (realCamera) setSelectedDeviceId(realCamera.deviceId);
  }, [devices, setSelectedDeviceId]);


  const handleCapture = async () => {
    await capture();
    // console.log("le BE milak:", blob);
    setPhotoTaken(true);
  };

  const handleRetake = () => {
    setPhoto(null);
   setVideoKey((prev)=> prev+1)
   setPhotoTaken(false)
  };
  const props: PropsType = {
    currentStage: 5,
    loadingText: "Checking the camera please wait",
    nextLink: "/shareScreen",
    loading:!cameraReady,
    photoTaken:photoTaken,
    troubleshootingText:
      "If you are experiencing camera issues, please ensure the devices are properly connected and selected as default in your system settings. Close other apps that may be using them. Restart the application or device if the problem persists.",
    children: (
      <div className="flex flex-col items-center gap-4 p-6">
        {devices.length > 1 && (
          <div className="flex gap-2 items-center justify-center">
            <label className="text-sm min-w-max">Select Camera</label>
            <select
              value={selectedDeviceId}
              onChange={(e) => setSelectedDeviceId(e.target.value)}
              className="border p-1 rounded bg-transparent w-[50%]"
            >
              {devices
                .filter((d) => !d.label.toLowerCase().includes("virtual"))
                .map((device) => (
                  <option key={device.deviceId} value={device.deviceId}>
                    {device.label}
                  </option>
                ))}
            </select>
          </div>
        )}
        {photo ? (
          <div className="flex flex-col items-center gap-2">
            <img
              src={photo}
              alt="Captured"
              className="w-96 rounded-lg border"
            />
          </div>
        ) : (
          <video
            ref={videoRef}
            key={videoKey}
            autoPlay
            playsInline
            className="w-96 rounded-lg border bg-black"
          />
        )}

        
  <Button onClick={photo ? handleRetake : handleCapture} className="bg-[#1F7FCC]" text={`${photo ? "Retake Photo" : "Take Photo"}`} />

        <canvas ref={canvasRef} className="hidden" />
      </div>
    ),
  };

  return <PreExam stopCamera={stopCamera} props={props} />;
};

export default CaptureId;
