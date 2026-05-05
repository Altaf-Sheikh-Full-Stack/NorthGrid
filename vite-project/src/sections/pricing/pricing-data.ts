const PricingData = [
    {
        name: 'Saas',
        focus: "product development + growth + scaling",
        tiers: [

            {
                name: "Starter",
                price_per_month: 10000,
                includes: [
                    "UI/UX design support",
                    "Frontend/backend development (limited scope)",
                    "Basic marketing setup (landing pages, funnels)",
                    "Analytics setup"
                ]
            },

            {
                name: "Growth",
                price_per_month: 20000,
                includes: [
                    "Full product iteration",
                    "Performance optimization",
                    "Marketing campaigns + funnels",
                    "Conversion rate optimization",
                    "Weekly strategy calls"
                ]
            },

            {
                name: "Scale",
                price_per_month: 30000,
                includes: [
                    "Dedicated dev + design support",
                    "Advanced scaling (infra + performance)",
                    "Growth experiments",
                    "Paid marketing + funnel optimization",
                    "End-to-end ownership"
                ]
            },
        ]
    },


    {
        name: 'Ecommerce',
        focus: "Store optimization + revenue growth",
        tiers: [
            {
                name: "Starter",
                price_per_month: 40000,
                includes: [
                    "Store design improvements",
                    "Basic dev fixes",
                    "Product page optimization",
                    "Basic marketing setup"
                ]
            },
            {
                name: "Growth",
                price_per_month: 90000,
                includes: [
                    "Conversion optimization",
                    "Landing page design + dev",
                    "Ad funnel setup",
                    "Email/SMS marketing flows"
                ]
            },
            {
                name: "Scale",
                price_per_month: 180000,
                includes: [
                    "Full funnel optimization",
                    "A/B testing",
                    "Advanced ad scaling",
                    "Retention systems",
                    "Revenue-focused strategy"
                ]
            }
        ]
    },

    {
        name: "Real estate",
        focus: "lead generation + conversion systems",
        tiers: [
            {
                name: "Starter",
                price_per_month: 35000,
                includes: [
                    "Landing page design",
                    "Lead capture setup",
                    "Basic ad creatives"
                ]
            },
            {
                name: "Growth",
                price_per_month: 85000,
                includes: [
                    "Lead funnel development",
                    "CRM integration",
                    "Ad campaign management",
                    "Follow-up automation"
                ]
            },
            {
                name: "Scale",
                price_per_month: 170000,
                includes: [
                    "High-volume lead generation",
                    "Advanced funnel optimization",
                    "Sales pipeline optimization",
                    "Performance tracking + scaling"
                ]
            }
        ]
    },

    {
        name: 'Healthcare',
        focus: "trust + patient acquisition",
        tiers: [
            {
                name: "Starter",
                price_per_month: 30000,
                includes: [
                    "Website design updates",
                    "Basic SEO setup",
                    "Content support"
                ]
            },
            {
                name: "Growth",
                price_per_month: 70000,
                includes: [
                    "Full website optimization",
                    "Lead generation funnels",
                    "Local SEO + ads",
                    "Appointment system integration"
                ]
            },
            {
                name: "Scale",
                price_per_month: 140000,
                includes: [
                    "Multi-channel marketing",
                    "Conversion optimization",
                    "Automation systems",
                    "Patient acquisition scaling"
                ]
            }
        ]
    },

    
    {
        name: 'Education',
        focus: "course sales + funnel building",
        tiers: [
            {
                name: "Starter",
                price_per_month: 30000,
                includes: [
                    "Landing page design",
                    "Basic funnel setup",
                    "Content structuring"
                ]
            },
            {
                name: "Growth",
                price_per_month: 75000,
                includes: [
                    "Full funnel creation",
                    "Email automation",
                    "Course platform setup",
                    "Marketing campaigns"
                ]
            },
            {
                name: "Scale",
                price_per_month: 150000,
                includes: [
                    "Sales funnel optimization",
                    "Paid ads scaling",
                    "Retention systems",
                    "Advanced automation"
                ]
            }
        ]
    }
];

export default PricingData;