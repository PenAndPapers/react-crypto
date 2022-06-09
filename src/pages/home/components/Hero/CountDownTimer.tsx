import { useEffect, useState } from 'react'

const CountDownTimer = () => {
  const countDownDate = new Date('December 31, 2030').getTime()
  const [days, setDays] = useState('00')
  const [hours, setHours] = useState('00')
  const [mins, setMinutes] = useState('00')
  const [seconds, setSeconds] = useState('00')
  const [timer, setTimer] = useState(0)

  const handleTimerValue = (payload: number) => {
    return String(payload).padStart(2, '0')
  }

  const handleSetCountDown = () => {
    clearInterval(timer)
    
    if (countDownDate - new Date().getTime() > 0) {
      const time = setInterval(() => {
        const now = new Date().getTime()
        const distance = countDownDate - now;
  
        const days = handleTimerValue(Math.floor(distance / (1000 * 60 * 60 * 24)))
        const hours = handleTimerValue(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        const mins = handleTimerValue(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
        const seconds = handleTimerValue(Math.floor((distance % (1000 * 60)) / 1000))
  
        setDays(days)
        setHours(hours)
        setMinutes(mins)
        setSeconds(seconds)
      }, 1000)
  
      setTimer(time)
    }
  }

  useEffect(() => {
    handleSetCountDown()
  }, [])

  return (
    <div className='count-down-timer'>
      <h4>Crypto Market Starts in</h4>
      <div className="timer">
        <div className="item">
          <h3>{ days }</h3>
          <p>Days</p>
        </div>
        <div className="item">
          <h3>{ hours }</h3>
          <p>Hours</p>
        </div>
        <div className="item">
          <h3>{ mins }</h3>
          <p>Minutes</p>
        </div>
        <div className="item">
          <h3>{ seconds }</h3>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  )
}

export default CountDownTimer