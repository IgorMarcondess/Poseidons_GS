'use client'
import React, { useState, useEffect } from 'react';

const DisqueDenuncia = () => {
    const [local, setLocal] = useState('');
    const [data, setData] = useState('');
    const [telefone, setTelefone] = useState('');
    const [descricao, setDescricao] = useState('');
    const [error, setError] = useState('');
    const [recipientEmail, setRecipientEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // Fetch the email from the API when the component mounts
        const fetchRecipientEmail = async () => {
            try {
                const response = await fetch('http://localhost:8080/Java_GS_Poseidon/rest/denuncia');
                const data = await response.json();
                setRecipientEmail(data.email);
            } catch (error) {
                console.error('Erro ao buscar o email do destinatário:', error);
            }
        };

        fetchRecipientEmail();
    }, []);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        // Validar os campos de input
        if (!local || !data || !telefone || !descricao) {
            setError('Por favor, preencha todos os campos.');
            return;
        }

        const denunciaData = {
            local,
            data,
            telefone,
            descricao,
            email: recipientEmail,
        };

        try {
            const response = await fetch('http://localhost:8080/Java_GS_Poseidon/rest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(denunciaData),
            });

            if (!response.ok) {
                throw new Error('Falha ao enviar a denúncia');
            }

            const result = await response.json();
            console.log('Denúncia enviada com sucesso:', result);

            // Reset form fields
            setLocal('');
            setData('');
            setTelefone('');
            setDescricao('');
            setError('');

            setIsSubmitted(true);

        } catch (error) {
            setError('Erro ao enviar a denúncia. Tente novamente.');
        }
    };

    return (
        <>
            <section className="secao-totalDISQUEDENUNCIA">
                <form className="formDISQUEDENUNCIA card-formularioDISQUEDENUNCIA" onSubmit={handleSubmit}>
                    <div className="card_headerDISQUEDENUNCIA">
                        <h1 className="form_headingDISQUEDENUNCIA">Disque Denúncia</h1>
                    </div>
                    {error && <div className="error">{error}</div>}
                    <div className="fieldDISQUEDENUNCIA">
                        <label className="label-DISQUEDENUNCIA" htmlFor="local">Local:</label>
                        <input
                            className="inputDISQUEDENUNCIA"
                            name="local"
                            type="text"
                            placeholder="Local do acontecimento"
                            value={local}
                            onChange={(e) => setLocal(e.target.value)}
                        />
                    </div>
                    <div className="fieldDISQUEDENUNCIA">
                        <label className="label-DISQUEDENUNCIA" htmlFor="data">Data:</label>
                        <input
                            className="inputDISQUEDENUNCIA"
                            name="data"
                            type="date"
                            placeholder="Data do acontecimento"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                        />
                    </div>
                    <div className="fieldDISQUEDENUNCIA">
                        <label className="label-DISQUEDENUNCIA" htmlFor="telefone">Informe o telefone:</label>
                        <input
                            className="inputDISQUEDENUNCIA"
                            name="telefone"
                            type="number"
                            placeholder="Telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                    </div>
                    <div className="fieldDISQUEDENUNCIA">
                        <label className="label-DISQUEDENUNCIA" htmlFor="descricao">Descrição:</label>
                        <textarea
                            className="textarea"
                            name="descricao"
                            placeholder="Descreva o acontecimento"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </div>
                    {isSubmitted && <p className="sucesso-disquedenuncia">Enviado com sucesso</p>}
                    <div className="botao-submit">
                        <button className="button-DISQUEDENUNCIA" type="submit">ENVIE</button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default DisqueDenuncia;
