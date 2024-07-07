import HeaderSections from '@/components/home/header-sections'
import IntroduceSections from '@/components/home/introduce-sections'
import ProductSections from '@/components/home/product-sections'
import TimelineSections from '@/components/home/timeline-sections'
import TeamSections from '@/components/home/team-sections'


export default function Home() {
  return (
    <main className="w-full min-h-full">
      <HeaderSections />
      <IntroduceSections />
      <ProductSections />
      <TimelineSections />
      <TeamSections />
    </main>
  )
}
