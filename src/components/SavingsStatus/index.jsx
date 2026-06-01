import { IconSavings } from '../Icons'
import styles from './savingsstatus.module.css'

export const SavingsSatus = ({ percent }) => {

    return (
        <div className={styles.container}>
            <p>
                <IconSavings /> Economizar
            </p>
        </div>
    )
}