'use client'
import Link from "next/link";
import Poseidons from "../../public/assets/header/logo_branco.png";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <>
            <header>
                <section className="Hfundo-base">
                    <div className="HOrganizacao_geral">
                        <Link href="/Pagina_inicial"><img className="LogoBranco_header" src={ Poseidons.src }/></Link>
                        <Link href="/Pagina_inicial"><h1 className="Htitulo_h1">Página Inicial</h1></Link>
                        <Link href="/Disquedenuncia"><h1 className="Htitulo_h1">Disk denúncia</h1></Link>
                        <div className="HOrganizacao_login">
                            <h3 className="Hopcoes_login">Logins</h3>
                            <Link href="/LoginInstituicao"><h3 className="Htitulo_h3">Instituição</h3></Link>
                            <Link href="/LoginColaborador"><h3 className="Htitulo_h3">Colaborador</h3></Link>
                        </div>
                    </div>
                </section>
            </header>
        </>
    );
}
export default Header;
