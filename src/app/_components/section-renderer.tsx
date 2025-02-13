import { AboutSection, Section } from '@/types/sanity'
import Image from 'next/image'
import React from 'react'

export interface SectionRendererProps {
    section: Section
}

const SectionRenderer = (props: SectionRendererProps) => {
    const { section } = props

    switch (section.sectionType) {
        case 'hero':
            return <Hero section={section} />
        case 'about':
            return <About section={section} />
        case 'workExperience':
            console.log(section)
            return <WorkExperience section={section} />
        case 'projects':
            return <Projects section={section} />
        case 'skills':
            return <Skills section={section} />
        case 'education':
            return <Education section={section} />
        case 'contact':
            return <Contact section={section} />
        default:
            return <div>Unknown section type: {section.sectionType}</div>
    }
}

export default SectionRenderer

export function TypographyH1({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {children}
        </h1>
    )
}

export function TypographyH2({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            {children}
        </h2>
    )
}

export function TypographyP({ children }: { children: React.ReactNode }) {
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            {children}
        </p>
    )
}


export function Hero({ section }: { section: Section & { sectionType: 'hero' } }) {
    return (
        <section className="scroll-m-20">
            <TypographyH1>{section.title}</TypographyH1>
            <TypographyH2>{section.description}</TypographyH2>
            <div>
                {section.cta && (
                    <a className="btn" href={section.cta.link}>
                        {section.cta.text}
                    </a>
                )}
            </div>
        </section>
    )
}

// Placeholder components for other sections
const About = ({ section }: {
    section: Section & {
        sectionType: 'about',
    }
}) => {
    const { personalInfo } = section.content[0]

    return (
        <section className="scroll-m-20">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                    <TypographyH1>{personalInfo.fullName}</TypographyH1>
                    <TypographyH2>{personalInfo.professionalTitle}</TypographyH2>
                    <TypographyP>{personalInfo.bio}</TypographyP>
                </div>
                <div>
                    <Image src={personalInfo.profileImage} alt={personalInfo.fullName}
                        width={400} height={400}
                    />
                </div>
            </div>
        </section>
    )
}

const WorkExperience = ({ section }: { section: Section & { sectionType: 'workExperience' } }) => (

    <section>
        <TypographyH1>{section.title}</TypographyH1>
        {section.content.map((content, index) => {
            const { workExperience } = content
            const startDate = new Date(workExperience.startDate).toLocaleDateString()
            const endDate = new Date(workExperience.endDate).toLocaleDateString()
            return (
                <div key={index}>
                    <TypographyH2>{workExperience.position}</TypographyH2>
                    <TypographyP>{workExperience.location}</TypographyP>
                    <TypographyP>{startDate} - {endDate}</TypographyP>
                    {/* <TypographyP>{workExperience.description}</TypographyP> */}
                    <ul>
                        {workExperience.description.map((description, index) => (
                            <li key={index}>{description}</li>
                        ))}
                    </ul>
                    <ul>
                        {workExperience.technologies?.map((technology, index) => (
                            <li key={index}>{technology.name}</li>
                        ))}
                    </ul>
                </div>
            )
        }
        )}
    </section>
)

const Projects = ({ section }: { section: Section }) => (
    <section>
        <TypographyH1>Projects Section</TypographyH1>
        <pre>{JSON.stringify(section, null, 2)}</pre>
    </section>
)

const Skills = ({ section }: { section: Section }) => (
    <section>
        <TypographyH1>Skills Section</TypographyH1>
        <pre>{JSON.stringify(section, null, 2)}</pre>
    </section>
)

const Education = ({ section }: { section: Section }) => (
    <section>
        <TypographyH1>Education Section</TypographyH1>
        <pre>{JSON.stringify(section, null, 2)}</pre>
    </section>
)

const Contact = ({ section }: { section: Section }) => (
    <section>
        <TypographyH1>Contact Section</TypographyH1>
        <pre>{JSON.stringify(section, null, 2)}</pre>
    </section>
)

