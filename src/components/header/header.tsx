import { FC } from 'react'
import './header.scss'
import headerLarge from './header-large.jpg'
import NameTitleContactCard from '../name-title-contact-card/name-title-contact-card'
import ThemeSwitch from '../theme-toggle/theme-toggle'


const Header: FC = () => (
<header className='relative w-100'>
    <figure>
      <img src={headerLarge} alt='My self ;-)' className='h-3/4 object-cover object-left-bottom' />
    </figure>
    <div className='absolute top-0 right-3 h-3/4'>
      <NameTitleContactCard />
    </div>
    <ThemeSwitch />
  </header>
)

export default Header
