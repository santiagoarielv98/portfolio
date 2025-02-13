import { Section } from '@/types/sanity'
import React from 'react'

import { HeroSection } from '@/types/sanity'

export interface SectionRendererProps {
    section: Section
}

const SectionRenderer = (props: SectionRendererProps) => {
    const { section } = props
    console.log(section)
    return (
        <div>SectionRenderer</div>
    )
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


export interface HeroProps {
    section: Section & HeroSection
}

export function Hero({ section }: HeroProps) {

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

