import DiscoverSection from '@/components/discover-section';
import HeroSection from '@/components/hero-section';
import HowItWorks from '@/components/how-it-works';
import OurStory from '@/components/our-story';
import PickupSection from '@/components/ui/pickup-section';

export default function Home() {
	return (
		<main>
			<HeroSection />
			<PickupSection />
			<DiscoverSection />
			<OurStory />
			<HowItWorks />
		</main>
	);
}
