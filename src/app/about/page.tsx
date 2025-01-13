'use client'

import { motion, useAnimation } from 'framer-motion'

import LogoIcon from '@/assets/icons/main/logo.svg'
import BottomIcon from '@/assets/icons/about/bottom.svg'
import FreeIcon from '@/assets/icons/about/free.svg'
import SpeedIcon from '@/assets/icons/about/speed.svg'
import CatalogIcon from '@/assets/icons/about/catalog.svg'
import SoundIcon from '@/assets/icons/about/sound.svg'

import NextIcon from '@/assets/icons/about/nextjs.svg'
import ReactIcon from '@/assets/icons/about/react.svg'
import TypescriptIcon from '@/assets/icons/about/typescript.svg'
import ReduxIcon from '@/assets/icons/about/redux.svg'
import MotionIcon from '@/assets/icons/about/motion.svg'
import SassIcon from '@/assets/icons/about/sass.svg'
import StorybookIcon from '@/assets/icons/about/storybook.svg'

import HomePage from '@/assets/images/about/Home page.png'
import GenresPage from '@/assets/images/about/Genres.png'
import ProfilePage from '@/assets/images/about/Profile page.png'
import ArtistsPage from '@/assets/images/about/Artists.png'
import LikedPage from '@/assets/images/about/Liked.png'

import styles from './About.module.scss'
import { useEffect } from 'react'
import clsx from 'clsx'
import Image from 'next/image'

const AboutPage = () => {
    const buttonAnimation = useAnimation()

    const images = [
        { src: HomePage, alt: 'service page example' },
        { src: GenresPage, alt: 'service page example' },
        { src: ProfilePage, alt: 'service page example' },
        { src: ArtistsPage, alt: 'service page example' },
        { src: LikedPage, alt: 'service page example' },
    ]

    const doubledImages = [...images, ...images]

    const imageList = doubledImages.map((image, index) => (
        <li className={styles.imageBlock} key={index}>
            <Image src={image.src} className={styles.image} alt={image.alt} />
        </li>
    ))

    useEffect(() => {
        buttonAnimation
            .start({
                opacity: 1,
                y: 0,
                rotate: 0,
                transition: { duration: 0.4, ease: 'easeInOut', delay: 2.7 },
            })
            .then(() => {
                // После завершения первой анимации
                buttonAnimation
                    .start({
                        scale: 1.2,
                        transition: { duration: 0.3 },
                    })
                    .then(() => {
                        // После завершения второй анимации
                        buttonAnimation.start({
                            scale: 1,
                            transition: { duration: 0.3 },
                        })
                    })
            })

        const imageList = document.querySelector(`.${styles.imagesList}`)
        if (imageList) {
            setInterval(() => {
                imageList.scrollLeft += 1
                if (imageList.scrollLeft >= 1950) {
                    imageList.scrollLeft = 0
                }
            }, 30)
        }

        const cursor = document.querySelector(`.${styles.cursor}`)
        if (cursor instanceof HTMLElement) {
            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.pageX + 'px'
                cursor.style.top = e.pageY + 'px'
            })
        }
    }, [buttonAnimation])

    return (
        <div className={styles.about}>
            <div className={styles.cursor}></div>
            <div className={styles.titleSection}>
                <motion.div
                    initial={{ x: '-1000px' }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    className={styles.logo}
                >
                    <LogoIcon />
                </motion.div>

                <div className={styles.titleText}>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, rotateX: 90 }}
                        animate={{ opacity: 1, rotateX: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: 'easeInOut',
                            delay: 0.7,
                        }}
                    >
                        X<span>Music</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, rotateX: 90 }}
                        animate={{ opacity: 1, rotateX: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: 'easeInOut',
                            delay: 1.4,
                        }}
                        className={styles.info}
                    >
                        New audiohosting service for listening music together
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, rotateX: 90 }}
                        animate={{ opacity: 1, rotateX: 0 }}
                        transition={{
                            duration: 0.7,
                            ease: 'easeInOut',
                            delay: 2,
                        }}
                        className={styles.joinInfo}
                    >
                        <p>You can try it now!</p>
                        <motion.button
                            style={{ scale: 1 }} // Установите начальный масштаб
                            animate={buttonAnimation}
                            initial={{ opacity: 0, y: 110, rotate: 15 }}
                        >
                            JOIN
                        </motion.button>
                    </motion.div>
                </div>
            </div>
            <div className={styles.featuresSection}>
                <motion.div
                    animate={{
                        y: ['0', '40px', '0'],
                        transition: {
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        },
                    }}
                    className={styles.bottomIcon}
                >
                    <BottomIcon />
                </motion.div>
                <div className={styles.featuresTextBlock}>
                    <motion.p
                        className={styles.featuresText}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                            hidden: { opacity: 0, x: '-100px' },
                        }}
                    >
                        With XMusic you can make <br /> <span>relax</span>,{' '}
                        <span>fun</span> and <span>chill</span>
                    </motion.p>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: '100px' },
                        }}
                        className={styles.featuresText}
                    >
                        You may go down to know what we can offer for you
                    </motion.p>
                </div>
                <div className={styles.featuresFrames}>
                    <div className={clsx(styles.frame, styles.pink)}>
                        <FreeIcon />
                        <p className={styles.frameTitle}>Free</p>
                        <p className={styles.frameInfo}>
                            Completely free to use and open-source music service
                        </p>
                    </div>
                    <div className={clsx(styles.frame, styles.theme)}>
                        <SoundIcon />
                        <p className={styles.frameTitle}>High-Quality Audio</p>
                        <p className={styles.frameInfo}>
                            XMusic provides lossless audio streaming for
                            superior sound quality
                        </p>
                    </div>

                    <div className={clsx(styles.frame, styles.blue)}>
                        <CatalogIcon />
                        <p className={styles.frameTitle}>Extensive Catalog</p>
                        <p className={styles.frameInfo}>
                            Service boasts an expansive library of music
                            spanning diverse genres and eras, constantly updated
                            with new releases.
                        </p>
                    </div>

                    <div className={clsx(styles.frame, styles.violet)}>
                        <SpeedIcon />
                        <p className={styles.frameTitle}>Speed</p>
                        <p className={styles.frameInfo}>
                            XMusic running on modern IT-technologies ensuring
                            fast application operation
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.technologiesSection}>
                <div className={styles.techText}>
                    <p className={styles.techTitle}>Our Technologies</p>
                    <p className={styles.techInfo}>
                        XMusic was created thanks to the following technologies
                    </p>
                </div>
                <div className={styles.technologies}>
                    <div className={styles.techBlock}>
                        <motion.div
                            className={styles.hoverBlock}
                            whileHover={{
                                scale: 0.75,
                                transition: { duration: 0.5 },
                            }}
                        >
                            <NextIcon />
                        </motion.div>
                        <motion.p className={styles.label}>Next.js</motion.p>
                    </div>
                    <div className={styles.rowContainer}>
                        <div className={styles.techBlock}>
                            <motion.div
                                className={styles.hoverBlock}
                                whileHover={{
                                    scale: 0.75,
                                    transition: { duration: 0.5 },
                                }}
                            >
                                <ReactIcon />
                            </motion.div>
                            <motion.p className={styles.label}>React</motion.p>
                        </div>
                        <div className={styles.techBlock}>
                            <motion.div
                                className={styles.hoverBlock}
                                whileHover={{
                                    scale: 0.75,
                                    transition: { duration: 0.5 },
                                }}
                            >
                                <TypescriptIcon />
                            </motion.div>
                            <motion.p className={styles.label}>
                                Typescript
                            </motion.p>
                        </div>
                        <div className={styles.techBlock}>
                            <motion.div
                                className={styles.hoverBlock}
                                whileHover={{
                                    scale: 0.75,
                                    transition: { duration: 0.5 },
                                }}
                            >
                                <ReduxIcon />
                            </motion.div>
                            <motion.p className={styles.label}>Redux</motion.p>
                        </div>
                        <div className={styles.techBlock}>
                            <motion.div
                                className={styles.hoverBlock}
                                whileHover={{
                                    scale: 0.75,
                                    transition: { duration: 0.5 },
                                }}
                            >
                                <MotionIcon />
                            </motion.div>
                            <motion.p className={styles.label}>Motion</motion.p>
                        </div>
                        <div className={styles.techBlock}>
                            <motion.div
                                className={styles.hoverBlock}
                                whileHover={{
                                    scale: 0.75,
                                    transition: { duration: 0.5 },
                                }}
                            >
                                <SassIcon />
                            </motion.div>
                            <motion.p className={styles.label}>Sass</motion.p>
                        </div>
                        <div className={styles.techBlock}>
                            <motion.div
                                className={styles.hoverBlock}
                                whileHover={{
                                    scale: 0.75,
                                    transition: { duration: 0.5 },
                                }}
                            >
                                <StorybookIcon />
                            </motion.div>
                            <motion.p className={styles.label}>
                                Storybook
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.imagesSection}>
                <div className={styles.imagesText}>
                    <p className={styles.imagesTitle}>What we have</p>
                    <p className={styles.info}>
                        The <span>music service</span> offers many interesting
                        pages to discover new content.
                    </p>
                    <p className={styles.info}>
                        Here are a couple of pages that may interest your
                        attention
                    </p>
                </div>
                <section className={styles.images}>
                    <ul className={styles.imagesList}>{imageList}</ul>
                </section>
            </div>
            <div className={styles.attention}>
                <p className={styles.attentionTitle}>Start listening with us</p>
                <button className={styles.attentionButton}>JOIN</button>
            </div>
        </div>
    )
}

export default AboutPage
