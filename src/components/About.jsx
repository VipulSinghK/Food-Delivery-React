import React from 'react';

function About() {
  return (
    <div className="w-full min-h-[calc(100vh-100px)] flex flex-col items-center bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-green-600 mb-6 text-center">
          About Us
        </h1>
        <div className="text-gray-600 text-lg space-y-6">
          <p>
            Welcome to our food ordering platform, where we bring culinary delights to your fingertips. Our mission is to provide a seamless and enjoyable experience for food lovers, offering a diverse menu that caters to all tastes, from vegetarian breakfasts to savory non-vegetarian main courses.<grok:render card_id="b09a88" card_type="citation_card" type="render_inline_citation">
<argument name="citation_id">0</argument>
</grok:render>
          </p>
          <p>
            Founded with a passion for quality and convenience, we partner with top chefs to ensure every dish is crafted with care. Whether you're craving a quick burger or a hearty pasta, our app makes ordering simple and fast. We emphasize real-time order tracking and secure payment integration to enhance user satisfaction and operational efficiency.<grok:render card_id="29a2c4" card_type="citation_card" type="render_inline_citation">
<argument name="citation_id">2</argument>
</grok:render>
          </p>
          <p>
            Our platform supports an aggregator model, connecting customers directly with restaurants while prioritizing contactless delivery and personalized recommendations. This approach not only expands restaurant reach but also boosts revenue through features like push notifications for promotions and loyalty rewards, fostering long-term customer engagement.<grok:render card_id="3100c8" card_type="citation_card" type="render_inline_citation">
<argument name="citation_id">1</argument>
</grok:render><grok:render card_id="02ed09" card_type="citation_card" type="render_inline_citation">
<argument name="citation_id">4</argument>
</grok:render>
          </p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-green-600 mb-3">Key Features</h3>
              <ul className="space-y-2 text-sm">
                <li>• Real-time GPS tracking for deliveries</li>
                <li>• Diverse menu browsing and search filters</li>
                <li>• Secure multiple payment options</li>
                <li>• Push notifications for order updates</li>
                <li>• Loyalty programs and exclusive discounts</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-green-600 mb-3">Our Commitment</h3>
              <ul className="space-y-2 text-sm">
                <li>• Partnering with local restaurants</li>
                <li>• Ensuring food quality and freshness</li>
                <li>• Promoting sustainable practices</li>
                <li>• Providing exceptional customer support</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center">
            Thank you for choosing us. We look forward to serving you and making every meal a memorable experience!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;