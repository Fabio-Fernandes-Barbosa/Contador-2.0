'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Card from '@/Componentes/Card/Card';
import { useState } from "react";

export default function Home() {

  const [contador, setContador] = useState(0);
  const [tema, setTema] = useState(false);

  function alteraTema() {
    setTema(!tema);
  }

  return (

    <main className={tema? styles.dark : styles.light}>

      <button onClick={alteraTema}>
        Mudar Tema
      </button>

      <div>
        <Card 
          btnIncrementar={'+'}
          btnDecrementar={'-'}
          btnResetar={'Resetar'}
        />
      </div>
    </main>
  );
}
