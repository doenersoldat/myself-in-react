import { FC } from 'react';
import { HiMail, HiOutlineLink } from 'react-icons/hi';
import styles from './name-title-contact-card.module.scss';

const NameTitleContactCard: FC = () => (
    <div className={styles.root}>
        <h1>Sascha Grüßhaber</h1>
        <p>Senior Full-Stack Engineer</p>
        <p className={styles.contactRow}><HiMail /><a href="mailto:sascha@gruesshaber.eu">sascha@gruesshaber.eu</a></p>
        <p className={styles.contactRow}><HiOutlineLink /><a href="https://www.gruesshaber.eu" target="_blank" rel="noreferrer">https://gruesshaber.eu</a></p>
    </div>
);

export default NameTitleContactCard;
