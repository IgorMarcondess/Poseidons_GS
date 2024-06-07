'use client'
import React from "react";
import "./CSS/LogadoONG.css"
import Link from "next/link"

const LogadoONG= () =>{
    return(
        <>
            <section className="secao-questionario">
                <h1 className="titulo-questionario">Olá, colaborador!</h1>
                <div className="organizacao-questionario-tablets">
                <div className="alinhamento-questionario">
                    <div className="edicao-texto-questionario">
                        <div className="edicao-explicacao">
                        <h2 className="texto-questionario">Estamos extremamente felizes por ter você conosco nesta jornada dedicada à proteção 
                            dos nossos preciosos oceanos. Aqui, cada novo integrante 
                            é como uma gota que se une a um vasto oceano de esforços, criando ondas de mudança e esperança para o futuro do nosso planeta.</h2>
                        </div>
                        <div className="organizacao-colaborador">
                            <div className="edicao-botao-questionario">
                            <Link href={"/TrailFinder"}>
                                <button className="botao-questionario" ><b>Colaboradores</b>
                                </button></Link>
                            </div>
                            <div className="edicao-botao-questionario">
                            <Link href={"/TrailFinder"}>
                                <button className="botao-questionario" ><b> Criar Newsletter</b>
                                </button></Link>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
            </section>
        </>
    )
}
export default LogadoONG;