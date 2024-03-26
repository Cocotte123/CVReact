import React from "react";
import Head from "react-helmet";
/*import icon from "../img/apple-touch-icon.png";*/

const mainKeyWords = "website, devolpment, html, css, react, javascript"
const mainTitle = "John Doe"
const mainDescription = "Site officiel"


export default function Helmet ({
    title,
    description,
    link,
    keywords,
    noIndex

}) {
    const metaTitle = title + "-" + mainTitle
    const metaDescription = mainDescription
    const metaKeyWords = mainKeyWords
    /*const metaIcon = icon*/
    const metaRobots = noIndex ? "noindex, nofollow" : "index, follow"

    return <Head>
        <html lang="fr"/>
        <meta charset="utf-8" />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeyWords} />
        <meta name="robots" content={metaRobots} />
        

    </Head>

}


/*<link rel="icon" content={metaIcon} />*/