import NavigateAuto from "./NavigteAuto";

export const metadata = {
  title: "Best Water Purifier in Saudi Arabia for Clean Water",
  description:
    "Looking for a reliable water purifier in Saudi Arabia? Get advanced filtration that removes impurities and delivers clean & safe water daily.",
  alternates: {
    canonical: "https://rentro.sa/service/water-purifier-in-saudi-arabiai",
  },
};

async function getProducts() {
  try {
    const res = await fetch("https://api.rentro.sa/api/v1/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();
    return data.slice(0, 9);
  } catch (error) {
    console.log(error);
    return [];
  }
}

const faqs = [
  {
    q: "Is a water purifier in Saudi Arabia really necessary?",
    a: "In many homes, yes. While municipal and desalinated water is treated to meet safety standards, it can still contain higher mineral levels, chlorine taste, or sediments. A water purifier in Saudi Arabia adds an extra layer of filtration that improves taste, clarity, and overall water quality for daily consumption.",
  },
  {
    q: "Which type of water purifier in Saudi Arabia is best for homes?",
    a: "The ideal system depends on your local water quality. In areas with high TDS (total dissolved solids), reverse osmosis systems are often recommended because they effectively reduce dissolved salts and minerals. For general purification and improved taste, multi-stage filtration systems also perform very well.",
  },
  {
    q: "Does a water purifier remove essential minerals?",
    a: "Some purification systems, especially reverse osmosis models, remove a large percentage of dissolved minerals along with impurities. Many modern units now include mineral enhancement stages that rebalance the water after filtration, ensuring both purity and a pleasant taste.",
  },
  {
    q: "How often should filters be replaced?",
    a: "Filter replacement depends on usage and water conditions, but most systems require maintenance every 6 to 12 months. Regular filter changes ensure consistent performance and maintain the quality of your purified water.",
  },
  {
    q: "Is the installation complicated?",
    a: "Most water purifiers are designed for straightforward installation. Under-sink models are professionally installed for a seamless look, while some countertop units can be set up with minimal adjustments. Once installed, daily operation is simple and convenient.",
  },
  {
    q: "Will a water purifier reduce water pressure?",
    a: "High-quality systems are engineered to maintain steady water flow. While some minor pressure differences can occur depending on the model, properly installed purifiers are designed to deliver smooth and consistent performance.",
  },
  {
    q: "Is a water purifier better than buying bottled water?",
    a: "For many households, yes. A water purifier provides continuous access to clean water without the recurring cost of bottled water. Over time, it is more economical, more convenient, and significantly reduces plastic waste.",
  },
  {
    q: "How long does a water purifier last?",
    a: "With proper maintenance and regular filter replacement, a good-quality water purifier can last for many years. Investing in a durable system ensures long-term reliability and consistent water quality for your home.",
  },
];

export default async function WaterPurifierPage() {
  const products = await getProducts();

  return (
    <>
      <header className="w-full flex justify-between items-center bg-white p-4 shadow-md">
        <img src="/rentROLogo.png" className="md:h-10 h-8 w-auto" alt="rentro logo" />
        <a
          href="https://rentro.sa"
          target="blank"
          className="bg-gradient-to-br from-cyan-500 to-blue-700 text-white font-bold p-2 rounded-lg"
        >
          See All Products
        </a>
      </header>

      <NavigateAuto />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
          <h1 className="sm:text-3xl text-2xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Water Purifier in Saudi Arabia for Clean Water Every Day
          </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Water is part of everything we do. From the first glass in the morning to
            cooking dinner at night, it&apos;s always present in our daily routine. But even
            when water looks clean, it may still contain dissolved minerals, chlorine, or
            other impurities that affect its quality and taste. That&apos;s why investing in a
            high-quality water purifier in Saudi Arabia is more than just a smart choice -
            it&apos;s a commitment to better health and better living.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            A modern water purifier transforms ordinary tap water into clean, refreshing
            drinking water you can trust. It works quietly in the background, ensuring every
            sip is safe and every meal prepared with water tastes exactly as it should.
          </p>
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
                      src={
                        product.images[0].baseUrl +
                        product.images[0].uploadDir +
                        product.images[0].imageUrl.split("/uploads/")[1]
                      }
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
                    {product.description || product.longDescription?.substring(0, 100) + "..."}
                  </p>

                  {/* Price Section */}
                  <div className="flex items-center justify-between mb-4">
                    {product.productFor?.sell ? (
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-900">
                          SAR {product.productFor.sell.discountPrice?.toFixed(2)}
                        </span>
                        {product.productFor.sell.discountPrice <
                          product.productFor.sell.actualPrice && (
                          <span className="text-gray-500 line-through">
                            SAR {product.productFor.sell.actualPrice?.toFixed(2)}
                          </span>
                        )}
                      </div>
                    ) : (
                      <span className="text-gray-500">Price on request</span>
                    )}
                  </div>

                  {/* Stock Status */}
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-2 h-2 rounded-full mr-2 ${
                        product.inventory?.stockStatus === "IN_STOCK"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    ></div>
                    <span className="text-sm">
                      {product.inventory?.stockStatus === "IN_STOCK"
                        ? "In Stock"
                        : "Out of Stock"}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a
                      href={`https://rentro.sa`}
                      target="blank"
                      className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      View Details
                    </a>
                    <a
                      href={`https://rentro.sa`}
                      target="blank"
                      className="px-4 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                    >
                      -
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Why Every Home in Saudi Arabia Needs a Water Purifier
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Living in Saudi Arabia comes with unique water conditions. Much of the water
            supply is sourced from desalination plants or underground reserves, which can
            result in higher mineral content and varying taste profiles. While treated water
            meets regulatory standards, many households still prefer additional filtration to
            improve taste, clarity, and overall purity.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            A dependable water purifier in Saudi Arabia is designed to handle these specific
            conditions. It enhances water quality by reducing excess minerals, minimizing
            chlorine odor, and removing sediments that may accumulate over time. In a warm
            climate where staying hydrated is crucial, having clean, great-tasting water
            readily available at home makes a significant difference.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            How a Water Purifier Makes Daily Life Better
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            The benefits of installing a water purifier extend far beyond drinking water
            alone. Clean water improves the taste of tea, coffee, soups, and every dish
            prepared in your kitchen. Fresh-tasting water naturally encourages better
            hydration habits, which is especially important in hot environments.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            It also reduces dependence on bottled water. Instead of storing heavy plastic
            containers or arranging frequent deliveries, purified water flows directly from
            your tap. Over time, this not only saves money but also helps reduce plastic
            waste, making it a more sustainable household choice.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            There&apos;s also peace of mind in knowing your family is consuming water that has
            been filtered specifically for your home&apos;s needs. Whether it&apos;s children filling
            their glasses or guests enjoying a cold drink, the confidence that comes with
            purified water is invaluable.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Water Purifier in Saudi Arabia Made for Homes
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            A high-quality water purifier in Saudi Arabia must be built to withstand regional
            environmental factors. High temperatures, varying water pressure, and continuous
            daily usage demand durable components and efficient filtration systems. Modern
            purifiers are engineered to perform consistently under these conditions, ensuring
            stable water flow and reliable purification throughout the year.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Advanced multi-stage filtration systems gradually refine water step by step. Each
            stage plays a role in improving clarity, reducing impurities, and enhancing
            overall taste. The result is balanced, clean water that supports both health and
            household needs.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            A Smart Choice for Safe and Healthy Drinking Water
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            While bottled water may seem convenient at first, the recurring expense quickly
            adds up. Over months and years, the cost of purchasing bottled water can far
            exceed the investment in a home water purifier. By installing a purification
            system, you gain unlimited access to clean water without ongoing high costs.
          </p>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Maintenance is straightforward, with replaceable filters designed for easy
            servicing. With proper care and routine filter changes, a quality water purifier
            continues delivering reliable performance for years. It becomes a long-term
            solution rather than a temporary fix.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Choosing a water purifier is not just about immediate improvement - it&apos;s about
            protecting your household for the future. Clean water supports overall wellness,
            enhances daily comfort, and adds value to your home.
          </p>
        </section>

        <section className="mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Start Using a Water Purifier for Cleaner Water Today
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            If you&apos;re looking for a dependable water purifier in Saudi Arabia, now is the
            right time to upgrade your home&apos;s water system. Clean, purified water should
            never be a luxury - it should be standard.
          </p>
          <p className="text-lg leading-relaxed">
            Experience the difference in taste, convenience, and confidence. Invest in a
            high-quality water purifier today and give your family the gift of safe,
            refreshing water every single day.
          </p>
        </section>

        <section className="my-12 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions (FAQ)
          </h3>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q}>
                <h4 className="font-semibold text-lg mb-2">{faq.q}</h4>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
