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

			<script
				async
				type="text/javascript"
				dangerouslySetInnerHTML={{
					__html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "u76pysinte");`
				}}
			></script>
		</>
	)
}

export default SEO;
