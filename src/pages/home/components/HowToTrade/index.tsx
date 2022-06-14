import StepsToTrade from './StepsToTrade'
import style  from './style.module.css'

const HowToTrade = () => {
  return (
    <div className={style.trade}>
      <h1>How to Trade with Krypto</h1>
      <p>Dolorum sunt reiciendis cumque in animi saepe tenetur mollitia.</p>
      <article>
        <figure>
          <img src="https://images.unsplash.com/photo-1627253781598-63b98c51da42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
        </figure>
        <StepsToTrade />
      </article>
    </div>
  )
}

export default HowToTrade