import { useTimer } from "react-timer-hook";


const Timer = ({ expiryTimestamp }) => {

  const {
      seconds,
      minutes,
      hours,
      days
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  return (
    <div className="text-white">
      <p className="text-xl">До начала неделя осталось:</p>
      <div className="flex gap-4">
        <div className="flex flex-col">
          <span className="text-3xl font-bold">{days}</span>
          <span className="text-md">Дней</span>
        </div>
        <p className="text-3xl font-bold">:</p>
        <div className="flex flex-col">
          <span className="text-3xl font-bold">{hours}</span>
          <span className="text-md">Часов</span>
        </div>
        <p className="text-3xl font-bold">:</p>
        <div className="flex flex-col">
          <span className="text-3xl font-bold">{minutes}</span>
          <span className="text-md">Минут</span>
        </div>
        <p className="text-3xl font-bold">:</p>
        <div className="flex flex-col">
          <span className="text-3xl font-bold">{seconds}</span>
          <span className="text-md">Секунд</span>
        </div>
      </div>
    </div>
  )
}

export default Timer