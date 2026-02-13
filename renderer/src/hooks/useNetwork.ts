import { useEffect, useState } from "react";

export function useNetwork(pollInterval = 5000) {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    const check = async () => {
      const status = await window.proctor.checkNetwork();
      setOnline(status);
    };

    check();

    interval = setInterval(check, pollInterval);

    return () => clearInterval(interval);
  }, [pollInterval]);

  return online;
}
