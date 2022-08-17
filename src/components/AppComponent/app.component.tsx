import { FunctionComponent } from 'react'
import HelloWorldComponent from '@components/HelloWorldComponent'
import { useTranslation } from 'react-i18next'

const AppComponent: FunctionComponent = () => {
	const { t } = useTranslation('AppComponent')

	return (
		<>
			<header className="bg-amber-100 p-5">
				<h1 className="text-2xl md:text-1xl">{t('Header')}</h1>
			</header>

			<div className="bg-white w-full flex flex-col md:flex-row">
				<aside className="bg-green-300 md:w-1/3 lg:w-1/4 px-5 py-40">
					<h1 className="text-2xl md:text-1xl">{t('Sidebar')}</h1>
				</aside>
				<main className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-40">
					<h1 className="text-2xl md:text-1xl">{t('MainContent')}</h1>
					<HelloWorldComponent></HelloWorldComponent>
				</main>
			</div>

			<footer className="bg-slate-800 mt-auto p-5">
				<h1 className="text-2xl md:text-1xl text-white">{t('Footer')}</h1>
			</footer>
		</>
	)
}

export default AppComponent
