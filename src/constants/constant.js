const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Consulting", href: "/consulting" },
    { label: "AI Coach", href: "/ai-coach" },
]

const hero = {
    title: "Your AI-Powered Sales Coach",
    description:
        "Get real-time coaching, script suggestions, and deal closing strategies powered by advanced AI technology.",
    statsDescription:
        "As a full-service business agency, we specialize in helping companies of all sizes optimize their operations.",
}

const iconCount = [
    {
        value: 2000,
        suffix: "+",
        label: "Your Protection",
        img: "/images/hero-icon1.png",
    },
    {
        value: 7001,
        suffix: "+",
        label: "Provide Tailored",
        img: "/images/hero-icon2.png",
    },
]
const boxCount = [
    {
        value: 721,
        suffix: "+",
    },
    {
        value: 1000,
        suffix: "+",
    },
]


const cardData = [
    {
        id: 1,
        img: "/images/course1.png",
        badge1: "4 Weeks",
        badge2: "Beginner",
        authName: "By John Smith",
        title: "Web Design Fundamentals",
        desc: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
        btn: "Get it Now"
    },
    {
        id: 2,
        img: "/images/course2.png",
        badge1: "4 Weeks",
        badge2: "Beginner",
        authName: "By John Smith",
        title: "Web Design Fundamentals",
        desc: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
        btn: "Get it Now"
    },
];

const faqData = [
    {
        question: "Why should I choose Humestic?",
        answer:
            "Because our AI coach is fully trained to help sales professionals improve their skills, close more deals, and increase revenue. Our platform provides personalized coaching based on your specific needs and goals.",
        defaultOpen: true,
    },
    {
        question: "I like your works, how do we start a project?",
        answer:
            'Getting started is easy! Simply click the "Get Started" button at the top of the page, fill out a brief questionnaire about your needs, and one of our representatives will contact you within 24 hours to discuss your project.',
    },
    {
        question: "What info is required to get a quotation?",
        answer:
            "To provide you with an accurate quotation, we need information about your business, your sales team size, your current challenges, and your goals. This helps us tailor our solution to your specific needs.",
    },
]

const footer = {
    desc:
        "SalesRank.AI is a cutting-edge AI-powered sales coaching platform designed to help sales professionals improve their skills and close more deals.",
    logo: "/images/footer-logo.png",
    nav: [
        {
            title: "Navigation",
            links: [
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Pricing", href: "/pricing" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
            ],
        },
        {
            title: "License",
            links: [
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Use", href: "/terms" },
                { label: "Cookie Policy", href: "/cookie" },
            ],
        },
    ],
    contact: [
        { label: "+1 800-555-1234", type: "tel:", imgPath: "/images/footer-icon-phone.png" },
        { label: "info@salesrank.ai", type: "mailto:", imgPath: "/images/footer-icon-email.png" },
        { label: "123 Technology DrSan Jose, CA 95110", type: "/", imgPath: "/images/footer-icon-location.png" },
    ],
    social: [
        { platform: "twitter", href: "#", imgPath: "/images/social1.svg" },
        { platform: "facebook", href: "#", imgPath: "/images/social2.svg" },
        { platform: "linkedin", href: "#", imgPath: "/images/social3.svg" },
        { platform: "instagram", href: "#", imgPath: "/images/social4.svg" },
    ],
}


export {
    navLinks,
    hero,
    iconCount,
    boxCount,
    cardData,
    faqData,
    footer
}