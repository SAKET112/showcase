// import React from 'react';
import styles from '../styles/Global';
import assets from '../assets';
import Button from './Button';

const SectionWrapper = ({title, description, showBtn, mockupImg, banner, reverse}) => {
  return (
    <>
      <div className={`min-h-screen ${styles.section} ${reverse ? styles.bgWhite : styles.bgPrimary} ${banner}`}>
        <div className={`flex items-center ${reverse ? styles.boxReverseClass : styles.boxClass} w-11/12 sm:w-full md:w3/4`}>
            <div className={`${styles.descDiv} ${reverse ? "fadeRightMini" : "fadeLeftMini"} ${reverse ? styles.textRight : styles.textLeft} `}>
                <h1 className={` ${reverse ? styles.blackText : styles.whiteText} ${styles.h1Text}`}>{title}</h1>
                <p className={` ${reverse ? styles.blackText : styles.whiteText} ${styles.descriptionText}`}>{description}</p>
                {
                  showBtn && (
                    <Button 
                        assetUrl = {assets.expo}
                        link="exp://u.expo.dev/update/b3005a70-1eb9-4183-82dd-2ad75a2b0483"
                    />
                  )
                }
            </div>
            <div className={`flex-1 ${styles.flexCenter} p-8 sm: px-0`}>
                <img src={mockupImg} alt="mockup" className={`styles.sectionImg ${reverse ? "fadeLeftMini" : "fadeRightMini"} `} />
            </div>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper