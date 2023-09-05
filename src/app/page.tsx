import DiscoverSection from '@/components/discover-section';
import HeroSection from '@/components/hero-section';
import PickupSection from '@/components/ui/pickup-section';

export default function Home() {
	return (
		<main>
			<HeroSection />
			<PickupSection />
			<DiscoverSection />
		</main>
	);
}
