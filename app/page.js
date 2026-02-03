
import NavigateAuto from "./NavigteAuto";

export const metadata = {
  title: "Buy a Water Purifier in Dubai for Clean, Safe Drinking Water",
  description: "Shop modern water purifier in Dubai that removes impurities, improves taste, and delivers safe drinking water for your family every day.",
  alternates: {
    canonical: "https://rentro.ae/service/water-purifier-in-dubai",
  },
};



async function getProducts() {
  try{
    const res = await fetch("https://api.rentro.ae/api/v1/products", {
    cache: "no-store",
    
  });

    if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
   const data = await res.json();
  return data.slice(0, 9);
  } catch (error) {
    console.log(error);
  }



 
}



export default async function WaterPurifierPage() {

  const products = await getProducts();



  return (
    <>
    <header className="w-full flex justify-between items-center  bg-white p-4 shadow-md">
        <img src="/rentROLogo.png" className="md:h-10 h-8  w-auto " alt="rentro logo" />
        <a href="https://rentro.ae" target="blank" className="bg-gradient-to-br from-cyan-500 to-blue-700 text-white font-bold p-2 rounded-lg">See All Products</a>
      </header>
      <NavigateAuto/>
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Hero Section */}
      <section className="mb-16">
        <h3 className="sm:text-3xl text-2xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
         Pure Water Starts with <span className="text-red-500"> RENT <span className=" text-black">RO</span> </span> — Dubai’s Trusted Water Purifier Experts
        </h3>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl">
          Clean drinking water isn&apos;t a luxury—it&apos;s essential for your daily life. 
          From your morning glass to cooking and hydration throughout the day, 
          our advanced water purifiers ensure your water is clean, safe, and 
          perfectly refreshing.
        </p>
        
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mb-8 border border-blue-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            🏆 Why Choose Our Water Purifiers?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <span className="text-blue-600">💧</span>
              </div>
              <div>
                <h3 className="font-semibold">Advanced Filtration</h3>
                <p className="text-sm text-gray-600">Multi-stage purification technology</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <span className="text-blue-600">⚡</span>
              </div>
              <div>
                <h3 className="font-semibold">Energy Efficient</h3>
                <p className="text-sm text-gray-600">Low power consumption</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <span className="text-blue-600">🛡️</span>
              </div>
              <div>
                <h3 className="font-semibold">Complete Protection</h3>
                <p className="text-sm text-gray-600">Removes 99.9% contaminants</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Water Purifiers</h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.productCode}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Product Image */}
              <div className="relative h-56 bg-gray-100 overflow-hidden">
                {product.images?.[0] ? (
                  <img
                    src={product.images[0].baseUrl + product.images[0].uploadDir + product.images[0].imageUrl.split('/uploads/')[1]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-400">No Image</span>
                  </div>
                )}
                {product.productFor?.sell?.discountValue > 0 && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Save {product.productFor.sell.discountValue}%
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {product.description || product.longDescription?.substring(0, 100) + '...'}
                </p>

                {/* Price Section */}
                <div className="flex items-center justify-between mb-4">
                  {product.productFor?.sell ? (
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">
                        AED {product.productFor.sell.discountPrice?.toFixed(2)}
                      </span>
                      {product.productFor.sell.discountPrice < product.productFor.sell.actualPrice && (
                        <span className="text-gray-500 line-through">
                          AED {product.productFor.sell.actualPrice?.toFixed(2)}
                        </span>
                      )}
                    </div>
                  ) : (
                    <span className="text-gray-500">Price on request</span>
                  )}
                </div>

                {/* Stock Status */}
                <div className="flex items-center mb-4">
                  <div className={`w-2 h-2 rounded-full mr-2 ${product.inventory?.stockStatus === 'IN_STOCK' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span className="text-sm">
                    {product.inventory?.stockStatus === 'IN_STOCK' ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={`https://rentro.ae`}
                    target="blank"
                    className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </a>
                  <a
                    href={`https://rentro.ae`}
                    target="blank"
                    className="px-4 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                  >
                    →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="text-center mb-20">
        <a
          href="https://rentro.ae" target="blank"         className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          View All Water Purifiers
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {/* Benefits Section */}
      <section className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            💧 Why Dubai Homes Need Water Purifiers
          </h2>
          <p className="text-gray-700 mb-6">
            While Dubai&apos;s water is treated at the source, it travels through storage tanks 
            and extensive pipelines before reaching your tap. A high-quality water purifier 
            provides that essential final layer of protection, removing any residual 
            contaminants and ensuring your water is crystal clear, great-tasting, and 
            completely safe for daily consumption.
          </p>
          <ul className="space-y-3">
            {['Removes pipeline contaminants', 'Eliminates bacteria & viruses', 'Reduces heavy metals', 'Improves taste & odor'].map((item) => (
              <li key={item} className="flex items-center">
                <div className="bg-green-100 p-1 rounded mr-3">
                  <span className="text-green-600">✓</span>
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🔬 Advanced Purification Technology
          </h2>
          <p className="text-gray-700 mb-6">
            Modern water purifiers combine multiple filtration technologies including 
            Reverse Osmosis (RO), UV purification, and Activated Carbon filters. This 
            multi-stage approach effectively removes bacteria, heavy metals, chemical 
            residues, and microplastics, delivering water that meets the highest safety 
            standards.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'RO Filtration', desc: 'Removes dissolved salts' },
              { name: 'UV Treatment', desc: 'Kills microorganisms' },
              { name: 'Carbon Filter', desc: 'Removes chlorine' },
              { name: 'Sediment Filter', desc: 'Removes particles' },
            ].map((tech) => (
              <div key={tech.name} className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold">{tech.name}</h4>
                <p className="text-sm text-gray-600">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Daily Benefits of Pure Water
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: '👨‍👩‍👧‍👦',
              title: 'Family Health',
              description: 'Protect your loved ones with contaminant-free drinking water every day'
            },
            {
              icon: '💰',
              title: 'Cost Effective',
              description: 'Save money on bottled water while reducing plastic waste'
            },
            {
              icon: '👨‍🍳',
              title: 'Better Cooking',
              description: 'Enhanced taste in your teas, coffees, soups, and meals'
            },
          ].map((benefit) => (
            <div key={benefit.title} className="text-center p-6 bg-white rounded-xl border hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 rounded-2xl p-8 md:p-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>
        
        <div className="space-y-6">
          {[
            {
              q: "Why do I need a Water Purifier in Dubai?",
              a: "Dubai's water travels through extensive infrastructure before reaching your home. A water purifier removes any residual contaminants, ensures better taste, and provides safe drinking water for daily consumption."
            },
            {
              q: "How often does maintenance need to be done?",
              a: "Filter replacement is typically required every 6-12 months depending on usage and water quality. Most modern purifiers have filter change indicators for your convenience."
            },
            {
              q: "What's the difference between RO and UV purification?",
              a: "RO (Reverse Osmosis) removes dissolved salts and heavy metals, while UV purification kills bacteria and viruses. Many modern systems combine both for complete protection."
            },
            {
              q: "Can I install it myself?",
              a: "Professional installation is recommended to ensure optimal performance and warranty coverage. Most suppliers include installation with purchase."
            }
          ].map((faq) => (
            <div key={faq.q} className="bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-lg mb-2 flex items-center">
                <span className="text-blue-600 mr-3">Q:</span>
                {faq.q}
              </h4>
              <p className="text-gray-700 ml-8">
                <span className="text-green-600 mr-2">A:</span>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-12">
        <h1 className="sm:text-2xl text-xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight ">
          Buy a water purifier in Dubai for clean, safe drinking water every day.
        </h1>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed text-justify">
          Clean drinking water isn&apos;t a luxury. It&apos;s something you use all the time, whether you&apos;re aware of it or not. That first glass in the morning, cooking meals, making tea, staying hydrated during the day—it all depends on water being clean and safe. When the quality isn&apos;t right, you start to notice. That&apos;s where a reliable Water Purifier comes in. A good Water Purifier helps make sure the water you&apos;re drinking is clean, safe, and tastes better by removing impurities that can affect quality. It&apos;s not something you think about every minute, but once it&apos;s there, it quietly does its job. And honestly, that peace of mind matters. You know the water you&apos;re giving your family is better, and that&apos;s a big deal. Living in Dubai adds another layer to this. In many areas, water passes through long pipelines and multiple storage tanks before it reaches your tap. Over time, that can impact purity, even if the water is treated at the source. That&apos;s why installing a quality Water Purifier isn&apos;t just a nice extra—it&apos;s a practical choice for everyday living. Whether you&apos;re simply looking for a dependable system for your home or specifically searching for the best Water Purifier in Dubai, choosing the right one can make a real difference. Your water tastes better, cooking feels safer, and you don&apos;t have to second-guess what&apos;s coming out of the tap. It&apos;s one of those small decisions that quietly improve your daily routine, without much effort at all.
        </p>
      </section>

      <section className="my-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          See why buying a water purifier is essential for Dubai homes.
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed text-justify">
          Dubai’s water is treated and checked, yes—but that doesn&apos;t always mean it arrives at your tap in perfect shape. By the time it moves through storage tanks, pipes, and older plumbing, things can change. Sediment can build up. Chlorine smells can linger. Sometimes the water just tastes… off. Most people notice it eventually, even if they can&apos;t quite explain why. That&apos;s where a Water Purifier comes in and quietly does its job. It works as a last step before the water is actually used, filtering out particles and helping improve clarity. You&apos;re not replacing the water supply—you&apos;re just making sure the water you drink and cook with is cleaner and more dependable. It&apos;s one of those things you don&apos;t think about much once it&apos;s installed, but you definitely feel the difference. For families, busy professionals, or even small offices, having a Water Purifier in Dubai removes a lot of doubt from daily life. You stop wondering what’s really coming out of the tap. You fill a glass, cook a meal, make tea, and move on with your day. It’s a simple upgrade, but it adds a quiet sense of confidence to everyday hydration—and that peace of mind is hard to ignore.
        </p>
      </section>

      <section className="my-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Learn how modern water purifiers work to deliver safe water.
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed text-justify">
          Modern water purifiers are designed to quietly and efficiently improve water quality using advanced filtration technology. Depending on the model, a system may use reverse osmosis, ultraviolet purification, activated carbon filters, or a combination of multiple filtration stages. Each stage plays a role in removing specific contaminants such as bacteria, dissolved salts, heavy metals, and chemical residues. These processes work in the background, delivering fresh, better-tasting water on demand without the need for boiling or relying on bottled water. This makes a water purifier not only convenient but also environmentally responsible, helping reduce plastic waste while providing reliable daily hydration.
        </p>
      </section>

      <section className="my-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 ">
          Find the right water purifier in Dubai to buy with confidence.
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed text-justify">
          Picking the right Water Purifier in Dubai isn&apos;t really about finding the “best” one on paper. It&apos;s more about what actually works for your home. How many individuals use water each day? How often are you cooking? How much space do you realistically have in the kitchen? Those small details matter more than most specs. If you live in an apartment or have a smaller kitchen, bulky systems can feel like overkill. In those cases, compact countertop or under-sink options usually make more sense. Larger families, on the other hand, tend to need a higher-capacity Water Purifier that can handle frequent use without slowing things down. It&apos;s less about size and more about keeping up with daily demand. Maintenance is something people often overlook at first. Filters need changing, servicing comes up, and long-term costs add up over time. Thinking about that upfront saves a lot of frustration later. A good Water Purifier shouldn&apos;t feel like another chore. Ideally, it just fits into your day, does what it&apos;s supposed to do, and keeps delivering clean water without you having to think about it all year round.
        </p>
      </section>

      <section className="my-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Discover the daily benefits of owning a water purifier.
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed text-justify">
          Using a Water Purifier every day can make a real difference over time. It helps lower your exposure to unwanted contaminants that sometimes show up in untreated tap water, which is especially important if you&apos;re drinking it daily. Another thing people notice pretty quickly is the change in taste and smell. When water tastes better, you naturally end up drinking more of it without forcing yourself. There&apos;s also the practical side of it. With a Water Purifier at home, you don&apos;t rely as much on bottled water. That saves money in the long run and cuts down on plastic waste, which is a win on both sides. For many households, it just becomes part of normal life—fill a glass, cook a meal, make tea—without thinking twice. In Dubai, this is why a Water Purifier in Dubai often turns into an essential appliance rather than an optional one. It brings together better health, daily convenience, and a more sustainable way to handle drinking water, all without adding extra effort to your routine.
        </p>
      </section>

      <section className="my-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Know the key features to check before buying a water purifier.
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed text-justify">
          A good Water Purifier shouldn&apos;t feel complicated. It should just work. Most people don’t want to think about filters, settings, or power use every day—they just want clean water when they turn on the tap. That’s why quality systems focus on doing the job properly while staying easy to live with. Many modern units use more than one filtration stage, which helps clean the water thoroughly. At the same time, they’re designed to fit into normal kitchens without taking up too much space or looking awkward on the counter. You set it up once, and after that, it mostly stays out of the way. What really matters in daily use is convenience. Low energy use keeps running costs down, and simple filter changes mean you’re not stuck reading manuals or calling for help all the time. Over months of use, those small things make a big difference. When choosing a Water Purifier in Dubai, it’s usually better to invest in something that feels reliable and easy rather than overly complex. The right system quietly does its job, lasts well over time, and gives you clean water every day without turning into another task on your to-do list.
        </p>
      </section>

      <section className="my-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Shop for a reliable water purifier today for safe drinking water.
        </h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed text-justify">
          Honestly, choosing a water purifier isn&apos;t just ticking off a shopping list—it&apos;s about making sure your family actually has clean water every day. Here in Dubai, water comes through long pipelines and storage tanks, and sometimes it just doesn’t feel right straight from the tap. A reliable water purifier in Dubai fixes that problem. You’ll notice it instantly—the water tastes better, looks clearer, and you don’t have to think twice before drinking or cooking with it. It’s one of those small upgrades that makes everyday life feel a lot easier, and honestly, a bit more comforting too.
        </p>
      </section>

      <section className="my-12 bg-gray-50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-2">1. Why do I need a Water Purifier at home?</h4>
            <p className="text-gray-700 leading-relaxed">
              A Water Purifier helps remove impurities, improves the taste, and makes drinking water safer for daily use. It’s especially useful if you want consistent, clean water for drinking and cooking.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">2. Is a Water Purifier in Dubai really necessary?</h4>
            <p className="text-gray-700 leading-relaxed">
              Yes. While Dubai’s water is treated, it often travels through storage tanks and pipelines before reaching your home. A Water Purifier in Dubai adds an extra layer of protection and peace of mind.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">3. What type of Water Purifier is best for daily household use?</h4>
            <p className="text-gray-700 leading-relaxed">
              The best Water Purifier depends on your household size, water usage, and available space. Compact models work well for apartments, while larger systems suit bigger families.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">4. How often does a Water Purifier need maintenance?</h4>
            <p className="text-gray-700 leading-relaxed">
              Most Water Purifier systems require filter replacement every few months, depending on usage and water quality. Regular maintenance helps ensure consistent performance.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-2">5. Where can I buy a reliable Water Purifier in Dubai?</h4>
            <p className="text-gray-700 leading-relaxed">
              You can find a reliable Water Purifier in Dubai through trusted suppliers offering certified products, warranty support, and after-sales service.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-6">
          Ready to transform your water quality?
        </p>
        <a
          href="https://rentro.ae"
          target="blank"
          className="inline-flex items-center bg-green-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors hover:shadow-lg"
        >
          Book a Free Consultation
          <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </a>
      </div>
    </main>
    </>
  );
}