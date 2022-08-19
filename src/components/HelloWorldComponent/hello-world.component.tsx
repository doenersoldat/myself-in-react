import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'

const HelloWorldComponent: FunctionComponent = () => {
	const { t } = useTranslation('hello-world.component')
	return <h1>{t('HelloWorld')}</h1>
}

export default HelloWorldComponent
