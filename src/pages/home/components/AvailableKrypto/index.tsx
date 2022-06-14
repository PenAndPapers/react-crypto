import KryptoSlider from './KryptoSlider'
import style from './style.module.css'
import { AvailableKrypto } from '../../../../models/AvailableKrypto'

const AvailableKyrpto = () => {
  const data: AvailableKrypto[] = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1631897642056-97a7abff6818?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      title: 'Bitcoin',
      description: 'Excepturi esse ex vitae, illo consectetur sequi delectus sed, incidunt voluptatum recusandae, temporibus molestias soluta omnis harum amet laudantium quo eos minus!',
      price: '43.7k'
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1621416911835-f06b90d3eb8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      title: 'Litecoin',
      description: 'Tempore modi beatae reiciendis non quis molestias quam, dolores ducimus delectus reprehenderit placeat obcaecati eligendi et magnam ullam quisquam voluptas sit soluta.',
      price: '158'
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1623053590518-32beebe56321?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
      title: 'Etherium',
      description: 'Quod incidunt dolor labore corrupti! Autem ipsa laborum fuga, quas deserunt similique doloribus? Commodi, modi corrupti? Inventore deserunt hic harum enim officia.',
      price: '3k'
    }
  ]

  return (
    <div className={style.availableKrypto}>
      <h1>Available Krypto</h1>
      <p>Fugit, accusamus libero repellat blanditiis voluptatibus accusantium dignissimos</p>
      <KryptoSlider sliderData={data} />
    </div>
  )
}

export default AvailableKyrpto