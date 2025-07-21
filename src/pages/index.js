import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import LanguageSwitcher from '../components/LanguageSwitcher'

export default function Home() {
  const { t } = useTranslation('common')
  const router = useRouter()

  return (
    <div style={{
      padding: '0',
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white'
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: '40px',
        borderRadius: '15px',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
        maxWidth: '600px'
      }}>
        <h1 style={{ 
          fontSize: '3rem', 
          marginBottom: '20px',
          fontFamily: router.locale === 'ar' ? 'Arial, sans-serif' : 'system-ui, sans-serif'
        }}>
          {t('hello')}
        </h1>
        
        <h2 style={{ 
          fontSize: '1.5rem', 
          marginBottom: '20px', 
          fontWeight: 'normal',
          fontFamily: router.locale === 'ar' ? 'Arial, sans-serif' : 'system-ui, sans-serif'
        }}>
          {t('welcome')}
        </h2>
        
        <p style={{ 
          fontSize: '1.1rem', 
          marginBottom: '30px',
          lineHeight: '1.6',
          fontFamily: router.locale === 'ar' ? 'Arial, sans-serif' : 'system-ui, sans-serif'
        }}>
          {t('description')}
        </p>
        
        <LanguageSwitcher />
        
        <div style={{ marginTop: '30px', fontSize: '0.9rem', opacity: '0.8' }}>
          <p>Powered by Next.js & next-i18next</p>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}