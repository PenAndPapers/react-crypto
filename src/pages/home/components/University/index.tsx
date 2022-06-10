import './University.scoped.css'
import { News } from '../../../../models/News'
import NewsList from './NewsList'

const University = () => {
  const data: News[] = [
    {
      id: 1,
      title: 'Consequat amet irure ad officia',
      description: 'Amet ut in ullamco in duis labore ut commodo id ullamco qui dolor voluptate. Sit labore nisi amet tempor sit ullamco magna deserunt. Mollit laboris dolore dolore officia dolore id fugiat cillum commodo laborum nulla nulla irure. Aliqua nostrud dolore velit laboris sit non magna proident.',
      img: 'https://images.unsplash.com/photo-1518186233392-c232efbf2373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      title: 'Magna aliqua id reprehenderit tempor',
      description: 'Laborum ut est nulla ad adipisicing. Mollit ut ad esse ipsum dolore magna pariatur est ad id. Pariatur esse voluptate irure et reprehenderit sunt proident elit commodo aliquip cillum elit laborum. Commodo id quis sint pariatur nisi sint.',
      img: 'https://images.unsplash.com/photo-1625236239092-8d15fbff5420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      title: 'Nisi dolore laborum dolor cillum elit.',
      description: 'In eu reprehenderit nulla ad minim et occaecat aliquip ea id ex in labore. Et esse voluptate commodo laboris commodo in cillum ex esse. Ipsum mollit ex ullamco do consectetur proident.',
      img: 'https://images.unsplash.com/photo-1613919517761-0d9e719d3244?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 4,
      title: 'Eiusmod enim non minim sint nisi mollit consequat duis velit',
      description: 'Fugiat Lorem sint commodo culpa amet ea reprehenderit et do laborum non. Ipsum anim cillum consequat culpa aliqua duis labore mollit incididunt elit. Pariatur irure anim ex fugiat aute nulla ex proident ad velit commodo veniam. Nisi incididunt laborum quis eu consectetur exercitation nulla incididunt.',
      img: 'https://images.unsplash.com/photo-1641931188713-94e10b2ed4a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
    }
  ]

  return (
    <div className='university'>
      <h1>Crypto Market Analysis</h1>
      <p>Sed ad corporis tempora obcaecati dolorem unde nesciunt libero.</p>
      <NewsList newsData={data} />
      <button>Enroll crypto university</button>
    </div>
  )
}

export default University