import React from "react"
import { useSiteConfigHook } from "../hooks/siteConfigHook"

const SEO = ({ titleOverride, descriptionOverride, children }) => {
	const { title, description } = useSiteConfigHook();
	return (
		<>
			<html lang="pt-PT" />
			<title>{titleOverride ?? title}</title>
			<meta name="description" content={descriptionOverride ?? description} />
			<meta name="google-site-verification" content="A7hePkiVawmiyF0p4EZ7Wv66gFqnXKpXn4Ife2yT5ZQ" />
			<link rel="icon" href="/favicon.svg" />
			{children}

		</>
	)
}

export default SEO;
