import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    url?: string;
    image?: string;
    type?: 'website' | 'article';
    schema?: Record<string, any> | Record<string, any>[];
    noindex?: boolean;
}

export function SEO({
    title,
    description,
    keywords = "bonda ai, marksheet roast, ai marksheet feedback, malayalam ai, student assistant, troll ai, motivation ai, uthakkan, Muhammed Ajmal U K, Ajmal U K, kerala tech, automated marksheet analysis, results roasting online, malayalam exam roast, best ai for students kerala, motivational ai feedback, result motivation tool, marksheet ocr tool, uthakkan ai, bonda malayalam roast, Uthakkan SaaS, AI tools development, freelance web developer Kerala, mobile app development Kannur, professional video creation, logo design services",
    url = "https://bonda.toolpix.in",
    image = "https://bonda.toolpix.in/og-image.png",
    type = "website",
    schema,
    noindex = false
}: SEOProps) {
    const fullTitle = `${title} | Bonda by Uthakkan`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="Uthakkan" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:locale:alternate" content="ml_IN" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="twitter:image:alt" content={title} />
            <meta name="twitter:creator" content="@uthakkan" />
            <link rel="canonical" href={url} />

            {/* Dynamic JSON-LD Schema */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}

            {/* Automatic Breadcrumb Schema */}
            {url.replace(/\/$/, '') !== "https://bonda.toolpix.in" && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Bonda",
                                "item": "https://bonda.toolpix.in"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": title,
                                "item": url
                            }
                        ]
                    })}
                </script>
            )}
        </Helmet>
    );
}
