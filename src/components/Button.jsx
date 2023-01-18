import React from 'react'
import styles from '../styles/Global'

const Button = ({assetUrl, link}) => {
  return (
    <div 
        className={`${styles.btnBlack}`}
        onClick={ ()=> window.open(link, "_blank")}
        >
        <img 
            src={assetUrl} 
            alt="Expo icon"
            className={styles.btnIcon}
            
        />
        <div className='flex flex-col ml-4 justify-start'>
            <p className={`${styles.btnText} font-normal text-xs`}> {` `}View it on</p>
            <p className={`${styles.btnText} font-bold text-sm`}>Expo store</p>
        </div>
       
    </div>
  )
}

export default Button
