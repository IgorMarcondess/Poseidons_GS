'use client'
import React, { useState } from "react";
import Link from "next/link";

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!email) {
            setError('Por favor, preencha o campo de e-mail.');
            return;
        }

        try {
            // Enviar dados para a API Java
            const response = await fetch('http://localhost:8080/Java_GS_Poseidon/rest/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                throw new Error('Falha ao enviar os dados');
            }

            const result = await response.json();
            console.log('Dados enviados com sucesso para a API:', result);

            // Simulação de envio de e-mail
            console.log(`Enviado para o e-mail: ${email}`);
            
            setError('');
            setIsSubmitted(true);
            
            setEmail('');
        } catch (error) {
            setError('Erro ao enviar os dados. Tente novamente.');
        }
    };

    return (
        <>
            <section className="secao-questionario">
                <h1 className="titulo-questionario">Newsletter</h1>
                <div className="organizacao-questionario-tablets">
                    <div className="alinhamento-questionario">
                        <div className="edicao-texto-questionario">
                            <div className="edicao-explicacao">
                                <h3 className="texto-questionario">Inscreva-se na Nossa Newsletter Oceânica</h3>
                                <h2 className="texto-questionario">
                                    Mantenha-se atualizado com as últimas novidades sobre os oceanos, vida marinha, conservação e muito mais. 
                                    Junte-se a nossa comunidade apaixonada pelo oceano e receba conteúdos exclusivos diretamente na sua caixa de entrada!
                                </h2>
                            </div>
                            <section className="secao-total">
                                <form className="formNEWSLETTER card-formularioNEWSLETTER" onSubmit={handleSubmit}>
                                    <div className="fieldNEWSLETTER">
                                        <label className="label-NEWSLETTER" htmlFor="email">Informe seu e-mail:</label>
                                        <input
                                            className="inputNEWSLETTER"
                                            name="email"
                                            type="text"
                                            placeholder="E-mail"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    {error && <div className="error">{error}</div>}
                                    {isSubmitted && <div className="sucesso-newsletter">Enviado com sucesso</div>}
                                    <div className="botao-submit">
                                        <button className="button-newsletter" type="submit">Cadastre-se</button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Newsletter;
