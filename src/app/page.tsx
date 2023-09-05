import { Container } from '@/components/layout/container';
import Product from '@/components/pages/product';
import { Button } from '@/components/ui/button';

export default function Home() {
	return (
		<Container>
			<Button>This is a boy</Button>
			<Product/>
		</Container>
	);
}
