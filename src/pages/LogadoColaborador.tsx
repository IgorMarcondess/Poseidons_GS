'use client'
import React, { useState } from "react";
import Link from "next/link";

const LogadoCOLABORADORES = () => {
    const [message, setMessage] = useState('');

    const handleClick = () => {
        setMessage('Você será redirecionado! Aguarde alguns minutos');
    };

    return (
        <>
            <section className="secao-questionario">
                <h1 className="titulo-questionario">Olá, colaborador!</h1>
                <div className="organizacao-questionario-tablets">
                    <div className="alinhamento-questionario">
                        <div className="edicao-texto-questionario">
                            <div className="edicao-explicacao">
                                <h2 className="texto-questionario">
                                    Nossa missão é inspirada na vida marinha, onde a colaboração, diversidade e resiliência 
                                    são fundamentais para o equilíbrio e sucesso. Assim como os corais que formam recifes vibrantes e cheios de vida, 
                                    queremos construir, com sua ajuda, um ambiente de trabalho inclusivo e colaborativo, onde cada talento possa brilhar.
                                </h2>
                            </div>
                            <div className="organizacao-colaborador">
                                <div className="edicao-botao-questionario">
                                    <Link href={"/TrailFinder"}>
                                        <button className="botao-questionario" onClick={handleClick}><b>Criar Newsletter</b></button>
                                    </Link>
                                </div>
                            </div>
                            {message && <p>-- Você será redirecionado! Aguarde alguns minutos.</p>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LogadoCOLABORADORES;
