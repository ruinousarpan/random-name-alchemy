import NameGenerator from '../components/NameGenerator';
import RelatedGenerators from '../components/RelatedGenerators';
import SeoHead from '../components/SeoHead';

const IndianNames = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Indian Name Generator",
    "description": "Generate authentic Indian names from diverse regions, religions, and languages. Hindu, Muslim, Sikh, Christian, and more.",
    "url": "https://getrandomnames.site/indian-names",
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
        "name": "Are these real Indian names?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! All names in our database are authentic Indian names used across different regions, religions, and communities in India."
        }
      },
      {
        "@type": "Question",
        "name": "Do Indian names have special meanings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most Indian names carry significant meanings, often related to virtues, nature, gods, or positive qualities. The meanings vary based on the language origin (Sanskrit, Hindi, Tamil, etc.)."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use these names for my baby?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! These are real Indian names suitable for babies, characters, or any creative purpose. Research the specific meaning and pronunciation before finalizing."
        }
      }
    ]
  };

  return (
    <>
      <SeoHead
        title="Indian Name Generator - Authentic Indian Names & Meanings"
        description="Generate authentic Indian names from all regions and religions. Hindu, Muslim, Sikh, and Christian names with traditional and modern options. Free Indian name generator."
        keywords="Indian names, Hindu names, Muslim names, Sikh names, Indian baby names, Sanskrit names, Hindi names, Tamil names, Bengali names"
        canonical="https://getrandomnames.site/indian-names"
        ogTitle="Indian Name Generator - Traditional & Modern Indian Names"
        ogDescription="Discover authentic Indian names from diverse regions and religions. Perfect for babies, characters, and creative projects."
        ogUrl="https://getrandomnames.site/indian-names"
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
              Indian Name
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 animate-glow filter drop-shadow-lg">
                Generator
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
              Discover authentic Indian names from diverse regions, religions, and languages. Traditional and modern names for every purpose.
            </p>
          </div>

          {/* Generator Component */}
          <NameGenerator mode="person" initialCountry="india" />
        </div>

        {/* Content Sections */}
        <div className="relative container mx-auto px-4 pb-12 z-10">
          <div className="max-w-4xl mx-auto">
            {/* Diversity Section */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">The Rich Diversity of Indian Names</h2>
              <div className="text-white/90 space-y-4">
                <p>India's cultural and linguistic diversity creates one of the world's most fascinating naming traditions. Names vary dramatically across regions, religions, and communities:</p>
                <div className="space-y-4 mt-4">
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-300 mb-2">Regional Variations</h3>
                    <p><strong>North India:</strong> Names often derived from Sanskrit and Hindi, like Aarav, Ananya, Arjun, and Priya.</p>
                    <p><strong>South India:</strong> Tamil, Telugu, Kannada, and Malayalam names like Karthik, Lakshmi, Ravi, and Divya.</p>
                    <p><strong>East India:</strong> Bengali and Odia names such as Rahul, Rina, Sanjay, and Shreya.</p>
                    <p><strong>West India:</strong> Gujarati and Marathi names including Harsh, Kavya, Rohan, and Tanvi.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-300 mb-2">Religious Influences</h3>
                    <p><strong>Hindu Names:</strong> Often reference gods, virtues, or Sanskrit words. Examples: Krishna, Lakshmi, Dev, Devi.</p>
                    <p><strong>Muslim Names:</strong> Arabic or Persian origin, like Aisha, Fatima, Mohammed, and Zara.</p>
                    <p><strong>Sikh Names:</strong> Gender-neutral names often followed by Singh or Kaur, like Harpreet, Simran, and Gurpreet.</p>
                    <p><strong>Christian Names:</strong> Biblical or Western-influenced names used by Indian Christians, such as Abraham, Esther, John, and Mary.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Traditional vs Modern */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Traditional vs. Modern Indian Names</h2>
              <div className="text-white/90 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Traditional Names</h3>
                  <p>Classical Indian names often have deep meanings rooted in ancient texts and traditions. Names like Ramayana, Mahabharata, Vedas, and Puranas inspire many traditional choices. These names carry cultural heritage and are easily recognized across generations.</p>
                  <p className="mt-2">Examples: Arjun (warrior), Lakshmi (goddess of wealth), Ganesh (lord of beginnings), Saraswati (goddess of knowledge).</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Modern Indian Names</h3>
                  <p>Contemporary Indian parents increasingly choose shorter, globally pronounceable names that work well internationally while retaining Indian roots. These names blend tradition with modernity.</p>
                  <p className="mt-2">Examples: Aarav, Anaya, Dhruv, Kiara, Reyansh, Saanvi, Vihaan, Zara.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Naming Conventions</h3>
                  <p>Indian naming practices often include the given name, father's name, and surname or family name. The order and usage vary by region. Some communities use titles like Sharma, Kumar, or Singh that indicate caste or religious background.</p>
                </div>
              </div>
            </section>

            {/* Meaning and Significance */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Understanding Name Meanings and Astrology</h2>
              <div className="text-white/90 space-y-4">
                <p>In Indian culture, names are more than labels - they're blessings, hopes, and sometimes astrological necessities:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Vedic Astrology:</strong> Many Hindu families consult astrologers to determine auspicious name letters based on the child's birth chart (kundli). The first letter is believed to influence destiny.</li>
                  <li><strong>Numerology:</strong> The numerical value of letters in a name is considered significant. Parents often adjust spellings to achieve favorable numbers.</li>
                  <li><strong>Naming Ceremonies:</strong> The Namkaran (naming ceremony) is an important ritual held days after birth, where the chosen name is formally announced to family and community.</li>
                  <li><strong>Multiple Names:</strong> Many Indians have official names, home nicknames, and sometimes religious or spiritual names used in different contexts.</li>
                  <li><strong>Gender Neutral:</strong> Sikh tradition uses gender-neutral first names, with Singh added for males and Kaur for females.</li>
                </ul>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">FAQ - Indian Names</h2>
              <div className="space-y-6 text-white/90">
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Are these real Indian names?</h3>
                  <p>Yes! All names in our database are authentic Indian names used across different regions, religions, and communities in India. They represent the beautiful diversity of Indian naming traditions.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Do Indian names have special meanings?</h3>
                  <p>Yes, most Indian names carry significant meanings, often related to virtues, nature, gods, or positive qualities. The meanings vary based on the language origin (Sanskrit, Hindi, Tamil, etc.). For example, "Aarav" means peaceful, "Diya" means lamp, and "Arjun" refers to the legendary warrior.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Can I use these names for my baby?</h3>
                  <p>Absolutely! These are real Indian names suitable for babies, characters, or any creative purpose. If you're considering a name for your baby, research the specific meaning and pronunciation before finalizing. Consider consulting family elders or an astrologer if that's important to your tradition.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Why do some Indian names have different spellings?</h3>
                  <p>Indian names are transliterated from various scripts (Devanagari, Tamil, etc.) into English, leading to spelling variations. For example, Krishna/Krish, Mohamed/Muhammad, or Shreya/Shriya. Some parents also modify spellings for numerological reasons.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">What's the significance of surnames in India?</h3>
                  <p>Indian surnames often indicate family lineage, caste, religion, or region of origin. Common surnames like Sharma, Gupta, Patel, Singh, Khan, and Iyer help identify community background. However, many modern Indians choose to drop or change caste-indicating surnames.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Can non-Indian parents use Indian names for their children?</h3>
                  <p>Yes, but it's respectful to understand the cultural and religious significance of the name you're choosing. Research the meaning, pronunciation, and cultural context. Some names have deep religious significance that may not be appropriate for casual use.</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <script type="application/ld+json">
          {JSON.stringify(faqJsonLd)}
        </script>

        <RelatedGenerators currentPath="/indian-names" />
      </div>
    </>
  );
};

export default IndianNames;
