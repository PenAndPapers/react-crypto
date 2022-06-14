import style  from './style.module.css'

const StepsToTrade = () => {
  return (
    <div className={style.stepsToTrade}>
      <div>
        <h3>Steps to trade</h3>
        <button>
          <span>01</span>
          <span>Create an account</span>
        </button>
        <button>
          <span>02</span>
          <span>Download platform</span>
        </button>
        <button>
          <span>03</span>
          <span>Select crypto</span>
        </button>
        <button>
          <span>04</span>
          <span>Start trading</span>
        </button>
      </div>
    </div>
  )
}

export default StepsToTrade