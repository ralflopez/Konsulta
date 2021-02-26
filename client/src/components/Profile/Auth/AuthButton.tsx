import React from 'react';
import styles from './styles.module.css';

interface IAuthButton {
    name: string,
    logo: string,
    color: string,
    props?: any,
    onClick?: any
}

function AuthButton(props: IAuthButton) {
    return (
        <div className={styles.button} onClick={props.onClick} style={{backgroundColor: props.color}}>
            <img src={props.logo} alt={props.name} className={styles.icon}/>
            <p className={styles.title}>Sign in with {props.name}</p>
        </div>
    );
}

export default AuthButton;