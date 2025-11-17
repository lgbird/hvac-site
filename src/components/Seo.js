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
			<!-- Cloudflare Web Analytics -->
			<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "be41251414d748dcae65766eccb19d02"}'></script>
			<!-- End Cloudflare Web Analytics -->
		</>
	)
}

export default SEO;
