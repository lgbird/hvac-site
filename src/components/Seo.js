import React from "react"

const SEO = ({ title, children }) => {
    return (
	<>
	    <html lang="pt-PT" />
	    <title>{title}</title>
	    <meta name="description" content="Climatização Algarve. Instalação, reparação e manutenção de ar condicionado em todo o Algarve" />
	    <link rel="icon" href="/favicon.svg" />
	    {children}
	</>
    )
}

export default SEO;
