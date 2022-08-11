import { FC } from 'react';
import styles from './header.module.scss';
import headerLarge from './header-large.jpg';
import NameTitleContactCard from '../name-title-contact-card/name-title-contact-card';

const Header: FC = () => (
    <header className={styles.root}>
        <img src={headerLarge} alt="Tada - Myself" />
        <div>
            <NameTitleContactCard />
        </div>
        <ul>
            <li>Home</li>
            <li>About me</li>
            <li>Softskills</li>
            <li>Hardskills</li>
            <li>Stages</li>
        </ul>
    </header>
);

export default Header;
