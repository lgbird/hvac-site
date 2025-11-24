import * as React from "react"

import './ServicesSection.css';

import CtaBtn from '../components/CtaBtn.js';
import Svg from '../components/Svg.js';

const ServicesSection = () => {
  return (
    <section id="servicos" class="section section-alt btm-padding-section">
      <div class="section-container">
        <div class="services">
          <div class="service">
            <Svg name="washing-machine" />
            <h2 class="service-title">Reparação de Máquinas de Lavar Roupa</h2>
            <p class="service-text">Resolvemos avarias rapidamente, desde fugas de água a problemas de centrifugação. Devolvemos a sua lavadora a um estado como novo, para que não fique com a roupa por lavar.</p>
          </div>
          <div class="service">
            <Svg name="dishwasher" />
            <h2 class="service-title">Reparação de Máquinas de Lavar Loiça</h2>
            <p class="service-text">A sua loiça a acumular-se? Reparamos problemas de limpeza, entupimentos e avarias elétricas. Garantimos que sua máquina volta a trabalhar por si.</p>
          </div>
          <div class="service">
            <Svg name="freezer" />
            <h2 class="service-title">Reparação de Frigoríficos</h2>
            <p class="service-text">Não arrisque perder alimentos. Solucionamos urgentemente problemas de falta de frio, fugas de gás ou formação excessiva de gelo. A sua tranquilidade é nossa prioridade.</p>
          </div>
          <div class="service">
            <Svg name="blinds" />
            <h2 class="service-title">Reparação estores</h2>
            <p class="service-text">Estores elétricos ou manuais avariados? Reparamos cordas, motores, lâminas e problemas de enrolamento. Recuperamos a funcionalidade e comodidade para a sua casa.</p>
          </div>
        </div>
        <CtaBtn id="services" />
      </div>
    </section>
  )
}

export default ServicesSection;
