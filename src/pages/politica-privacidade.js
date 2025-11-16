import * as React from "react"

import { useSiteConfigHook } from "../hooks/siteConfigHook";
import { SiteContext } from "../components/SiteContext";
import SEO from "../components/Seo";
import Layout from '../components/Layout.js';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

const PrivacyPolicy = () => {
  const { waMessage, phoneNumber, formattedNumber } = useSiteConfigHook();
  let waLink = `https://api.whatsapp.com/send/?phone=351${phoneNumber}&text=${encodeURIComponent(waMessage)}`;
  return (
    <SiteContext.Provider value={{ waLink, formattedNumber, phoneNumber }}>
      <Layout>
        <main>
          <Navbar home={true} />
          <section class="section">
            <div class="section-container document-section">
              <h1 class="section-title">Política de Privacidade</h1>

              <p>A sua privacidade é importante para nós.</p>

              <p>Esta política explica de forma simples como utilizamos os seus dados:</p>

              <ul>
                <li><strong>Recolha de Dados:</strong> Recolhemos informações que nos fornece diretamente, como o seu nome, número de telefone e e-mail, quando nos contacta.</li>
                <li><strong>Como Utilizamos os Seus Dados:</strong> Utilizamos a sua informação exclusivamente para gerir o seu pedido de serviço. Isto inclui contactá-lo e partilhar os seus dados com a nossa rede de empresas e profissionais parceiros, para que possam orçamentar e executar o serviço que solicitou.</li>
                <li><strong>Google Ads:</strong> Utilizamos anúncios Google para chegar até si. Ao contactar-nos após clicar num anúncio, o Google poderá partilhar consigo dados como a localização geral ou o tipo de dispositivo.</li>
                <li><strong>Os Seus Direitos:</strong> Tem o direito de aceder, retificar ou eliminar os seus dados pessoais. Para exercer estes direitos, basta contactar-nos através dos meios disponibilizados no site.</li>
              </ul>

              <p>Ao contactar-nos, aceita os termos desta política.</p>
            </div>
          </section>
          <Footer />
        </main>
      </Layout>
    </SiteContext.Provider>
  )
}

export default PrivacyPolicy;

export const Head = () => (
  <SEO title="Politica de Privacidade" />
)
