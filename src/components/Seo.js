import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

const SEO = ({ title, children }) => {
	const data = useStaticQuery(graphql`
	query {
	  site {
	    siteMetadata {
	      title
	    }
	  }
	}
      `)
	return (
		<>
			<html lang="pt-PT" />
			<title>{data.site.siteMetadata.title}</title>
			<meta name="description" content="Climatização Algarve. Instalação, reparação e manutenção de ar condicionado em todo o Algarve" />
			<meta name="google-site-verification" content="A7hePkiVawmiyF0p4EZ7Wv66gFqnXKpXn4Ife2yT5ZQ" />
			<link rel="icon" href="/favicon.svg" />
			{children}
		</>
	)
}

export default SEO;
