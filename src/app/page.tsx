import DiscoverSection from '@/components/discover-section';
import HeroSection from '@/components/hero-section';
import HowItWorks from '@/components/how-it-works';
import OurStory from '@/components/our-story';
import Reviews from '@/components/pages/reviews-section';
import PickupSection from '@/components/ui/pickup-section';
import Why from '@/components/why-choose-purple';

export default function Home() {
	return (
		<main>
			<HeroSection />
			<PickupSection />
			<DiscoverSection />
			<OurStory />
			<HowItWorks />
			<Reviews />
			<Why />
		</main>
	);
}
