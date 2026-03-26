import ShieldIllustration from '@/components/illustration/General'
import { DottedGlowBackground } from '@/components/ui/dotted-glow-background'
import React from 'react'

export default function SkeletonThird() {
    return (
        <div className='relative flex items-center justify-center w-full h-full '>
            <ShieldIllustration />
            <DottedGlowBackground
                className="pointer-events-none mask-radial-to-70% mask-radial-at-center"
                opacity={0.3}
                gap={10}
                radius={1.6}
                colorLightVar=" -- color-neutral-500"
                glowColorLightVar=" -- color-neutral-600"
                colorDarkVar=" -- color-neutral-500"
                glowColorDarkVar=" -- color-sky-800"
                backgroundOpacity={0}
                speedMin={0.5}
                speedMax={1.6}
                speedScale={1}

            />
        </div>
    )
}
