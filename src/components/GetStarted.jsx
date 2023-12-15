import styles from "../style"
import arrowUp from '../assets/arrow-up.svg'

export const GetStarted = () => {
    return (
        <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
            <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
                <div className={`${styles.flexStart} flex-row`}>
                    <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
                        <span className="text-gradient">Start</span>
                    </p>
                    <img src={arrowUp} className="w-[23px] h-[23px] object-contain" alt="arrow"></img>
                </div>
                <p className="font-poppins font-medium text-[18px] leading-[23px]">
                    <span className="text-gradient">Browsing</span>
                </p>
            </div>
        </div>
    )
}