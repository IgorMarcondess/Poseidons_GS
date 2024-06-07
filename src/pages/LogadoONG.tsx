'use client'
import React, { useState } from "react";
import Link from "next/link";

const LogadoONG = () => {
    const [message, setMessage] = useState('');

    const handleClick = () => {
        setMessage('Você será redirecionado! Aguarde alguns minutos');
    };

    return (
        <>
            <section className="secao-questionario">
                <h1 className="titulo-questionario">Olá, ONG!</h1>
                <div className="organizacao-questionario-tablets">
                    <div className="alinhamento-questionario">
                        <div className="edicao-texto-questionario">
                            <div className="edicao-explicacao">
                                <h2 className="texto-questionario">
                                    Estamos extremamente felizes por ter você conosco nesta jornada dedicada à proteção 
                                    dos nossos preciosos oceanos. Aqui, cada novo integrante 
                                    é como uma gota que se une a um vasto oceano de esforços, criando ondas de mudança e esperança para o futuro do nosso planeta.
                                </h2>
                            </div>
                            <div className="organizacao-colaborador">
                                <div className="edicao-botao-questionario">
                                        <button className="botao-questionario" onClick={handleClick}><b>Colaboradores</b></button>
                                </div>
                                <div className="edicao-botao-questionario">
                                        <button className="botao-questionario" onClick={handleClick}><b>Criar Newsletter</b></button>
                                </div>
                            </div>
                            {message && <p>-- Você será redirecionado! Aguarde alguns minutos. --</p>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LogadoONG;
