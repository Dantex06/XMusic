'use client'

import { usePathname } from 'next/navigation'

import { routeConfig } from '@/widgets/Header/components'

import ArrowIcon from '@/assets/icons/main/arrow.svg'

import styles from './Route.module.scss'

import clsx from 'clsx'
import Link from 'next/link'

export const Route = () => {
    const pathname = usePathname()
    const [firstPage, secondPage] = routeConfig(pathname)

    return (
        <div className={styles.routeLinks}>
            <Link
                href={firstPage.link}
                className={clsx(styles.link, {
                    [styles.unActiveLink]: secondPage,
                })}
            >
                {firstPage.title}
            </Link>
            {secondPage && (
                <>
                    <div className={styles.arrow}>
                        <ArrowIcon />
                    </div>
                    <Link className={styles.link} href={secondPage.link}>
                        {secondPage.title}
                    </Link>
                </>
            )}
        </div>
    )
}
