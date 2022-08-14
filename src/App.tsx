import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'

const App: FunctionComponent = () => {
	const { t } = useTranslation('general')
	return <h1>{t('HelloWorld')}</h1>
}

export default App
