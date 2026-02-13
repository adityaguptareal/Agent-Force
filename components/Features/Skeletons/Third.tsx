import ShieldIllustration from '@/components/illustration/General'
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background'
import React from 'react'

export default function SkeletonThird() {
    return (
        <div className='relative w-full h-full flex items-center justify-center'>
            <ShieldIllustration />
             <DottedGlowBackground
                className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 dark:opacity-100"
                opacity={2}
                gap={10}
                radius={1.6}
                colorLightVar="--color-neutral-500"
                glowColorLightVar="--color-neutral-600"
                colorDarkVar="--color-neutral-500"
                glowColorDarkVar="--color-sky-800"
                backgroundOpacity={0}
                speedMin={0.3}
                speedMax={1.6}
                speedScale={1}
            />
        </div>
    )
}
