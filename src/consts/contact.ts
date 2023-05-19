import { ContactField, FAQ, FormData } from "@/types/contact";

export const FAQ_QUESTIONS: FAQ[] = [
    {
        id: 0,
        question: 'What web development technologies do you specialize in?',
        answer: 'We specialize in cutting-edge web development technologies, including Next.js, FastAPI, React, Tailwind CSS and more. Our expertise ensures high-performance, modern websites that are SEO-friendly.'
    },
    {
        id: 1,
        question: 'What is the typical timeframe for completing a web development project?',
        answer: 'The project timeframe can vary depending on the scope and complexity of the project. We work closely with our clients to define realistic timelines and milestones. Once we understand your specific requirements, we can provide you with a tailored timeframe estimate.'
    },
    {
        id: 2,
        question: 'Do you provide ongoing support and maintenance after the project launch?',
        answer: "Absolutely! We offer ongoing support and maintenance services to ensure your application or website continues to perform optimally. From regular updates and security patches to content management assistance, we are here to support your project's long-term success."
    },
    {
        id: 3,
        question: 'Do you offer on-site consultations or meetings?',
        answer: 'Yes, we do offer on-site consultations and meetings, depending on the location and nature of the project. Please contact us to discuss your requirements, and we can arrange a meeting at your convenience to further understand your needs and provide personalized solutions.'
    },
]

export const CONTACT_FIELDS: ContactField[] = [
    {
        name: 'full_name',
        label: 'Full Name',
        isOptional: false,
    },
    {
        name: 'email',
        label: 'Email',
        isOptional: false,
    },
    {
        name: 'budget',
        label: 'Budget',
        isOptional: true,
    },
]