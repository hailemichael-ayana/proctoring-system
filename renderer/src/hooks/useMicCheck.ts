import { useState, useEffect } from "react";

export default function useMicCheck() {
  const [micAvailable, setMicAvailable] = useState<boolean>(false);

  useEffect(() => {
    const checkMic = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        setMicAvailable(true);
        stream.getTracks().forEach(track => track.stop());
      } catch (err) {
        setMicAvailable(false);
      }
    };

    checkMic();
  }, []);

  return micAvailable;
}
