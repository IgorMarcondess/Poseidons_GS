import Link from "next/link"
import Logo from "../../public/assets/Página Inicial/logo_Azul.png"
import primeira from "../../public/assets/Cards/image1.jpg"
import segunda from "../../public/assets/Cards/image2.jpg"
import terceira from "../../public/assets/Cards/image3.jpg"
import quarta from "../../public/assets/Cards/image4.jpg"

const PaginaInicial = () =>{
  return(
    <>
      <div className="texto-paginaInicial">
        <div className="organizacao_titulo">
          <h1 className="titulo_paginaInicial"> Bem-vindo(a) ao Poseidons</h1>
          <img src={ Logo.src } className="logo_titulo"/>
        </div>
        <div className="Orgtexto_explicacaoPI">
          <h3 className="texto_explicacaoPI">O nosso oceano ocupa 70% do nosso planeta e é responsavel por 80° do nosso oxigenio, sendo essencial para vida na terra. 
            Eles regulam o clima, organiza a vida marinha e fornecem 
            alimentos para todos, contendo uma vasta diversidade de vida marinha existente. </h3>
            <br/>
          <h3 className="texto_explicacaoPI">Poseidons é uma plataforma dedicada a apoiar organizações não-governamentais (ONGs) que lutam para proteger e restaurar os oceanos. 
            Nossa missão é criar uma rede global de solidariedade, 
            onde indivíduos e instituições possam colaborar para salvar nossos mares.</h3>
        </div>
        <Link href="/Newsletter" ><h3 className="texto_explicacaoPI">-- Cadastra-se no Newsletter --</h3></Link>
      </div>
      <br/>
      <div className="organizacao_ongs">
        //<a className="organizacao-imagens"><img src={ primeira.src } className="imagem_PI"/></a>
        <div className="conjunto-imagens">
        <div className="texto-personagens">
                <h1 className="titulo-personagens">EcoMar</h1>
                <p className="texto-esquerda">Fundado em 1994 na UFRRJ como Laboratório de Bioacústica de Cetáceos (LBC), focava nos sons 
                de mamíferos marinhos. </p>
                <br/>
                <p className="texto-esquerda">Posteriormente, ampliou suas áreas de estudo para incluir outras vertentes da ecologia, 
                tornando-se o Laboratório de Bioacústica e Ecologia de Cetáceos (LBEC).</p>
        </div>  {/*texto-personagens */}
        </div> {/*conjunto-imagens */}
      </div>  {/*organizacao_ongs */}
      <div className="organizacao_ongs">
        <a className="organizacao-imagens"><img src={ segunda.src } className="imagem_PI"/></a>
        <div className="conjunto-imagens">
        <div className="texto-personagens">
                <h1 className="titulo-personagens">Aliança Pelos Oceanos</h1>
                <p className="texto-esquerda">A Aliança Pelos Oceanos, fundada em 2020, é uma organização brasileira 
                dedicada à preservação dos oceanos, realizando pesquisas, ações de conscientização e promovendo cooperação entre institutos e empresas.</p>
                <br/>
                <p className="texto-esquerda">Focamos na limpeza das praias do litoral sul de São Paulo e em eventos de conscientização.</p>
        </div>  {/*texto-personagens */}
        </div> {/*conjunto-imagens */}
      </div>  {/*organizacao_ongs */}
      <div className="organizacao_ongs">
        <a className="organizacao-imagens"><img src={ terceira.src } className="imagem_PI"/></a>
        <div className="conjunto-imagens">
        <div className="texto-personagens">
                <h1 className="titulo-personagens">Oceana Org</h1>
                <p className="texto-esquerda">Fundada em 2001, a Oceana é a maior organização internacional dedicada exclusivamente à conservação dos oceanos. </p>
                <br/>
                <p className="texto-esquerda">Com escritórios globais, trabalhamos para aumentar a biodiversidade e abundância marinha por meio de campanhas estratégicas e resultados mensuráveis.</p>
        </div>  {/*texto-personagens */}
        </div> {/*conjunto-imagens */}
      </div>  {/*organizacao_ongs */}
      <div className="organizacao_ongs">
        <a className="organizacao-imagens"><img src={ quarta.src } className="imagem_PI"/></a>
        <div className="conjunto-imagens">
        <div className="texto-personagens">
                <h1 className="titulo-personagens">EcoSurf</h1>
                <p className="texto-esquerda">O Instituto Ecosurf é uma organização brasileira que reúne especialistas e 
                entusiastas para garantir a saúde dos oceanos e proteger zonas costeiras.</p>
                <br/>
                <p className="texto-esquerda">Focamos em educação ambiental, voluntariado, engajamento social, inovação e políticas públicas.</p>
        </div>  {/*texto-personagens */}
        </div> {/*conjunto-imagens */}
      </div>  {/*organizacao_ongs */}
    </>
  )
}
export default PaginaInicial;