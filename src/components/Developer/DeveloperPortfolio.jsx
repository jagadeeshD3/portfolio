'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useDarkMode } from '@/context/DarkModeContext';
import {
    Github,
    Mail,
    Linkedin,
    FileText,
    Database,
    Cloud,
    Code,
    Terminal,
    Phone,
    Newspaper,
    Package,
    ExternalLink,
    Sun,
    Moon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const DarkModeToggle = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <div
            data-theme-transition
            className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm px-3 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300">
            <Sun className={`h-4 w-4 text-yellow-500 transition-transform duration-300 ${isDarkMode ? 'scale-85 opacity-50' : 'scale-100 opacity-100'}`} />
            <Switch
                checked={isDarkMode}
                onCheckedChange={toggleDarkMode}
                className="data-[state=checked]:bg-purple-500 transition-all duration-300"
            />
            <Moon className={`h-4 w-4 text-blue-500 transition-transform duration-300 ${isDarkMode ? 'scale-100 opacity-100' : 'scale-85 opacity-50'}`} />
        </div>
    );
};

// Tab context to manage the active tab state
const TabContext = React.createContext({
    activeTab: 'about',
    setActiveTab: () => { },
});

// Hook to use tab context
const useTabContext = () => React.useContext(TabContext);

// Navigation Component
const Navigation = () => {
    const { activeTab, setActiveTab } = useTabContext();
    const tabs = ['About', 'Tech Stack', 'Experience', 'Projects', 'Contact'];

    return (
        <div className="w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
            <nav className="flex justify-center space-x-8">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab.toLowerCase())}
                        className={`px-4 py-3 text-base font-medium transition-colors relative
                            ${activeTab === tab.toLowerCase()
                                ? 'text-blue-600 dark:text-blue-400'
                                : 'text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400'
                            }`}
                    >
                        {tab}
                        {activeTab === tab.toLowerCase() && (
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400" />
                        )}
                    </button>
                ))}
            </nav>
        </div>
    );
};

// Hero Section Component
const HeroSection = () => (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-100 to-white dark:from-blue-950 dark:to-zinc-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                        JAGADEESH DASARI
                    </h1>
                    <p className="text-xl text-zinc-700 dark:text-zinc-300 mb-6">
                        Senior Big Data Engineer/ Analyst
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                        <ContactButtons />
                    </div>
                </div>
                <ProfileImage />
            </div>
        </div>
    </div>
);

// Profile Image Component
const ProfileImage = () => (
    <div className="relative w-52 h-52 lg:w-80 lg:h-80">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-20 blur-2xl animate-pulse" />
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-xl">
            <Image
                src="/images/suit.png"
                alt="Jagadeesh Dasari"
                fill
                className="object-cover"
                priority
            />
        </div>
    </div>
);

// Contact Buttons Component
const ContactButtons = () => (
    <>
        <ContactButton
            href="https://linkedin.com/in/jagadeeshdasari0820"
            Icon={Linkedin}
            text="LinkedIn"
        />
        <ContactButton
            href="https://github.com/jagadeeshD3"
            Icon={Github}
            text="GitHub"
        />
        <ContactButton
            href="https://medium.com/@jagadeeshofficial789"
            Icon={Newspaper}
            text="Medium Blog"
        />
        <ContactButton
            href="tel:+919346980454"
            Icon={Phone}
            text="Phone: +91 9346980454"
        />
        <ContactButton
            href="mailto:dasarijagadeesh789@gmail.com"
            Icon={Mail}
            text="Email"
        />
        <Link href="/resume">
            <Button variant="outline" className="gap-2">
                <FileText className="w-5 h-5" />
                View Resume
            </Button>
        </Link>
    </>
);

// Individual Contact Button Component
const ContactButton = ({ href, Icon, text }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" className="gap-2">
            <Icon className="w-5 h-5" />
            {text}
        </Button>
    </a>
);

// Footer Component
const Footer = () => (
    <footer className="py-8 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex space-x-6">
                    <SocialLink href="https://github.com/jagadeeshD3" Icon={Github} />
                    <SocialLink href="https://www.linkedin.com/in/jagadeeshdasari0820" Icon={Linkedin} />
                    <SocialLink href="mailto:dasarijagadeesh789@gmail.com" Icon={Mail} />
                </div>
                <p className="text-base text-zinc-500 dark:text-zinc-400">
                    © 2024 Jagadeesh Dasari. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
);

// Social Link Component
const SocialLink = ({ href, Icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
    >
        <Icon className="h-6 w-6" />
    </a>
);
// Tab Content Components

// About Section
const AboutSection = () => (
    <div className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                {/* Quote Column */}
                <div className="lg:col-span-2">
                    <div className="sticky top-24">
                        <blockquote className="pl-4 border-l-2 border-blue-500/30">
                            <p className="text-lg font-medium text-zinc-700 dark:text-zinc-300 italic">
                                Building scalable Big Data solutions is not just about writing code; its about crafting pipelines and workflows that grow with your needs and remain maintainable over time.
                            </p>
                        </blockquote>
                    </div>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-3 space-y-6">
                    <p className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        Big Data Engineer with over 2 years of experience in designing scalable, robust end-to-end data pipelines that enable data-driven business solutions. Worked in Credit Cards team at Axis Bank - BIU, managing business-critical data initiatives and delivering impactful solutions. Promoted to Senior Engineer within 18 months, leading AI-driven data architecture projects and enterprise-level initiatives.
                    </p>

                    <div className="p-6 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                        <p className="text-base text-zinc-700 dark:text-zinc-300">
                           Core expertise in Spark, AWS and Big Data technologies, with hands-on experience in building automated deployment pipelines and driving system performance optimization.
                        </p>
                    </div>

                    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <ExpertiseCard
                            title="Serverless Architecture"
                            description="Expertise in AWS Lambda and serverless computing patterns"
                        />
                        <ExpertiseCard
                            title="System Design"
                            description="Building scalable and maintainable microservices"
                        />
                        <ExpertiseCard
                            title="DevOps"
                            description="CI/CD pipelines and automated deployment"
                        />
                    </div> */}
                </div>
            </div>
        </div>
    </div>
);

// Expertise Card Component
const ExpertiseCard = ({ title, description }) => (
    <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">{title}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
);

// Stack Section
const StackSection = () => (
    <div className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SkillCard
                    icon={Code}
                    title="Languages & Libraries"
                    skills={[
                        'Python', 'SQL', 'PySpark', 'Scala',
                        'CPP', 'LateX'
                    ]}
                />
                <SkillCard
                    icon={Cloud}
                    title="Cloud Services"
                    skills={[
                        'S3', 'DynamoDB',
                        'Amazon RDS', 'Amazon EC2'
                    ]}
                />
                <SkillCard
                    icon={Database}
                    title="Databases"
                    skills={[
                        'MS SQL', 'MySQL', 'Redis',
                        'DynamoDB'
                    ]}
                />
                <SkillCard
                    icon={Terminal}
                    title="DevOps & Tools"
                    skills={[
                        'Git', 'BitBucket', 'Jenkins',
                        'CI/CD'
                    ]}
                />
            </div>
        </div>
    </div>
);

// Skill Card Component
const SkillCard = ({ icon: Icon, title, skills }) => (
    <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300">
        <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">{title}</h3>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-full"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

// Experience Section
const ExperienceSection = () => (
    <div className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative">
                <div className="absolute left-0 md:left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 to-violet-500/50" />
                <div className="space-y-12">
                    <ExperienceCard
                        period="April 2025 - Present"
                        title="Senior Big Data Engineer"
                        company="Axis Bank - BIU"
                        achievements={[
                            "Designed and deployed a Spark job monitoring and Data Quality framework for auditing and performance tracking.",
                            "Maintained a centralized job master to analyze run history, optimize resources, and reduce job failures.",
                            "Built a reusable encryption/decryption module to securely handle PII data across banking systems.",
                            "Ensured data security and compliance across all customer-facing applications.",
                            "Developed propensity models to identify high-potential customers and enhance outreach efficiency."
                        ]}
                    />
                    <ExperienceCard
                        period="July 2023 - february 2025"
                        title="Big Data Engineer"
                        company="Axis Bank - BIU"
                        achievements={[
                            "Optimized Kafka streaming pipelines for ingesting real-time credit card transaction data, reducing data latency by 30%.",
                            "Enhanced fraud detection systems through faster and more reliable data availability.",
                            "Developed ETL workflows using Informatica, PySpark, AWS, and SQL to support BI dashboards and ML models.",
                            "Reduced legacy credit card base release TAT from 20 hours to 4 hours through automation.",
                            "Led the development of the Credit Card Acquisition Data Mart, integrating CASA logic and enabling advanced analytics and reporting via ELK and Power BI."
                        ]}
                    />
                </div>
            </div>
        </div>
    </div>
);

// Experience Card Component
const ExperienceCard = ({ period, title, company, achievements }) => (
    <div className="relative flex flex-col md:flex-row group">
        <div className="w-full md:w-1/4 text-right mb-4 md:mb-0 md:pr-8">
            <div className="sticky top-24">
                <span className="text-base font-medium text-zinc-600 dark:text-zinc-400">
                    {period}
                </span>
            </div>
        </div>

        <div className="absolute left-0 md:left-1/4 -translate-x-1/2 top-0 w-3 h-3 rounded-full 
                      border-2 border-blue-500 bg-white dark:bg-zinc-900 
                      transform group-hover:scale-125 transition-transform duration-200" />

        <div className="md:w-3/4 md:pl-8">
            <div className="p-6 rounded-xl bg-white dark:bg-zinc-900/50 
                          border border-zinc-200 dark:border-zinc-800 
                          shadow hover:shadow-md transition-all duration-300">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                    {title}
                </h3>
                <p className="text-base font-medium text-blue-600 dark:text-blue-400 mb-4">
                    {company}
                </p>
                <ul className="space-y-3">
                    {achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="flex-none w-1 h-1 mt-2.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
                            <p className="text-sm text-zinc-700 dark:text-zinc-300">
                                {achievement}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

// Projects Section
const ProjectsSection = () => (
    <div className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard
                    title="ChainSafe"
                    description="This project uses customer data and machine learning to build a predictive model that identifies clients at high risk of leaving the bank. By analyzing key factors like age and account balance, the model helps the bank create targeted strategies to improve customer retention."
                    technologies={['Next.js', 'TypeScript', 'Tailwind CSS', 'React', 'AST']}
                    links={[
                        {
                            url: 'https://github.com/dasariumamahesh/chainsafe',
                            icon: Github,
                            label: 'GitHub'
                        },
                        {
                            url: '/chainsafe',
                            icon: ExternalLink,
                            label: 'Live Demo'
                        },
                        {
                            url: 'https://www.npmjs.com/package/chainsafe',
                            icon: Package,
                            label: 'NPM'
                        }
                    ]}
                />
                {/* Add more ProjectCard components as needed */}
            </div>
        </div>
    </div>
);

// Project Card Component
const ProjectCard = ({ title, description, technologies, links }) => (
    <div className="group relative p-6 bg-white dark:bg-zinc-900/50 backdrop-blur-sm rounded-xl 
                  border border-zinc-100/50 dark:border-zinc-800/50
                  shadow-sm hover:shadow-md transition-all duration-300">
        <div className="absolute -inset-px bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl opacity-0 
                    group-hover:opacity-10 transition-opacity duration-300 blur-sm" />

        <div className="relative space-y-4">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{title}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{description}</p>

            <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 text-sm rounded-full bg-blue-100/50 dark:bg-blue-900/20 
                                     text-blue-700 dark:text-blue-300">
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex gap-4 pt-2">
                {links.map(({ url, icon: Icon, label }) => (
                    <a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 
                                 transition-colors duration-200"
                    >
                        <div className="flex items-center gap-1">
                            <Icon className="h-5 w-5" />
                            <span className="text-sm font-medium">{label}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </div>
);

const ContactSection = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formState,
                    to: 'dasarijagadeesh789@gmail.com'
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setFormState({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }
        } catch (error) {
            console.error('Failed to send message:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="py-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Message */}
                    <div className="sticky top-24 space-y-6">
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                            Get in touch, lets talk.
                        </h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400">
                            Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology and development. I am always excited to connect with fellow developers and tech enthusiasts!
                        </p>
                        <div className="pt-6">
                            <p className="text-base text-zinc-600 dark:text-zinc-400">
                                Looking forward to hearing from you and exploring how we can work together to create something amazing.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6">
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        className="w-full px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-500"
                                        value={formState.name}
                                        onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        className="w-full px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-500"
                                        value={formState.email}
                                        onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                                        Subject
                                    </label>
                                    <input
                                        id="subject"
                                        type="text"
                                        required
                                        className="w-full px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-500"
                                        value={formState.subject}
                                        onChange={(e) => setFormState(prev => ({ ...prev, subject: e.target.value }))}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        className="w-full px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-500"
                                        value={formState.message}
                                        onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-200"
                                >
                                    {isLoading ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        ) : (
                            <div className="text-center py-8 space-y-4">
                                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                                    Hey, thanks for reaching out!
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400">
                                    Expect a response soon.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Main Portfolio Component
const DeveloperPortfolio = () => {
    const [activeTab, setActiveTab] = useState('about');

    // Function to render the active tab content
    const renderTabContent = () => {
        switch (activeTab) {
            case 'about':
                return <AboutSection />;
            case 'tech stack':
                return <StackSection />;
            case 'experience':
                return <ExperienceSection />;
            case 'projects':
                return <ProjectsSection />;
            case 'contact':
                return <ContactSection />;
            default:
                return <AboutSection />;
        }
    };

    return (
        <TabContext.Provider value={{ activeTab, setActiveTab }}>
            <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
                <DarkModeToggle />
                <HeroSection />
                <Navigation />

                <main className="transition-all duration-300 ease-in-out">
                    {renderTabContent()}
                </main>

                <Footer />
            </div>
        </TabContext.Provider>
    );
};

export default DeveloperPortfolio;
