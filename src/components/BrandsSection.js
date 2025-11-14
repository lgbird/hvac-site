import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

import './BrandsSection.css';

const BrandsSection = () => {

  return (
    <section class="section btm-padding-section">
      <div class="section-container">
        <h2 class="section-title">Trabalhamos com todas as principais marcas</h2>
        <div className="brand-grid">
          <StaticImage src="../images/brands/aeg.jpg" alt="AEG" width="140" height="53" objectFit='cover' />
          <StaticImage src="../images/brands/bosch.jpg" alt="Bosch" width="140" height="53" objectFit='cover' />
          <StaticImage src="../images/brands/indesit.jpg" alt="Indesit" width="140" height="53" objectFit='cover' />
          <StaticImage src="../images/brands/lg.jpg" alt="LG" width="140" height="53" objectFit='cover' />
          <StaticImage src="../images/brands/miele.jpg" alt="Miele" width="140" height="53" objectFit='cover' />
          <StaticImage src="../images/brands/roca.jpg" alt="roca" width="140" height="53" objectFit='cover' />
          <StaticImage src="../images/brands/samsung.jpg" alt="Samsung" width="140" height="53" objectFit='cover' />
          <StaticImage src="../images/brands/sauber.jpg" alt="sauber" width="140" height="53" objectFit='cover' />
          <StaticImage src="../images/brands/siemens.jpg" alt="Siemens" width="140" height="53" objectFit='cover' />
          <StaticImage src="../images/brands/teka.jpg" alt="Teka" width="140" height="53" objectFit='cover' />
          <StaticImage src="../images/brands/ufesa.jpg" alt="Ufesa" width="140" height="53" objectFit='cover' />
          <StaticImage src="../images/brands/vaillant.jpg" alt="Vaillant" width="140" height="53" objectFit='cover' />
          <StaticImage src="../images/brands/vulcano.jpg" alt="Vulcano" width="140" height="53" objectFit='cover' />
          <StaticImage src="../images/brands/whirlpool.jpg" alt="Whirlpool" width="140" height="53" objectFit='cover' />
          <StaticImage src="../images/brands/zanussi.jpg" alt="Zanussi" width="140" height="53" objectFit='cover' />
          <StaticImage src="../images/brands/bauknecht.jpg" alt="Bauknecht" width="140" height="53" objectFit='cover' />
          <StaticImage src="../images/brands/brandt.jpg" alt="brandt" width="140" height="53" objectFit='cover' />
          <StaticImage src="../images/brands/carrier.jpg" alt="Carrier" width="140" height="53" objectFit='cover' />
          <StaticImage src="../images/brands/edesa.jpg" alt="Edesa" width="140" height="53" objectFit='cover' />
          <StaticImage src="../images/brands/electrolux.jpg" alt="Alectrolux" width="140" height="53" objectFit='cover' />
        </div>
      </div>
    </section>
  )
}

export default BrandsSection;
