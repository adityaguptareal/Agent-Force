import React from 'react'
import Container from '../Container'
import Heading from '../heading'
import Subheading from '../subheading'
import Card, { CardContent, CardCTA, CardSkeleton, CardTitle } from './Card'
import { IconPlus } from '@tabler/icons-react'
import SkeletonOne from './Skeletons/First'
import SkeletonSecond from './Skeletons/Second'
import SkeletonThird from './Skeletons/Third'

export default function Features() {
    return (
        <Container className="py-10 md:py-20 lg:py-32">
            <div className="flex justify-between items-baseline-last">
                <Heading>
                    Built for Fast Moving <br /> Teams That Need Control.
                </Heading>
                <Subheading>
                    Deploy AI Agent that plan, act through tools, and report outcomes without changing how your team works
                </Subheading>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 md:my-20">
                <Card className='rounded-tl-3xl rounded-bl-3xl'>
                    <CardSkeleton >
                        <SkeletonOne />
                    </CardSkeleton>
                    <CardContent>
                        <CardTitle>Prebuilt Agents, Tuned to your workflows</CardTitle>
                        <CardCTA>
                            <IconPlus />
                        </CardCTA>
                    </CardContent>
                </Card>
                <Card>
                    <CardSkeleton>
                        <SkeletonSecond />
                    </CardSkeleton>
                    <CardContent>
                        <CardTitle>Automate Handoffs, Reduce Ops Friction</CardTitle>
                        <CardCTA>
                            <IconPlus />
                        </CardCTA>
                    </CardContent>
                </Card>
                <Card className='rounded-tr-3xl rounded-br-3xl'>
                    <CardSkeleton>
                        <SkeletonThird />
                    </CardSkeleton>
                    <CardContent>
                        <CardTitle>Secure by Design, Deploy with Confidence</CardTitle>
                        <CardCTA>
                            <IconPlus />
                        </CardCTA>
                    </CardContent>
                </Card>
            </div>
        </Container>
    )
}