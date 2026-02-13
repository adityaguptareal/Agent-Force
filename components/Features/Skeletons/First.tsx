import { cn } from '@/lib/utils'
import { IconCircleDashedCheck, IconClock, IconExclamationCircle, IconPrison, IconRipple } from '@tabler/icons-react'
import React from 'react'

export default function SkeletonOne() {
    return (
        <div className='perspective-distant translate-x-20 translate-y-10 h-full w-full ' style={{ "transform": "rotateZ(9deg) rotateY(-20deg) rotateX(30deg) scale(1.2)" }}>
            <SkeletonCard className='absolute top-5 left-4 z-10' icon={<IconPrison className='size-4' />} title='Risk Analysis' description='Creates clear, ready-to-use campaign briefs using product info, audience data and past results.' badge={<Badge text='40s' variants='warning' />} />


            <SkeletonCard className='absolute top-16 left-7 z-10' icon={<IconExclamationCircle className='size-4' />} title='Issue Tracker' description='Creates clear, ready-to-use campaign briefs using product info, audience data and past results.' badge={<Badge text='10s' variants='success' />} />


            <SkeletonCard className='absolute top-28 left-10 z-10' icon={<IconCircleDashedCheck className='size-4' />} title='Campaign Planner' description='Creates clear, ready-to-use campaign briefs using product info, audience data and past results.' badge={<Badge text='120s' variants='danger' />} />

            
        </div>
    )
}

const SkeletonCard = ({className, icon, title, description, badge }: {
    icon: React.ReactNode,
    title: string,
    description: string,
    className:string,
    badge: React.ReactNode
}) => {
    return (
        <div className={cn('max-w-[85%] h-fit my-auto mx-auto p-3 w-full rounded-2xl border-neutral-200 shadow-2xl bg-neutral-100 border-2 dark:border-neutral-700', className)}>
            <div className='flex gap-3'>
                {icon}
                <p className='font-bold text-sm'>
                    {title}
                </p>
                {badge}
            </div>
            <p className='text-sm text-neutral-400/80 font-normal mt-3 dark:text-neutral-400'>
                {description}
            </p>
            <div className='flex items-center gap-2 flex-wrap'>
                <Tag text='Google Ads' />
                    <Tag text='SaaS' />
                    <Tag text='Content' />
                </div>
        </div>
    )
}
// const SkeletonCard = ({ icon, title, description, badge }: {
//     icon: React.ReactNode,
//     title: string,
//     description: string,
//     badge: React.ReactNode
// }) => {
//     return (
//         <div className='max-w-[90%] mx-auto p-3 w-full rounded-lg border border-neutral-500 dark:border-neutral-700'>
//             <div className='flex gap-3'>
//                 <IconCircleDashedCheck className='size-4' />
//                 <p className='font-bold text-sm'>
//                     Campaign Planner
//                 </p>
//                 <Badge text='120s' variants='danger' />
//                 <p className='text-sm text-neutral-500 font-medium mt-3 dark:text-neutral-400'>
//                     Creates clear, ready-to-use campaign briefs using product info, audience data and past results.
//                 </p>
//                 <div className='flex items-center gap-2 flex-wrap'>
//                     <Tag text='Google Ads' />
//                     <Tag text='SaaS' />
//                     <Tag text='Content' />
//                 </div>
//             </div>
//         </div>
//     )
// }

const Tag = ({ text }: { text: string }) => (
    <div className="px-2 py-1 rounded-sm bg-neutral-200 dark:bg-neutral-700 text-xs">
        {text}
    </div>
)

const Badge = ({ variants, text }: { variants: "default" | "success" | "warning" | "danger", text: string }) => {


    return (
        <div className={cn("p-1 py-0.5 rounded-full flex items-center w-fit gap-1",
            variants === "default" && "bg-neutral-200/50  dark:bg-neutral-800",
            variants === "success" && "bg-green-300/50 border border-green-400 text-green-500 dark:bg-green-500",
            variants === "warning" && "bg-yellow-300/50 border border-yellow-400 text-yellow-500 dark:bg-yellow-500",
            variants === "danger" && "border border-red-400 text-red-500 bg-red-300/10 dark:bg-red-500"
        )}>
            <IconClock className={cn("size-3")} />
            <IconRipple className={cn("size-3")} />
            <p className='font-normal text-xs'>
                {text}
            </p>
        </div>
    )
}