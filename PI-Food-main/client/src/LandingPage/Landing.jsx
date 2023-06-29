import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import style from '../LandingPage/Landing.module.css'

const LandingPage = () => {
    return(
        <div className={style.container}>
            <div className={style.container2}>
                <h2>Bienvenidos a mi app de Food</h2>
                <NavLink to='/home'>
                <button>Ingresar</button>
                </NavLink>
            </div>
        </div>
    )
}

export default LandingPage;