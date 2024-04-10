import React from "react";
import Head from "react-helmet";
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
    const metaRobots = noIndex ? "noindex, nofollow" : "index, follow"

    return <Head>
        <html lang="fr"/>
        <meta charset="utf-8" />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeyWords} />
        <meta name="robots" content={metaRobots} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        

    </Head>

}

