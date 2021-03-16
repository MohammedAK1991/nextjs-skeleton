import React, { useEffect } from "react"
import Navigation from "./Navigation"
import { useRouter } from 'next/router'
import { useTranslation } from "react-i18next"

/**
 * General Page Layout.
 */
function Layout({ children }: {children: React.ReactNode}) {

    // Change the i18n locale from the router language.
    const { i18n } = useTranslation()
    const { locale } = useRouter()
    useEffect(() => {
        i18n.changeLanguage(locale)
    },
    [])

    return (
    <div id="root">
        <Navigation id={""}/>
        {children}
    </div>
    )
}

export default Layout
