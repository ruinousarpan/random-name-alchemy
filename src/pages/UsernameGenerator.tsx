import NameGenerator from '../components/NameGenerator';
import RelatedGenerators from '../components/RelatedGenerators';
import SeoHead from '../components/SeoHead';

const UsernameGenerator = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Username Generator",
    "description": "Generate unique usernames for gaming, social media, and online platforms. Free instant username ideas.",
    "url": "https://getrandomnames.site/username-generator",
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
        "name": "Are these usernames unique?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The usernames are randomly generated, but we can't guarantee absolute uniqueness across all platforms. Always check availability on your target platform before using."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use these usernames commercially?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! All generated usernames are free to use for any purpose, including commercial use, gaming accounts, social media profiles, and business accounts."
        }
      },
      {
        "@type": "Question",
        "name": "What makes a good username?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A good username is memorable, easy to spell, reflects your personality or brand, and is available across multiple platforms. Keep it between 6-15 characters for best results."
        }
      }
    ]
  };

  return (
    <>
      <SeoHead
        title="Username Generator - Free Gaming & Social Media Usernames"
        description="Generate unique usernames instantly for gaming, social media, and online platforms. Perfect for PUBG, Free Fire, Instagram, TikTok, and more. 100% free username generator."
        keywords="username generator, gaming usernames, social media names, PUBG names, Free Fire names, Instagram usernames, TikTok usernames, cool usernames"
        canonical="https://getrandomnames.site/username-generator"
        ogTitle="Username Generator - Create Unique Gaming & Social Names"
        ogDescription="Instantly generate unique usernames for gaming and social media. Free, fast, and perfect for any platform."
        ogUrl="https://getrandomnames.site/username-generator"
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
              Username
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 animate-glow filter drop-shadow-lg">
                Generator
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
              Create unique and memorable usernames instantly. Perfect for gaming, social media, streaming, and any online platform.
            </p>
          </div>

          {/* Generator Component */}
          <NameGenerator mode="username" hideCountrySelector={true} />
        </div>

        {/* Content Sections */}
        <div className="relative container mx-auto px-4 pb-12 z-10">
          <div className="max-w-4xl mx-auto">
            {/* How to Use Section */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">How to Get the Perfect Username</h2>
              <div className="text-white/90 space-y-4">
                <p>Finding the right username can be challenging, but our generator makes it easy. Here's how to make the most of it:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Generate Multiple Options:</strong> Click the generate button several times to see different combinations and styles.</li>
                  <li><strong>Check Availability:</strong> Once you find a username you like, check if it's available on your target platform.</li>
                  <li><strong>Add Personal Touch:</strong> Use our generated usernames as inspiration and modify them to make them uniquely yours.</li>
                  <li><strong>Keep It Simple:</strong> The best usernames are easy to remember and spell. Avoid excessive numbers or special characters.</li>
                  <li><strong>Stay Consistent:</strong> Using the same username across multiple platforms helps build your online identity.</li>
                </ul>
              </div>
            </section>

            {/* Platform-Specific Tips */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Usernames for Different Platforms</h2>
              <div className="text-white/90 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Gaming Usernames (PUBG, Free Fire, Fortnite)</h3>
                  <p>Gaming usernames should be bold and memorable. Look for combinations with words like Shadow, Ninja, or Phoenix. Keep it under 15 characters for compatibility across most games.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Social Media (Instagram, TikTok, Twitter)</h3>
                  <p>Social media usernames work best when they're unique and brandable. Avoid using too many numbers or special characters. Shorter is usually better for easy tagging and mentions.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Streaming Platforms (Twitch, YouTube)</h3>
                  <p>For streaming, choose a username that represents your content and personality. It should be easy to pronounce so viewers can recommend you to friends.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Professional Accounts (LinkedIn, Email)</h3>
                  <p>While our generator is great for casual platforms, consider using your real name or a professional variation for business and career-focused networks.</p>
                </div>
              </div>
            </section>

            {/* Best Practices Section */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Username Best Practices</h2>
              <div className="text-white/90 space-y-4">
                <p>Creating a great username is more than just random words. Here are tips from experienced online users:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Length Matters:</strong> Aim for 6-15 characters. Too short and it might be taken; too long and it's hard to remember.</li>
                  <li><strong>Avoid Personal Info:</strong> Don't include your birthdate, address, or other sensitive information in your username.</li>
                  <li><strong>Be Original:</strong> Stand out from the crowd with unique combinations rather than common phrases.</li>
                  <li><strong>Consider Future You:</strong> Choose a username you won't outgrow. Avoid references to your current age or temporary interests.</li>
                  <li><strong>Test Pronunciation:</strong> Say it out loud. If people can't pronounce it, they can't recommend you.</li>
                  <li><strong>Check All Platforms:</strong> Before committing, check if the username is available on all platforms you plan to use.</li>
                </ul>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">FAQ - Username Generator</h2>
              <div className="space-y-6 text-white/90">
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Are these usernames unique?</h3>
                  <p>The usernames are randomly generated, but we can't guarantee absolute uniqueness across all platforms. Always check availability on your target platform before using. Our combinations use thousands of possibilities, making duplicates unlikely but not impossible.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Can I use these usernames commercially?</h3>
                  <p>Yes! All generated usernames are free to use for any purpose, including commercial use, gaming accounts, social media profiles, and business accounts. No attribution required.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">What makes a good username?</h3>
                  <p>A good username is memorable, easy to spell, reflects your personality or brand, and is available across multiple platforms. Keep it between 6-15 characters for best results. Avoid excessive numbers or special characters.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">How do I check if a username is available?</h3>
                  <p>After generating a username you like, visit your target platform (Instagram, TikTok, PUBG, etc.) and try to create an account or search for that username. Most platforms will tell you immediately if it's available.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Can I modify the generated usernames?</h3>
                  <p>Absolutely! Feel free to use our generated usernames as inspiration and modify them however you like. Add your own numbers, change spellings, or combine elements from different suggestions.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Are these usernames suitable for professional use?</h3>
                  <p>These usernames are designed for gaming and social media. For professional platforms like LinkedIn or business email, consider using your real name or a professional variation instead.</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <script type="application/ld+json">
          {JSON.stringify(faqJsonLd)}
        </script>

        <RelatedGenerators currentPath="/username-generator" />
      </div>
    </>
  );
};

export default UsernameGenerator;
