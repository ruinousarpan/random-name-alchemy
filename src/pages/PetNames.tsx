import NameGenerator from '../components/NameGenerator';
import RelatedGenerators from '../components/RelatedGenerators';
import SeoHead from '../components/SeoHead';

const PetNames = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Pet Name Generator",
    "description": "Generate adorable names for your pet. Perfect for dogs, cats, and all furry friends. Free pet name ideas.",
    "url": "https://getrandomnames.site/pet-names",
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
        "name": "What makes a good pet name?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Good pet names are short (1-2 syllables), easy to say clearly, and distinct from common commands. They should match your pet's personality and be something you're comfortable calling out in public."
        }
      },
      {
        "@type": "Question",
        "name": "Can I change my pet's name?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Pets can learn new names at any age, though it's easier with younger animals. Use positive reinforcement by saying the new name before giving treats or praise."
        }
      },
      {
        "@type": "Question",
        "name": "Should pet names end in certain sounds?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Names ending in vowel sounds (a, e, i, o, u) are easier for pets to distinguish and respond to. Names like Luna, Charlie, and Buddy work well for this reason."
        }
      }
    ]
  };

  return (
    <>
      <SeoHead
        title="Pet Name Generator - Cute Dog & Cat Names | Free Pet Names"
        description="Generate adorable names for your dog, cat, or any pet. Find the perfect name that matches your furry friend's personality. Free pet name generator with hundreds of ideas."
        keywords="pet names, dog names, cat names, puppy names, kitten names, cute pet names, unique pet names, animal names"
        canonical="https://getrandomnames.site/pet-names"
        ogTitle="Pet Name Generator - Find Perfect Names for Your Pet"
        ogDescription="Discover adorable names for dogs, cats, and all pets. Generate hundreds of cute pet name ideas instantly."
        ogUrl="https://getrandomnames.site/pet-names"
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
              Pet Name
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 animate-glow filter drop-shadow-lg">
                Generator
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
              Find the perfect name for your furry friend. Generate adorable names for dogs, cats, and all pets instantly.
            </p>
          </div>

          {/* Generator Component */}
          <NameGenerator mode="pet" hideCountrySelector={true} />
        </div>

        {/* Content Sections */}
        <div className="relative container mx-auto px-4 pb-12 z-10">
          <div className="max-w-4xl mx-auto">
            {/* Tips Section */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">How to Choose the Perfect Pet Name</h2>
              <div className="text-white/90 space-y-4">
                <p>Naming your pet is an exciting part of welcoming them into your family. Here's how to find a name that's perfect for both you and your pet:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Keep It Short and Simple:</strong> One or two syllable names like Max, Bella, or Luna are easiest for pets to learn and recognize.</li>
                  <li><strong>Say It Out Loud:</strong> You'll be calling this name hundreds of times. Make sure it's comfortable to shout at the dog park!</li>
                  <li><strong>Consider Their Personality:</strong> Is your pet playful, calm, mischievous, or regal? Choose a name that matches their unique character.</li>
                  <li><strong>Think About Appearance:</strong> Physical traits can inspire great names - Shadow for black pets, Ginger for orange cats, or Snowy for white animals.</li>
                  <li><strong>Avoid Command Words:</strong> Don't choose names that sound like commands (Sit, Stay, Kit, Ray) to prevent confusion during training.</li>
                  <li><strong>Test It Out:</strong> Try calling potential names for a few days to see which one feels right and which your pet responds to best.</li>
                </ul>
              </div>
            </section>

            {/* Name Styles Section */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Popular Pet Naming Styles</h2>
              <div className="text-white/90 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Classic Pet Names</h3>
                  <p>Time-tested favorites that never go out of style. Names like Max, Buddy, Charlie, Lucy, and Daisy are popular for good reason - they're friendly, easy to say, and suit almost any pet.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Food-Inspired Names</h3>
                  <p>Adorable options like Cookie, Coco, Mochi, Pepper, and Peanut add a playful touch. These work especially well for small pets or those with food-colored fur.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Nature-Inspired Names</h3>
                  <p>Names from nature like Willow, River, Storm, Luna (moon), or Bear connect your pet to the natural world and often have beautiful meanings.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Human Names</h3>
                  <p>Giving pets traditional human names like Oscar, Sophie, Theodore, or Emma has become increasingly popular and adds a charming, sophisticated touch.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Pop Culture References</h3>
                  <p>Names from movies, TV shows, or books let you express your fandom. Think Simba, Loki, Hermione, or Yoda - but consider whether you'll still love the reference years from now.</p>
                </div>
              </div>
            </section>

            {/* Training Section */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">Teaching Your Pet Their Name</h2>
              <div className="text-white/90 space-y-4">
                <p>Once you've chosen the perfect name, help your pet learn it quickly with these tips:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Use Positive Association:</strong> Always say your pet's name before something good - treats, playtime, or cuddles. Never use it when scolding.</li>
                  <li><strong>Be Consistent:</strong> Everyone in the family should use the same name and pronunciation. Nicknames can come later, but start with one clear name.</li>
                  <li><strong>Practice Daily:</strong> Say their name when giving meals, during play sessions, and before walks. Repetition with positive experiences builds the association.</li>
                  <li><strong>Reward Response:</strong> When your pet looks at you after hearing their name, immediately reward them with a treat or praise. This reinforces the behavior.</li>
                  <li><strong>Avoid Overuse:</strong> Don't constantly repeat their name without purpose. This can cause them to tune it out. Use it when you need their attention.</li>
                  <li><strong>Make It Fun:</strong> Use an upbeat, happy tone when saying your pet's name to create positive feelings around it.</li>
                </ul>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl mb-8">
              <h2 className="text-3xl font-bold text-white mb-6">FAQ - Pet Names</h2>
              <div className="space-y-6 text-white/90">
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">What makes a good pet name?</h3>
                  <p>Good pet names are short (1-2 syllables), easy to say clearly, and distinct from common commands. They should match your pet's personality and be something you're comfortable calling out in public. Names ending in vowel sounds are particularly easy for pets to recognize.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Can I change my pet's name?</h3>
                  <p>Yes! Pets can learn new names at any age, though it's easier with younger animals. Use positive reinforcement by saying the new name before giving treats or praise. It typically takes 1-2 weeks for a pet to fully adjust to a new name with consistent practice.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Should pet names end in certain sounds?</h3>
                  <p>Names ending in vowel sounds (a, e, i, o, u) are easier for pets to distinguish and respond to. Names like Luna, Charlie, Buddy, Rosie, and Milo work well for this reason. The sharp consonant and clear vowel make them more audible to pet ears.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">How long does it take for a pet to learn their name?</h3>
                  <p>With consistent training, most pets can learn their name in 1-2 weeks. Young animals typically learn faster, but older pets can definitely learn new names too. The key is repetition combined with positive reinforcement.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Should I choose different names for multiple pets?</h3>
                  <p>Yes! If you have multiple pets, choose names that sound distinctly different to avoid confusion. For example, don't name your dogs "Max" and "Mac" or "Bella" and "Stella" as they sound too similar. This helps each pet recognize when you're calling them specifically.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Are there names I should avoid?</h3>
                  <p>Avoid names that sound like commands (Kit/Sit, Bo/No, Ray/Stay), names that are embarrassing to shout in public, and names that are too long or complicated. Also consider whether the name will still be appropriate when your cute puppy or kitten becomes a senior pet.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-2">Can I use these names for any type of pet?</h3>
                  <p>Our generator focuses on names commonly used for dogs and cats, but many work wonderfully for other pets too! Names like Luna, Charlie, or Shadow can suit rabbits, hamsters, birds, or any beloved animal companion.</p>
                </div>
              </div>
            </section>
          </div>
        </div>

        <script type="application/ld+json">
          {JSON.stringify(faqJsonLd)}
        </script>

        <RelatedGenerators currentPath="/pet-names" />
      </div>
    </>
  );
};

export default PetNames;
