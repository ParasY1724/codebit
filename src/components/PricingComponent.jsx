import React from 'react';

const PricingSection = () => {
  // Plan data
  const plans = [
    {
      name: "Basic",
      description: "Great for occasional travelers",
      price: "$9.99",
      isPopular: false,
      features: [
        "1 custom itinerary per month",
        "Email support",
        "Basic destination guides",
        "Travel checklist templates"
      ]
    },
    {
      name: "Premium",
      description: "Perfect for regular travelers",
      price: "$19.99",
      isPopular: true,
      features: [
        "3 custom itineraries per month",
        "Priority email support",
        "Premium destination guides",
        "Personalized travel checklists",
        "Hotel recommendations",
        "Restaurant recommendations"
      ]
    },
    {
      name: "Unlimited",
      description: "For serious travel enthusiasts",
      price: "$39.99",
      isPopular: false,
      features: [
        "Unlimited custom itineraries",
        "24/7 priority support",
        "Premium destination guides",
        "Personalized travel checklists",
        "Hotel recommendations with special rates",
        "Restaurant recommendations with reservation assistance",
        "Local tour guide connections",
        "Emergency travel assistance"
      ]
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time with no penalties. You'll continue to have access to your plan until the end of your current billing cycle."
    },
    {
      question: "How quickly will I receive my custom itinerary?",
      answer: "You will receive your custom itinerary within 48 hours of submitting your request."
    },
    {
      question: "Can I change my plan later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes will take effect on your next billing cycle."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3">Choose Your Travel Plan</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get personalized travel recommendations, custom itineraries, and expert
          advice to make your journey unforgettable.
        </p>
      </div>

      {/* Pricing Cards Container */}
      <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`w-full md:w-1/3 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 
              ${plan.isPopular ? 'border-2 border-teal-500 transform md:-translate-y-2' : 'border border-gray-200'}`}
          >
            {plan.isPopular && (
              <div className="bg-teal-600 text-white text-center py-2">
                <span className="text-sm font-medium">Most Popular</span>
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-500 text-sm">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-6 pb-6">
              <button 
                className={`w-full py-3 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-300 
                  ${plan.isPopular ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-900 hover:bg-teal-800'}`}
              >
                Subscribe
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FAQs Section */}
      <div className=" mx-auto bg-white rounded-xl shadow-md p-8 w-full">
        <h3 className="text-2xl font-bold mb-8 text-center">Subscription FAQs</h3>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
              <h4 className="font-bold mb-2">{faq.question}</h4>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default PricingSection;