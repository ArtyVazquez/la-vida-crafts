import ContactForm from "../components/contact/ContactForm"
import ContactBanner from "../components/contact/ContactBanner"
import Head from "next/head"

export default function contact() {
  return (
    <>
        <Head>
          <title>Contact</title>
          <meta name="description" content="La Vida Crafts contact." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ContactBanner /> 
        <ContactForm />
    </>
  )
}
