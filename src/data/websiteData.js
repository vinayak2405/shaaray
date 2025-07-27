// Website Data Configuration

// Currency conversion utility
const convertUSDToINR = (usdPrice) => {
  const exchangeRate = 83; // 1 USD = 83 INR (approximate current rate)
  const numericPrice = parseFloat(usdPrice.replace('$', ''));
  const inrPrice = (numericPrice * exchangeRate).toFixed(0);
  return `₹${inrPrice}`;
};

export const websiteData = {
  // Company Information
  company: {
    name: "Shaaray Group",
    tagline: "Innovation in Every Loop!",
    description: "Leading import and export of premium lighting solutions for homes, commercial spaces, and industrial facilities. Innovation in every loop, quality tested, eco-friendly, and globally sourced.",
    logo: {
      icon: "Lightbulb",
      text: "Shaaray Group"
    }
  },

  // Navigation Menu
  navigation: {
    menuItems: [
      { name: 'Home', id: 'home', path: '#home' },
      { name: 'About', id: 'about', path: '#about' },
      { name: 'Products', id: 'products', path: '#products' },
      { name: 'Why Choose Us', id: 'why-choose-us', path: '#why-choose-us' },
      { name: 'Contact', id: 'contact', path: '#contact' }
    ],
    ctaButton: {
      text: "Get Quote",
      path: "#contact"
    }
  },

  // Hero Section
  hero: {
    title: "Innovation in Every",
    highlight: "Loop!",
    subtitle: "Leading import and export of premium lighting solutions for homes, commercial spaces, and industrial facilities. Innovation in every loop, quality tested, eco-friendly, and globally sourced.",
    buttons: [
      {
        text: "Explore Products",
        variant: "contained",
        path: "#products"
      },
      {
        text: "Get a Quote",
        variant: "outlined",
        path: "#contact"
      }
    ],
    stats: [
      { number: "500+", label: "Products" },
      { number: "50+", label: "Countries" },
      { number: "10K+", label: "Happy Clients" }
    ],
    floatingElements: [
      { icon: "Lightbulb", delay: 0, position: { top: '10%', left: '10%' } },
      { icon: "TrendingUp", delay: 0.5, position: { top: '20%', right: '15%' } },
      { icon: "Star", delay: 1, position: { bottom: '20%', left: '15%' } },
      { icon: "CheckCircle", delay: 1.5, position: { bottom: '10%', right: '10%' } }
    ],
    rightSection: {
      title: "Illuminate Your World",
      description: "Discover our premium lighting solutions that transform spaces and enhance experiences"
    }
  },

  // About Section
  about: {
    title: "About Shaaray Group",
    subtitle: "Your Trusted Partner in Lighting Solutions",
    description: "With over a decade of experience in the lighting industry, Shaaray Group has established itself as a leading importer and exporter of premium lighting solutions. We specialize in providing innovative, energy-efficient, and aesthetically pleasing lighting products for residential, commercial, and industrial applications.",
    features: [
      {
        icon: "Verified",
        title: "Quality Assured",
        description: "All our products undergo rigorous quality testing to ensure they meet international standards."
      },
      {
        icon: "EcoFriendly",
        title: "Eco-Friendly",
        description: "We prioritize sustainable and energy-efficient lighting solutions that reduce environmental impact."
      },
      {
        icon: "GlobalNetwork",
        title: "Global Network",
        description: "Our extensive network spans across 50+ countries, ensuring reliable supply and support."
      },
      {
        icon: "Support",
        title: "24/7 Support",
        description: "Our dedicated team provides round-the-clock support for all your lighting needs."
      }
    ],
    stats: [
      { number: "10+", label: "Years Experience" },
      { number: "1000+", label: "Projects Completed" },
      { number: "50+", label: "Countries Served" },
      { number: "99%", label: "Client Satisfaction" }
    ]
  },

  // Product Categories
  products: {
    title: "Our Product Categories",
    subtitle: "Comprehensive Lighting Solutions for Every Need",
    categories: [
      {
        id: "residential",
        title: "Residential Lighting",
        description: "Transform your home with our elegant and energy-efficient residential lighting solutions.",
        icon: "Home",
        features: [
          "LED Bulbs & Tubes",
          "Chandeliers & Pendants",
          "Wall Sconces",
          "Table & Floor Lamps",
          "Smart Lighting Systems"
        ],
        image: "/images/residential-lighting.jpg",
        color: "#667eea",
        products: [
          {
            id: "res-001",
            name: "Modern LED Chandelier",
            description: "Elegant crystal chandelier with LED technology, perfect for living rooms and dining areas.",
            price: convertUSDToINR("$299.99"),
            image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop",
            features: ["Dimmable", "Energy Efficient", "Crystal Accents", "Remote Control"],
            rating: 4.8,
            reviews: 127
          },
          {
            id: "res-002",
            name: "Smart LED Bulb Pack",
            description: "WiFi-enabled smart bulbs that can be controlled via smartphone or voice commands.",
            price: convertUSDToINR("$49.99"),
            image: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=400&h=400&fit=crop",
            features: ["WiFi Connected", "Voice Control", "16M Colors", "Scheduling"],
            rating: 4.6,
            reviews: 89
          },
          {
            id: "res-003",
            name: "Contemporary Floor Lamp",
            description: "Sleek floor lamp with adjustable head and touch controls for modern homes.",
            price: convertUSDToINR("$159.99"),
            image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
            features: ["Adjustable Head", "Touch Control", "LED Technology", "Modern Design"],
            rating: 4.7,
            reviews: 203
          }
        ]
      },
      {
        id: "commercial",
        title: "Commercial Lighting",
        description: "Enhance your business environment with professional commercial lighting solutions.",
        icon: "Business",
        features: [
          "Office Lighting",
          "Retail Display Lighting",
          "Hospitality Lighting",
          "Educational Institutions",
          "Healthcare Facilities"
        ],
        image: "/images/commercial-lighting.jpg",
        color: "#764ba2",
        products: [
          {
            id: "com-001",
            name: "Office LED Panel",
            description: "High-efficiency LED panels designed for office environments with uniform light distribution.",
            price: convertUSDToINR("$89.99"),
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop",
            features: ["Uniform Light", "Energy Efficient", "Easy Installation", "Low Glare"],
            rating: 4.9,
            reviews: 156
          },
          {
            id: "com-002",
            name: "Retail Track Lighting",
            description: "Flexible track lighting system perfect for retail stores and showrooms.",
            price: convertUSDToINR("$199.99"),
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
            features: ["Adjustable Heads", "Multiple Configurations", "LED Spotlights", "Professional Look"],
            rating: 4.7,
            reviews: 94
          },
          {
            id: "com-003",
            name: "Hospitality Pendant",
            description: "Elegant pendant lights designed for hotels, restaurants, and hospitality venues.",
            price: convertUSDToINR("$349.99"),
            image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
            features: ["Luxury Design", "Warm Light", "Durable Construction", "Easy Maintenance"],
            rating: 4.8,
            reviews: 67
          }
        ]
      },
      {
        id: "industrial",
        title: "Industrial Lighting",
        description: "Robust and efficient lighting solutions designed for industrial applications.",
        icon: "Factory",
        features: [
          "High Bay Lighting",
          "Flood Lights",
          "Emergency Lighting",
          "Hazardous Area Lighting",
          "Motion Sensor Lights"
        ],
        image: "/images/industrial-lighting.jpg",
        color: "#48bb78",
        products: [
          {
            id: "ind-001",
            name: "High Bay LED Light",
            description: "High-output LED high bay lights for warehouses, factories, and industrial facilities.",
            price: convertUSDToINR("$299.99"),
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=400&fit=crop",
            features: ["High Output", "Long Life", "IP65 Rated", "Instant Start"],
            rating: 4.9,
            reviews: 234
          },
          {
            id: "ind-002",
            name: "Industrial Flood Light",
            description: "Powerful LED flood lights for outdoor industrial areas and security lighting.",
            price: convertUSDToINR("$179.99"),
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop",
            features: ["High Brightness", "Weather Resistant", "Motion Sensor", "Solar Option"],
            rating: 4.6,
            reviews: 178
          },
          {
            id: "ind-003",
            name: "Emergency Exit Light",
            description: "Battery backup emergency lighting for safety compliance in industrial facilities.",
            price: convertUSDToINR("$79.99"),
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
            features: ["Battery Backup", "LED Technology", "Easy Installation", "Safety Compliant"],
            rating: 4.7,
            reviews: 145
          }
        ]
      },
      {
        id: "outdoor",
        title: "Outdoor Lighting",
        description: "Illuminate outdoor spaces with our durable and weather-resistant lighting solutions.",
        icon: "Park",
        features: [
          "Street Lighting",
          "Garden & Landscape",
          "Security Lighting",
          "Sports Facilities",
          "Architectural Lighting"
        ],
        image: "/images/outdoor-lighting.jpg",
        color: "#4299e1",
        products: [
          {
            id: "out-001",
            name: "Solar Street Light",
            description: "Solar-powered LED street lights with automatic dusk-to-dawn operation.",
            price: convertUSDToINR("$399.99"),
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop",
            features: ["Solar Powered", "Auto Operation", "Long Battery Life", "Weather Resistant"],
            rating: 4.8,
            reviews: 312
          },
          {
            id: "out-002",
            name: "Garden Path Lights",
            description: "Elegant LED path lights for gardens, walkways, and landscape lighting.",
            price: convertUSDToINR("$24.99"),
            image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
            features: ["Solar Powered", "Warm Light", "Easy Installation", "Weatherproof"],
            rating: 4.5,
            reviews: 267
          },
          {
            id: "out-003",
            name: "Security Flood Light",
            description: "Motion-activated security flood lights with HD camera integration.",
            price: convertUSDToINR("$249.99"),
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
            features: ["Motion Sensor", "HD Camera", "Night Vision", "Mobile App"],
            rating: 4.7,
            reviews: 189
          }
        ]
      }
    ]
  },

  // Why Choose Us
  whyChooseUs: {
    title: "Why Choose Shaaray Group?",
    subtitle: "Excellence in Every Aspect of Our Service",
    reasons: [
      {
        icon: "Quality",
        title: "Premium Quality",
        description: "We source only the highest quality lighting products from trusted manufacturers worldwide, ensuring durability and performance.",
        color: "#667eea"
      },
      {
        icon: "Innovation",
        title: "Innovation First",
        description: "Stay ahead with cutting-edge lighting technology and innovative solutions that enhance efficiency and aesthetics.",
        color: "#764ba2"
      },
      {
        icon: "Support",
        title: "Expert Support",
        description: "Our team of lighting experts provides personalized consultation and ongoing support for all your projects.",
        color: "#48bb78"
      },
      {
        icon: "Global",
        title: "Global Reach",
        description: "With operations in 50+ countries, we provide reliable supply chains and local support wherever you are.",
        color: "#4299e1"
      },
      {
        icon: "Sustainability",
        title: "Sustainable Solutions",
        description: "Committed to environmental responsibility with energy-efficient and eco-friendly lighting options.",
        color: "#ed8936"
      },
      {
        icon: "Reliability",
        title: "Reliable Service",
        description: "Consistent delivery, competitive pricing, and reliable after-sales support make us your trusted partner.",
        color: "#f56565"
      }
    ]
  },

  // Contact Information
  contact: {
    title: "Get In Touch",
    subtitle: "Ready to illuminate your space? Contact us for a free consultation and personalized lighting solutions",
    information: [
      {
        icon: "Phone",
        title: "Phone",
        details: ["+91 98765 43210", "+91 98765 43211"],
        color: "#667eea",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      },
      {
        icon: "Email",
        title: "Email",
        details: ["info@shaaraygroup.com", "sales@shaaraygroup.com"],
        color: "#764ba2",
        gradient: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)"
      },
      {
        icon: "LocationOn",
        title: "Address",
        details: ["123 Business Park, Sector 15", "Gurgaon, Haryana 122001, India"],
        color: "#48bb78",
        gradient: "linear-gradient(135deg, #48bb78 0%, #38a169 100%)"
      },
      {
        icon: "Schedule",
        title: "Business Hours",
        details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
        color: "#4299e1",
        gradient: "linear-gradient(135deg, #4299e1 0%, #3182ce 100%)"
      }
    ],
    cta: {
      title: "Ready to Start Your Project?",
      description: "Let's discuss your lighting requirements and create the perfect solution for your space",
      button: {
        text: "Send us an Email",
        email: "info@shaaraygroup.com"
      }
    }
  },

  // Footer
  footer: {
    company: {
      name: "Shaaray Group",
      description: "Leading import and export of premium lighting solutions for homes, commercial spaces, and industrial facilities.",
      social: [
        { name: "Facebook", icon: "Facebook", url: "#" },
        { name: "Twitter", icon: "Twitter", url: "#" },
        { name: "LinkedIn", icon: "LinkedIn", url: "#" },
        { name: "Instagram", icon: "Instagram", url: "#" }
      ]
    },
    quickLinks: [
      { name: "About Us", path: "#about" },
      { name: "Products", path: "#products" },
      { name: "Why Choose Us", path: "#why-choose-us" },
      { name: "Contact", path: "#contact" }
    ],
    services: [
      { name: "Residential Lighting", path: "#products" },
      { name: "Commercial Lighting", path: "#products" },
      { name: "Industrial Lighting", path: "#products" },
      { name: "Outdoor Lighting", path: "#products" }
    ],
    support: [
      { name: "Technical Support", path: "#contact" },
      { name: "Installation Guide", path: "#" },
      { name: "Warranty Information", path: "#" },
      { name: "FAQ", path: "#" }
    ],
    copyright: "© 2024 Shaaray Group. All rights reserved."
  },

  // Social Media & Contact
  social: {
    whatsapp: {
      number: "+919876543210",
      message: "Hello! I'm interested in your lighting solutions."
    },
    email: {
      primary: "info@shaaraygroup.com",
      sales: "sales@shaaraygroup.com",
      support: "support@shaaraygroup.com"
    }
  },

  // SEO & Meta
  seo: {
    title: "Shaaray Group - Premium Lighting Solutions",
    description: "Leading import and export of premium lighting solutions for homes, commercial spaces, and industrial facilities. Innovation in every loop, quality tested, eco-friendly, and globally sourced.",
    keywords: "lighting solutions, LED lighting, commercial lighting, industrial lighting, residential lighting, outdoor lighting, Shaaray Group",
    author: "Shaaray Group",
    ogImage: "/images/og-image.jpg"
  },

  // Theme Colors
  theme: {
    primary: "#667eea",
    secondary: "#764ba2",
    success: "#48bb78",
    info: "#4299e1",
    warning: "#ed8936",
    error: "#f56565",
    gradients: {
      primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      secondary: "linear-gradient(135deg, #764ba2 0%, #667eea 100%)",
      success: "linear-gradient(135deg, #48bb78 0%, #38a169 100%)",
      info: "linear-gradient(135deg, #4299e1 0%, #3182ce 100%)"
    }
  }
};

// Export individual sections for easier imports
export const { 
  company, 
  navigation, 
  hero, 
  about, 
  products, 
  whyChooseUs, 
  contact, 
  footer, 
  social, 
  seo, 
  theme 
} = websiteData;

// Helper functions
export const getNavigationItems = () => navigation.menuItems;
export const getContactInfo = () => contact.information;
export const getProductCategories = () => products.categories;
export const getWhyChooseUsReasons = () => whyChooseUs.reasons;
export const getAboutFeatures = () => about.features;
export const getAboutStats = () => about.stats;
export const getHeroStats = () => hero.stats;
export const getHeroButtons = () => hero.buttons;
export const getFloatingElements = () => hero.floatingElements;
export const getAllProducts = () => {
  const allProducts = [];
  products.categories.forEach(category => {
    category.products.forEach(product => {
      allProducts.push({
        ...product,
        category: category.title,
        categoryId: category.id
      });
    });
  });
  return allProducts;
}; 