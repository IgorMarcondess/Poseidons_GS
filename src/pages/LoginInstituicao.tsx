'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const LoginIN = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        
        // Validar os campos de input
        if (!email || !password) {
            setError('Por favor, preencha todos os campos.');
            return;
        }

        try {
            const response = await fetch('https://sua-api-java.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Falha na autenticação');
            }

            const data = await response.json();
            console.log('Login bem-sucedido:', data);

            // Redirecionar para a página específica após o login bem-sucedido
            window.location.href = '/pagina-especifica';

            setIsSubmitted(true);
        } catch (error) {
            setError('Erro ao realizar login. Verifique suas credenciais e tente novamente.');
        }
    };

    return (
        <>
            <section className="secao-total" id="login">
                <form className="form card-formularioLOGININSTITUICAO" onSubmit={handleSubmit}>
                    <div className="card_header">
                        <svg className="svg-trailfinder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path className="svg-trailfinder" fill="none" d="M0 0h24v24H0z"></path>
                            <path className="svg-trailfinder" fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
                        </svg>
                        <h1 className="form_heading">Login-Instituição</h1>
                    </div>
                    {error && <div className="error">{error}</div>}
                    <div className="field">
                        <label className="label-trailfinder" htmlFor="email">Informe seu e-mail:</label>
                        <input 
                            className="inputLOGININSTITUICAO" 
                            name="email" 
                            type="text" 
                            placeholder="E-mail" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="field">
                        <label className="label-trailfinder" htmlFor="password">Password:</label>
                        <input 
                            className="inputLOGININSTITUICAO" 
                            name="password" 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link href="/Instituicao"><p className="label-trailfinder">Registre-se - instituição</p></Link>
                    <div className="botao-submit">
                        <button className="button-LOGININSTITUICAO" type="submit">ENVIE</button>
                    </div>
                </form>
            </section>
        </>
    );
}

export default LoginIN;
