'use client'

import { ProfileTabs } from '@/widgets'

import { SettingsTab } from '@/app/profile/Tabs'
import { FriendsTab } from '@/app/profile/Tabs'
import { useSearchParams } from 'next/navigation'

export const Tabs = () => {
    const tab = useSearchParams().get('tab')
    const selectTab = (currentTab: string | null) => {
        switch (currentTab) {
            case 'friends':
                return <FriendsTab />
            case 'settings':
                return <SettingsTab />
        }
    }

    return (
        <div>
            <ProfileTabs />
            {selectTab(tab)}
        </div>
    )
}
