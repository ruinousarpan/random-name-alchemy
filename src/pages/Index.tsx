import NameGenerator from '../components/NameGenerator';
import RelatedGenerators from '../components/RelatedGenerators';
import SeoHead from '../components/SeoHead';

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Random Name Generator",
    "description": "Generate thousands of random names from 26+ countries. Perfect for writers, developers, gaming, and creative projects.",
    "url": "https://getrandomnames.site",
    "applicationCategory": "UtilityApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <SeoHead
        title="Random Name Generator - Generate Names from 26+ Countries"
        description="Free random name generator with 26+ countries. Generate realistic names for characters, usernames, babies, pets, testing, and creative projects instantly."
        keywords="random name generator, fake names, character names, username generator, baby names, name ideas, writing tools"
        canonical="https://getrandomnames.site"
        jsonLd={jsonLd}
      />
      <NameGenerator />
      <RelatedGenerators currentPath="/" />
    </>
  );
};

export default Index;
