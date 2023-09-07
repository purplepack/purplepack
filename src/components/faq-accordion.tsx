import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQS } from '@/lib/data';

export function FaqAccordion() {
	return (
		<div className=''>
			<Accordion
				type='single'
				collapsible
				className='w-full'
				defaultValue={FAQS[0].category}
			>
				{FAQS.map((faqs, k) => (
					<AccordionItem
						className='border-primary'
						value={faqs.category}
						key={k}
					>
						<AccordionTrigger className='font-bold md:text-lg text-primary'>
							{faqs.category}
						</AccordionTrigger>
						<AccordionContent>
							<div className='px-5 md:px-10'>
								<Accordion
									type='single'
									collapsible
									className='w-full'
									defaultValue={
										faqs.questions[0].question
									}
								>
									{faqs.questions.map((faq, i) => (
										<AccordionItem
											value={faq.question}
											key={i}
											className=' border-b-0'
										>
											<AccordionTrigger>
												{faq.question}
											</AccordionTrigger>
											<AccordionContent>
												{faq.answer}
											</AccordionContent>
										</AccordionItem>
									))}
								</Accordion>
							</div>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}
