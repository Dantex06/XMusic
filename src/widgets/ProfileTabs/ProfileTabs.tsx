'use client'

import { useRouter, useSearchParams } from 'next/navigation'

import { Button } from '@/components'

import { staticLinks } from '@/assets/routingLinks'

import { TColorButton } from '@/components/Button/types'

import styles from './ProfileTabs.module.scss'

export const ProfileTabs = () => {
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams)
    const router = useRouter()
    return (
        <div className={styles.tabs}>
            <Button
                onClick={() => {
                    params.set('tab', 'friends')
                    router.push(`${staticLinks.profile}?${params}`)
                }}
                color={
                    searchParams.get('tab') === 'friends'
                        ? TColorButton.theme
                        : undefined
                }
            >
                Friends
            </Button>
            <Button
                onClick={() => {
                    params.set('tab', 'settings')
                    router.push(`${staticLinks.profile}?${params}`)
                }}
                color={
                    searchParams.get('tab') === 'settings'
                        ? TColorButton.theme
                        : undefined
                }
            >
                Settings
            </Button>
        </div>
    )
}
