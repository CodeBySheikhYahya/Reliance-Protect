export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Coverage", href: "#plans" },
  { label: "Claims", href: "#how-it-works" },
  { label: "About", href: "#why-us" },
  { label: "Blog", href: "#blog" },
] as const;

export const HERO_STATS = [
  { value: "50K+", label: "Clients Protected" },
  { value: "99.8%", label: "Claims Paid" },
  { value: "24/7", label: "Expert Support" },
] as const;

export const TRUST_LOGOS = [
  "TechCorp",
  "FinanceHub",
  "MediGroup",
  "AutoShield",
  "HomeGuard",
  "LifeSecure",
  "GlobalRisk",
  "PrimeVault",
] as const;

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface Plan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  popular: boolean;
  features: PlanFeature[];
}

export const PLANS: Plan[] = [
  {
    name: "Basic",
    description: "Essential coverage for individuals starting out",
    monthlyPrice: 29,
    yearlyPrice: 290,
    popular: false,
    features: [
      { text: "Personal liability up to $100K", included: true },
      { text: "Emergency medical coverage", included: true },
      { text: "24/7 phone support", included: true },
      { text: "Digital claims processing", included: true },
      { text: "Multi-policy discount", included: false },
      { text: "Dedicated advisor", included: false },
    ],
  },
  {
    name: "Premium",
    description: "Comprehensive protection for families and professionals",
    monthlyPrice: 79,
    yearlyPrice: 790,
    popular: true,
    features: [
      { text: "Personal liability up to $500K", included: true },
      { text: "Full medical & dental coverage", included: true },
      { text: "24/7 priority support", included: true },
      { text: "Instant digital claims", included: true },
      { text: "Multi-policy discount 15%", included: true },
      { text: "Dedicated advisor", included: false },
    ],
  },
  {
    name: "Enterprise",
    description: "Complete coverage with white-glove service for businesses",
    monthlyPrice: 149,
    yearlyPrice: 1490,
    popular: false,
    features: [
      { text: "Liability up to $2M", included: true },
      { text: "Full medical, dental & vision", included: true },
      { text: "24/7 VIP concierge support", included: true },
      { text: "Instant claims + priority payout", included: true },
      { text: "Multi-policy discount 25%", included: true },
      { text: "Dedicated senior advisor", included: true },
    ],
  },
];

export const WHY_US_FEATURES = [
  {
    title: "15+ Years Experience",
    description:
      "Over a decade of protecting families and businesses with unwavering commitment.",
    detail:
      "Founded in 2009, we've grown from a small regional provider to a nationally recognized insurance leader, serving clients across all 50 states.",
    icon: "shield",
  },
  {
    title: "Lightning-Fast Claims",
    description:
      "Average claim processing time under 48 hours — industry leading speed.",
    detail:
      "Our AI-powered claims engine pre-validates documentation and routes to specialized adjusters, cutting typical processing time by 75%.",
    icon: "bolt",
  },
  {
    title: "Personalized Plans",
    description:
      "Every policy is tailored to your unique life circumstances and risk profile.",
    detail:
      "Our proprietary risk assessment algorithm analyzes 200+ data points to create a coverage plan that fits your exact needs — no more overpaying.",
    icon: "user",
  },
  {
    title: "Award-Winning Support",
    description:
      "Rated #1 in customer satisfaction for 5 consecutive years running.",
    detail:
      "Our support team includes licensed insurance advisors, not outsourced call centers. Average response time: under 90 seconds.",
    icon: "star",
  },
  {
    title: "Bank-Level Security",
    description:
      "256-bit encryption protects your data with the same standards as major banks.",
    detail:
      "SOC 2 Type II certified with regular third-party audits. Your personal information is encrypted at rest and in transit — zero breaches since inception.",
    icon: "lock",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees, no surprise rate hikes. What you see is what you pay.",
    detail:
      "We publish our rate methodology openly. Locked-in rates for the duration of your policy term with guaranteed renewal options.",
    icon: "chart",
  },
] as const;

export const WHY_US_COUNTERS = [
  { value: 15, suffix: "+", label: "Years of Trust" },
  { value: 50000, suffix: "+", label: "Clients Protected" },
  { value: 2, prefix: "$", suffix: "B+", label: "Claims Paid Out" },
] as const;

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Get a Quote",
    description:
      "Fill out our simple 2-minute form and receive an instant personalized quote.",
  },
  {
    step: 2,
    title: "Choose Your Plan",
    description:
      "Compare options side-by-side and select the coverage that fits your life.",
  },
  {
    step: 3,
    title: "Submit Documents",
    description:
      "Upload your documents securely — our system verifies everything in real time.",
  },
  {
    step: 4,
    title: "Get Covered",
    description:
      "Your policy activates instantly. Welcome to worry-free protection.",
  },
] as const;

export const PROCESS_STEPS_FULL = [
  {
    step: 1,
    title: "Schedule a Consultation",
    subtitle: "Availability Round the Clock",
    description:
      "We are available to serve you with our quick service. Book your consultation any time 24/7 without any delay. Our licensed advisors are standing by to understand your unique needs.",
    icon: "calendar",
  },
  {
    step: 2,
    title: "Need-Based Analysis",
    subtitle: "Canvass Your Plans",
    description:
      "We hear and analyze your requirements and canvass your required plan efficiently. Tell us about your basics — we will catch your requirement and identify the perfect coverage gaps to fill.",
    icon: "search",
  },
  {
    step: 3,
    title: "Budget Analysis",
    subtitle: "Transparent Cost Breakdown",
    description:
      "We respect your budget, so we get basic information regarding your budget to proceed further. You can openly share with us your budget line — no judgment, just smart planning.",
    icon: "dollar",
  },
  {
    step: 4,
    title: "Compare Plans",
    subtitle: "Side-by-Side Comparison",
    description:
      "We offer affordable plans for every genre without any hidden taxes. We offer relatively flexible prices to make your access reliable to fitness and health insurance by the cost-saving opportunity.",
    icon: "compare",
  },
  {
    step: 5,
    title: "Prepare to Sign Up",
    subtitle: "Seamless Onboarding",
    description:
      "Just provide your basic information here — it will automatically lead you further. Be ready to take insurance through us with a streamlined digital-first process that takes minutes, not hours.",
    icon: "signup",
  },
  {
    step: 6,
    title: "Manage Premium & Follow-Up",
    subtitle: "Ongoing Support & Care",
    description:
      "We set up your annual insurance premium amount by analyzing your data and follow up with you monthly to keep updating your account and apply modification if needed based on your feedback.",
    icon: "manage",
  },
] as const;

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Small Business Owner",
    quote:
      "ShieldElite made the entire process seamless. I had my business fully covered in under 24 hours. Their team genuinely cares about getting it right.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Software Engineer",
    quote:
      "After comparing 6 providers, ShieldElite offered the best coverage at the fairest price. Their digital claims process is impressively fast.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Healthcare Professional",
    quote:
      "When I had a claim, they processed it in 36 hours. No runaround, no endless paperwork. Just real support when I needed it most.",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    role: "Real Estate Investor",
    quote:
      "Managing multiple property policies used to be a nightmare. ShieldElite consolidated everything under one roof with a dedicated advisor. Game changer.",
    rating: 4,
  },
  {
    name: "Aisha Patel",
    role: "Working Parent",
    quote:
      "The family plan gives us peace of mind without breaking the bank. Their online portal makes it easy to manage everything from my phone.",
    rating: 5,
  },
];

export const BLOG_POSTS = [
  {
    category: "Insurance Tips",
    title: "7 Coverage Gaps Most Homeowners Don't Know About",
    readTime: "5 min read",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    category: "Industry News",
    title: "How AI Is Transforming the Insurance Claims Process",
    readTime: "4 min read",
    gradient: "from-cyan-500 to-emerald-500",
  },
  {
    category: "Financial Planning",
    title: "Life Insurance at Every Age: A Complete Planning Guide",
    readTime: "6 min read",
    gradient: "from-violet-600 to-blue-500",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "How quickly can I get coverage after signing up?",
    answer:
      "Most policies activate within 24 hours of completing your application. For straightforward cases, coverage can begin the same day. Complex commercial policies may take 2-3 business days for underwriting review.",
  },
  {
    question: "What documents do I need to apply?",
    answer:
      "For personal insurance, you'll need a valid government ID and basic information about what you're insuring (e.g., vehicle VIN, property address). Business policies require your EIN, business license, and relevant financial documents. Our system guides you through exactly what's needed.",
  },
  {
    question: "Can I customize my coverage limits?",
    answer:
      "Absolutely. Every plan is fully customizable. You can adjust coverage limits, deductibles, and add-on protections to match your exact needs and budget. Your advisor can help you find the optimal balance between coverage and cost.",
  },
  {
    question: "How does the claims process work?",
    answer:
      "File a claim through our app or website in under 5 minutes. Our AI system pre-validates your submission, then a dedicated claims adjuster is assigned within 2 hours. Most claims are resolved within 48 hours, with payment deposited directly to your bank account.",
  },
  {
    question: "Do you offer multi-policy discounts?",
    answer:
      "Yes — bundling multiple policies can save you up to 25%. Common bundles include home + auto, business + liability, and family health packages. Your advisor will automatically identify the best discount combinations for your situation.",
  },
  {
    question: "What makes ShieldElite different from other providers?",
    answer:
      "Three things: speed, transparency, and technology. We process claims 75% faster than the industry average, publish our pricing methodology openly, and use advanced AI to personalize your coverage. Plus, you always talk to licensed advisors — never outsourced call centers.",
  },
  {
    question: "Can I cancel or change my policy anytime?",
    answer:
      "Yes, with no cancellation fees during the first 30 days (our satisfaction guarantee). After that, you can modify or cancel with 30 days notice. Policy changes like adding coverage or adjusting limits take effect immediately.",
  },
  {
    question: "Is my personal data safe with ShieldElite?",
    answer:
      "We use 256-bit AES encryption — the same standard used by major banks. We're SOC 2 Type II certified, undergo regular third-party security audits, and have maintained zero data breaches since our founding. Your privacy is non-negotiable.",
  },
] as const;

export const FOOTER_LINKS = {
  products: [
    { label: "Home Insurance", href: "#" },
    { label: "Auto Insurance", href: "#" },
    { label: "Life Insurance", href: "#" },
    { label: "Business Insurance", href: "#" },
    { label: "Health Insurance", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Contact", href: "#" },
  ],
  contact: {
    phone: "1-800-SHIELD-1",
    email: "hello@shieldelite.com",
    address: "350 Fifth Avenue, New York, NY 10118",
  },
} as const;
