import type { DateField } from '@prismicio/client';

export function formatDate(dateString: DateField): string {
	if (!dateString) return '';
	const date = new Date(dateString);

	// Options for formatting
	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	return new Intl.DateTimeFormat('en-AU', options).format(date);
}
