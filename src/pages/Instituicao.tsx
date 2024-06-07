'use client'
import Link from "next/link";
import React, { useState } from "react";

interface FormData {
    name: string;
    cnpj: string;
    email: string;
    cep: string;
    telefone: string;
    password: string;
}

interface Errors {
    email?: string;
    password?: string;
    cnpj?: string;
}

const Instituicao = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        cnpj: "",
        email: "",
        cep: "",
        telefone: "",
        password: ""
    });

    const [errors, setErrors] = useState<Errors>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        let formErrors: Errors = {};
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Email inválido";
        }
        if (formData.password.length < 6) {
            formErrors.password = "A senha deve ter pelo menos 6 caracteres";
        }
        if (!/^\d{14,}$/.test(formData.cnpj)) {
            formErrors.cnpj = "CNPJ deve conter apenas números e ter pelo menos 14 dígitos";
        }
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        // Allow only numeric input for CNPJ
        if (name === "cnpj" && !/^\d*$/.test(value)) {
            return;
        }
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            fetch("http://localhost:8080/Java_GS_Poseidon/rest/ong", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                console.log("Success:", data);
                setIsSubmitted(true);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        }
    };

    return (
        <>
            <section className="secao-total">
                <form className="form card-formulario" onSubmit={handleSubmit}>
                    <div className="card_header">
                        <svg className="svg-trailfinder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path className="svg-trailfinder" fill="none" d="M0 0h24v24H0z"></path>
                            <path className="svg-trailfinder" fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
                        </svg>
                        <h1 className="form_heading">Cadastre-se</h1>
                    </div>
                    <div className="field">
                        <label className="label-trailfinder" htmlFor="name">Razão Social:</label>
                        <input className="input" name="name" type="text" placeholder="Nome" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="field">
                        <label className="label-trailfinder" htmlFor="CNPJ">CNPJ:</label>
                        <input className="input" name="cnpj" type="text" placeholder="CNPJ" value={formData.cnpj} onChange={handleChange} />
                        {errors.cnpj && <span className="error">{errors.cnpj}</span>}
                    </div>
                    <div className="field">
                        <label className="label-trailfinder" htmlFor="email">Informe seu e-mail:</label>
                        <input className="input" name="email" type="text" placeholder="E-mail" value={formData.email} onChange={handleChange} />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="field">
                        <label className="label-trailfinder" htmlFor="CEP">CEP:</label>
                        <input className="input" name="cep" type="text" placeholder="CEP" value={formData.cep} onChange={handleChange} />
                    </div>
                    <div className="field">
                        <label className="label-trailfinder" htmlFor="telefone">Informe o telefone:</label>
                        <input className="input" name="telefone" type="text" placeholder="telefone" value={formData.telefone} onChange={handleChange} />
                    </div>
                    <div className="field">
                        <label className="label-trailfinder" htmlFor="password">Password:</label>
                        <input className="input" name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                    {isSubmitted && <p className="sucesso-instituicao">Enviado com sucesso</p>}
                    <div className="botao-submit">
                        <button className="button-trailfinder" type="submit">ENVIE</button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Instituicao;
