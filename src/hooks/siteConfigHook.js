import { useStaticQuery, graphql } from "gatsby"

export const useSiteConfigHook = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					siteUrl
					heroHeader
					heroSubheader
					serviceArea
					phoneNumber
					waMessage
				}
			}
		}
	`)
	return Object.assign(
		{},
		data.site.siteMetadata,
		{ formattedNumber: data.site.siteMetadata.phoneNumber.replace(/(\d{3})(?=\d)/g, "$1 ") }
	)
}

