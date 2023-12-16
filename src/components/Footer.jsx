import { Link } from 'react-router-dom'
import add from '../assets/add.svg'
import styles from '../style'
import linkedIn from '../assets/linkedin.svg'

export const Footer = () => {
    return (
        <footer className={`${styles.flexCenter} py-1 sticky bottom-0 flex-col bg-[#181818] p-0 m-0 pb-2 pt-2 h-20 border-t-[#3f3e45] shadow-[0_0_1000px_50px_rgba(64,64,64,1)] rounded-t-lg`}>
            <div className={`${styles.flexCenter} mb-8 w-full z-10 top-[0px] absolute`}>
                <Link to='/post' className={`flex justify-center items-center rounded-full h-[50px] w-[50px]`}>
                    <img src={add}></img>
                </Link>
            </div>
            <div className={`h-[100px] w-[100px] rounded-full top-[-25px] absolute bg-[#181818] z-0 border-[1px] border-[#242424]`}></div>
        </footer>
    )
}