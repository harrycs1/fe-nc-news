import { Link } from 'react-router-dom'
import add from '../assets/add.svg'

export const Footer = () => {
    return (
        <footer>
            <Link to='/post'>
                <img src={add}></img>
                <p>Create</p>
            </Link>
        </footer>
    )
}