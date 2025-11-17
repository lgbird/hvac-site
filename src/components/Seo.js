import React from "react"
import { useSiteConfigHook } from "../hooks/siteConfigHook"

const SEO = ({ titleOverride, children }) => {
	const { title } = useSiteConfigHook();
	return (
		<>
			<html lang="pt-PT" />
			<title>{titleOverride ?? title}</title>
			<meta name="description" content="Climatização Algarve. Instalação, reparação e manutenção de ar condicionado em todo o Algarve" />
			<meta name="google-site-verification" content="A7hePkiVawmiyF0p4EZ7Wv66gFqnXKpXn4Ife2yT5ZQ" />
			<link rel="icon" href="/favicon.svg" />
			{children}

		</>
	)
}

export default SEO;
