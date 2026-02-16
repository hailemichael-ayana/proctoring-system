import { useEffect, useRef, useState } from "react";
interface CameraDevice {
  deviceId: string;
  label: string;
}

export default function useCameraCapture() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [devices, setDevices] = useState<CameraDevice[]>([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [videoKey, setVideoKey] = useState(0); 

    useEffect(() => {
    const getDevices = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ video: true });

        const allDevices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = allDevices
          .filter((device) => device.kind === "videoinput")
          .map((device) => ({
            deviceId: device.deviceId,
            label: device.label || "Camera",
          }));

        setDevices(videoDevices);

        if (videoDevices.length > 0) {
          setSelectedDeviceId(videoDevices[0].deviceId);
        }
      } catch (err) {
        setError("Unable to access camera. Please allow permission.");
        console.error(err);
      }
    };

    getDevices();
  }, []);
  useEffect(() => {
    if (!selectedDeviceId) return;

    const startCamera = async () => {
      try {
        // Stop previous stream
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
        }

        const newStream = await navigator.mediaDevices.getUserMedia({
          video: {
            deviceId: { exact: selectedDeviceId },
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
        });

        setStream(newStream);
        setCameraReady(true)

        if (videoRef.current) {
          videoRef.current.srcObject = newStream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current?.play().catch(() => {});
          };
        }
      } catch (err) {
        setError("Selected camera is not working.");
        console.error(err);
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [selectedDeviceId,videoKey]);

  const mediaStreamCleanup = () => {
    stream?.getTracks().forEach((track) => track.stop());
  };
const capturePhoto = () => {
  if (!videoRef.current || !canvasRef.current) return;

  const video = videoRef.current;
  const canvas = canvasRef.current;

  const width = video.videoWidth;
  const height = video.videoHeight;

  if (width === 0 || height === 0) return;

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.drawImage(video, 0, 0, width, height);

  const imageData = canvas.toDataURL("image/png");
  setPhoto(imageData);
 video.play().catch(() => {});
};


  return {
    videoRef,
    canvasRef,
    cameraReady,
    capturePhoto,
    stopCamera: mediaStreamCleanup,
    photo,
    devices,
    error,
    selectedDeviceId,
    setSelectedDeviceId,
    setPhoto,
    videoKey,
    setVideoKey
  };
}
