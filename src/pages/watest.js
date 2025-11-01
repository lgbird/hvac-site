import * as React from "react"
import { Link } from "gatsby"



const NotFoundPage = () => {
  return (
    <main>
      <a href="https://api.whatsapp.com/send/?phone=351967087547" target='_blank'>WA</a>
      <br/>
      <a href="/api/whatsapp" target="_blank">redirect</a>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>

