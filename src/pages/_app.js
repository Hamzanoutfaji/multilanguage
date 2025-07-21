import { appWithTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Set document direction based on locale
    if (router.locale === 'ar') {
      document.documentElement.dir = 'rtl'
      document.documentElement.lang = 'ar'
    } else {
      document.documentElement.dir = 'ltr'
      document.documentElement.lang = 'en'
    }
  }, [router.locale])

  return (
    <div style={{
      direction: router.locale === 'ar' ? 'rtl' : 'ltr',
      fontFamily: router.locale === 'ar' ? 'Arial, sans-serif' : 'system-ui, sans-serif'
    }}>
      <Component {...pageProps} />
    </div>
  )
}

export default appWithTranslation(MyApp)