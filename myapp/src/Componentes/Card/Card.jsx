'use client';
import { useState, useEffect} from 'react';
import styles from './Card.module.css';

export default function Card({btnIncrementar, btnDecrementar, btnResetar}) {

    const [contador, setContador] = useState(0);


    function incrementar() {
        setContador(contador + 1);
    }

    function decrementar() {
        if(contador <= 0) {
            setContador(0);
        }else if(contador >= 0) {
            setContador(contador - 1);
        }
        
    }

    
    function resetar() {
        setContador(0);
    }

    return(
        <div className={styles.card}>
            <h2>{contador}</h2>

            <div className={styles.buttons}>

                <button onClick={incrementar}>{btnIncrementar}</button>
                <button onClick={decrementar}>{btnDecrementar}</button>
                <button onClick={resetar}>{btnResetar}</button>
            </div>
        </div>
    
    );
}