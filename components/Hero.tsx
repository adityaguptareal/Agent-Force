import React from 'react'
import Container from './Container'
import Heading from './heading'
import Subheading from './subheading'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import LandingImages from './landing-images'

export default function Hero() {
    return (
        <div className='pt-10 md:pt-20 lg:pt-32'>
            <Container>
                <Heading tag="h1">
                    Agent that do the work <br />
                    Approvals that keeps your work safe.
                </Heading>
                <Subheading className='py-8'>
                    Deploy AI agents that plan, act through your tools, and report
                    outcomes—without changing how your teams work.
                </Subheading>
                <div className='flex items-center gap-6'>

                    <Button className='hover:drop-shadow-2xl hover:shadow-primary'>
                        Start your free trial
                    </Button>
                    <Button asChild variant={'outline'}>
                        <Link href="#">View Role Based Demos</Link>
                    </Button>
                </div>

               
                   {/* <LandingImages /> */}
               
            </Container>
        </div>
    )
}