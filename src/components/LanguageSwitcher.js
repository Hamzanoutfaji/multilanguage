import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const LanguageSwitcher = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  const switchLanguage = () => {
    const newLocale = router.locale === 'en' ? 'ar' : 'en'
    router.push(router.pathname, router.asPath, { locale: newLocale })
  }

  return (
    <div style={{ marginBottom: '20px' }}>
      <button 
        onClick={switchLanguage}
        style={{
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          fontFamily: router.locale === 'ar' ? 'Arial, sans-serif' : 'inherit'
        }}
      >
        {t('switchLanguage')}
      </button>
      <p style={{ 
        marginTop: '10px',
        fontFamily: router.locale === 'ar' ? 'Arial, sans-serif' : 'inherit'
      }}>
        {t('currentLanguage')}
      </p>
    </div>
  )
}

export default LanguageSwitcher