import { Helmet } from 'react-helmet-async';

interface SeoHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  jsonLd?: object;
}

const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  keywords = 'random names, name generator, fake names, character names',
  canonical = 'https://getrandomnames.site',
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage = 'https://lovable.dev/opengraph-image-p98pqg.png',
  jsonLd
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl || canonical} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SeoHead;
