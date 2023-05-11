import { useEffect, useState } from "react";

export default function CountdownTimer({ targetTime }) {
  const [duration, setDuration] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => {
      updateDate();
    }, 1000);
  }, []);

  function updateDate() {
    const now = new Date().getTime();
    const timeleft = targetTime - now;

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    setDuration({
      days,
      hours,
      minutes,
      seconds,
    });
  }

  return (
    <div className="flex justify-around px-10 mb-4 text-brand-biru">
      <div className="flex flex-col text-center">
        <p className="text-2xl font-semibold">{`${duration.days}`}</p>
        <p>Hari</p>
      </div>

      <div className="flex flex-col text-center">
        <p className="text-2xl font-semibold">{`${duration.hours}`}</p>
        <p>Jam</p>
      </div>

      <div className="flex flex-col text-center">
        <p className="text-2xl font-semibold">{`${duration.minutes}`}</p>
        <p>Menit</p>
      </div>

      <div className="flex flex-col text-center text-grey-900">
        <p className="text-2xl font-medium">{`${duration.seconds}`}</p>
        <p>Detik</p>
      </div>
    </div>
  );
}
