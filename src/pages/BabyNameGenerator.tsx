import NameGenerator from '../components/NameGenerator';
import RelatedGenerators from '../components/RelatedGenerators';
import SeoHead from '../components/SeoHead';

const BabyNameGenerator = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Baby Name Generator",
    "description": "Discover perfect baby names with meanings. Generate thousands of beautiful baby boy and girl names from around the world.",
    "url": "https://getrandomnames.site/baby-name-generator",
    "applicationCategory": "UtilityApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I choose the right baby name?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Consider the name's meaning, how it sounds with your last name, potential nicknames, and cultural significance. Generate multiple options and say them out loud to see what feels right."
        }
      },
      {
        "@type": "Question",
        "name": "Can I see the meaning of baby names?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our generator provides authentic names from different cultures. You can research the specific meanings separately, as name meanings vary by origin and culture."
        }
      },
      {
        "@type": "Question",
        "name": "Are these names from real cultures?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! All names in our database are authentic names used in their respective countries and cultures. We include both traditional and modern names."
        }
      }
    ]
  };

  return (
    <>
      <SeoHead
        title="Baby Name Generator - Find Perfect Baby Boy & Girl Names"
        description="Discover beautiful baby names for boys and girls. Generate thousands of unique baby names from different cultures with our free baby name generator."
        keywords="baby names, baby name generator, boy names, girl names, unique baby names, baby name ideas, newborn names, pregnancy"
        canonical="https://getrandomnames.site/baby-name-generator"
        ogTitle="Baby Name Generator - Beautiful Names for Your Baby"
        ogDescription="Find the perfect name for your baby. Generate thousands of beautiful baby names from cultures around the world."
        ogUrl="https://getrandomnames.site/baby-name-generator"
        jsonLd={jsonLd}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-700 dark:from-violet-900 dark:via-purple-900 dark:to-fuchsia-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-violet-600/20 rounded-full blur-3xl animate-pulse-gentle"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse-gentle" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-violet-400/10 to-fuchsia-600/10 rounded-full blur-3xl animate-pulse-gentle" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Hero Section */}
        <div className="relative container mx-auto px-4 py-16 z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
              Baby Name
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 animate-glow filter drop-shadow-lg">
                Generator
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
              Discover beautiful names for your baby. Explore thousands of authentic names from cultures around the world.
            </p>
          </div>

          {/* Generator Component */}
          <NameGenerator mode="person" />
        </div>

        {/* Content Sections */}
        <div className="relative container mx-auto px-4 pb-12 z-10">
          <div className="max-w-4xl mx-auto">
            {/* How to Use Section */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">How to Use This Baby Name Generator</h2>
              <div className="text-white/90 space-y-4">
                <p>Finding the perfect name for your baby is an important decision. Our generator makes the process easier and more enjoyable:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Select a Country:</strong> Choose from 26+ countries to explore names from different cultures and traditions.</li>
                  <li><strong>Filter by Gender:</strong> Generate boy names, girl names, or see a mix of both to explore all options.</li>
                  <li><strong>Generate Multiple Times:</strong> Click generate as many times as you want to see different combinations.</li>
                  <li><strong>Save Favorites:</strong> Click the heart icon on names you like to save them for later comparison.</li>
                  <li><strong>Say Them Out Loud:</strong> Read the names aloud with your last name to hear how they sound together.</li>
                  <li><strong>Research Meanings:</strong> Once you find names you love, research their specific meanings and origins.</li>
                </ul>
              </div>
            </section>

            {/* Choosing Tips Section */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Balancing Meaning, Sound, and Uniqueness</h2>
              <div className="text-white/90 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Consider the Sound</h3>
                  <p>Say the full name (first, middle, and last) out loud. Does it flow naturally? Avoid names where the first name ends with the same sound the last name starts with, as this can sound awkward.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Think About Nicknames</h3>
                  <p>Many names have common nicknames. If you love Elizabeth but dislike Liz, consider whether you can prevent unwanted nicknames. Some parents choose to use the nickname as the legal name instead.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Cultural Significance Matters</h3>
                  <p>Names often carry cultural, religious, or familial significance. Research the meaning and history of names you're considering, especially if you're choosing from a culture different from your own.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Uniqueness vs. Usability</h3>
                  <p>While unique names can be special, extremely unusual names might cause your child difficulties. Balance uniqueness with practicality - your child will need to spell and pronounce their name thousands of times.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Consider Initials</h3>
                  <p>Check what initials the full name creates. Some combinations might spell unfortunate words or acronyms you'll want to avoid.</p>
                </div>
              </div>
            </section>

            {/* Trends Section */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Modern vs. Traditional Baby Names</h2>
              <div className="text-white/90 space-y-4">
                <p>Every generation sees shifts in naming trends. Here's what to consider when deciding between modern and traditional names:</p>
                <div className="space-y-4 mt-4">
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-300 mb-2">Traditional Names</h3>
                    <p>Names like Emma, William, Sarah, and James have stood the test of time. They're familiar, easy to spell, and carry historical significance. Traditional names rarely go out of style and are easily recognized across different cultures.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-300 mb-2">Modern Names</h3>
                    <p>Contemporary names like Aria, Kai, Luna, and Maverick reflect current trends and can feel fresh and unique. However, very trendy names might date your child to a specific era, similar to how names like Brittany or Jason are strongly associated with certain decades.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-300 mb-2">Finding Balance</h3>
                    <p>Many parents find a middle ground by pairing a traditional first name with a more modern middle name, or vice versa. This gives your child options as they grow.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">FAQ - Baby Name Generator</h2>
              <div className="space-y-6 text-white/90">
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">How do I choose the right baby name?</h3>
                  <p>Consider the name's meaning, how it sounds with your last name, potential nicknames, and cultural significance. Generate multiple options and say them out loud to see what feels right. Trust your instincts - you'll know when you find the perfect name.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Can I see the meaning of baby names?</h3>
                  <p>Our generator provides authentic names from different cultures. While we don't display meanings in the generator itself, you can easily research the specific meanings separately. Name meanings vary by origin and culture, so it's worth investigating names you're seriously considering.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Are these names from real cultures?</h3>
                  <p>Yes! All names in our database are authentic names used in their respective countries and cultures. We include both traditional and modern names to give you a comprehensive selection.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Should I tell people the name before my baby is born?</h3>
                  <p>This is a personal choice. Some parents keep the name private to avoid unwanted opinions, while others enjoy sharing their excitement. Remember, once your baby is born and named, negative opinions rarely continue.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">How many names should I consider?</h3>
                  <p>There's no right number, but many parents find it helpful to narrow down to a shortlist of 5-10 names. Use our favorites feature to save names you like, then revisit them after a few days to see which ones still resonate.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">What if my partner and I disagree on names?</h3>
                  <p>Try each generating names separately and creating your own favorites lists. Then compare to find common ground. Sometimes the perfect name is one neither of you initially considered but both can agree on.</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <script type="application/ld+json">
          {JSON.stringify(faqJsonLd)}
        </script>

        <RelatedGenerators currentPath="/baby-name-generator" />
      </div>
    </>
  );
};

export default BabyNameGenerator;
