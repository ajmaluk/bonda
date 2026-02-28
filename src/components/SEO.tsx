import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    url?: string;
    image?: string;
    type?: 'website' | 'article';
    schema?: Record<string, any> | Record<string, any>[];
}

export function SEO({
    title,
    description,
    keywords = "bonda ai, marksheet roast, student motivation ai, malayalam ai roast, ai feedback, marksheet analyzer, kerala ai tools, uthakkan, ajmal u k, toolpix",
    url = "https://bonda.toolpix.in",
    image = "https://bonda.toolpix.in/og-image.png",
    type = "website",
    schema
}: SEOProps) {
    const fullTitle = `${title} | Bonda by Uthakkan`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />
            <link rel="canonical" href={url} />

            {/* Dynamic JSON-LD Schema */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
}
