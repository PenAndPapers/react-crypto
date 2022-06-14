import PortfolioSlider from "./PortfolioSlider"
import { PortfolioModel } from "@/models/Portfolio"
import style from './style.module.css'

const Portfolio = () => {
  const data: PortfolioModel[] = [
    {
      id: 1,
      testimony: 'Unde molestiae blanditiis consequatur repellat impedit? Porro officiis ratione.',
      img: 'https://randomuser.me/api/portraits/men/86.jpg',
      name: 'Alan Andrews',
      role: 'Digital Marketing'
    },
    {
      id: 2,
      testimony: 'Quis eu tempor dolore est non cupidatat sit magna do sit quis ipsum cillum cupidatat.',
      img: 'https://randomuser.me/api/portraits/women/87.jpg',
      name: 'Gladdys Wright',
      role: 'Software Developer'
    },
    {
      id: 3,
      testimony: 'Voluptate dolore commodo Lorem amet voluptate anim officia esse.',
      img: 'https://randomuser.me/api/portraits/men/22.jpg',
      name: 'Jake Andrews',
      role: 'Technical Recruiter'
    }
  ]

  return (
    <div className={style.portfolio}>
      <h1>30 Million Users Worldwide</h1>
      <p>Ratione velit harum nisi illo veniam ullam nostrum exercitationem!</p>
      <PortfolioSlider sliderData={data} />
    </div>
  )
}

export default Portfolio