import * as React from "react"

import SEO from "../components/Seo";
import Layout from '../components/Layout.js';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import GoogleTag from '../components/GoogleTag.js';

const CookiePolicy = () => {
  return (
    <Layout>
      <main>
        <Navbar home={true} />
        <section class="section">
          <div class="section-container document-section">
            <h1 class="section-title">Utilização de Cookies</h1>

            <p>Este website utiliza apenas cookies estritamente necessários para o seu funcionamento e cookies de análise.</p>

            <ul>
              <li><strong>Cookies Essenciais:</strong> São necessários para o site funcionar corretamente. Não podem ser desativados.</li>
              <li><strong>Google Analytics:</strong> Utilizamos o Google Analytics, um serviço da Google, para compreender como os visitantes utilizam o nosso site. Estes cookies recolhem informações de forma anónima, como o número de visitantes e as páginas mais visitadas. Isto ajuda-nos a melhorar o nosso site.</li>
            </ul>

            <p>Ao continuar a navegar neste site, concorda com a utilização destes cookies. Pode gerir ou desativar os cookies através das definições do seu navegador.</p>
          </div>
        </section>
        <Footer />
        <GoogleTag />
      </main>
    </Layout>
  )
}

export default CookiePolicy;

export const Head = () => (
  <SEO title="Politica de Cookies" />
)
