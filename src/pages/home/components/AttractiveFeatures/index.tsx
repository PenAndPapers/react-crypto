import Features from './Features'
import './AttractiveFeatures.scope.css'
import { AttractiveFeatures as FeatureModel } from '../../../../models/AttractiveFeatures'

const AttractiveFeatures = () => {
  const data: FeatureModel[] = [
    {
      id: 1,
      icon: 'fa-trophy',
      title: 'Weekly trading contest',
      description: 'Aspernatur voluptatibus sed, facilis nulla neque hic atque iusto temporibus nihil quod nesciunt, quis eum obcaecati ad quisquam at ut. Quod, eius!'
    },
    {
      id: 2,
      icon: 'fa-wallet',
      title: 'Less Commission On Trade',
      description: 'Aspernatur voluptatibus sed, facilis nulla neque hic atque iusto temporibus nihil quod nesciunt, quis eum obcaecati ad quisquam at ut. Quod, eius!'
    },
    {
      id: 3,
      icon: 'fa-lock',
      title: 'Safe And Secure Trading platform',
      description: 'Aspernatur voluptatibus sed, facilis nulla neque hic atque iusto temporibus nihil quod nesciunt, quis eum obcaecati ad quisquam at ut. Quod, eius!'
    },
    {
      id: 4,
      icon: 'fa-dollar-sign',
      title: 'Instant Withdraw Process',
      description: 'Aspernatur voluptatibus sed, facilis nulla neque hic atque iusto temporibus nihil quod nesciunt, quis eum obcaecati ad quisquam at ut. Quod, eius!'
    },
    {
      id: 5,
      icon: 'fa-gift',
      title: 'Monthly Commition',
      description: 'Aspernatur voluptatibus sed, facilis nulla neque hic atque iusto temporibus nihil quod nesciunt, quis eum obcaecati ad quisquam at ut. Quod, eius!'
    },
    {
      id: 6,
      icon: 'fa-headphones-simple',
      title: '24/7 Support Team',
      description: 'Aspernatur voluptatibus sed, facilis nulla neque hic atque iusto temporibus nihil quod nesciunt, quis eum obcaecati ad quisquam at ut. Quod, eius!'
    }
  ]
  return (
    <div className='attractive-features'>
      <h1>Attractive Features</h1>
      <p>Maiores cum, voluptate quidem dolores quae enim mollitia eum nisi quas quaerat illo non.</p>
      <Features featuresData={data} />
    </div>
  )
}

export default AttractiveFeatures