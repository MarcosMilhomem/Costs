import style from './Home.module.css'
import LinkButton from '../LinkButton'
import savings from '../../../src/img/savings.svg'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <section className={style.home_container}>
            <h1>
                Bem-vindo ao <span>Costs</span>
            </h1>
            <p>Comece a gerenciar os seus projetos agora mesmo</p>
            <LinkButton to="/newproject" text="Criar Projeto"/>
            <img src={savings} alt ="Costs" />
        </section>
    )
}
export default Home