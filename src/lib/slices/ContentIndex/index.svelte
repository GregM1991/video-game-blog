<script lang="ts">
	import { Bounded, Heading } from '$lib/components';
	import { type Content, isFilled } from '@prismicio/client';
	import { PrismicRichText } from '@prismicio/svelte';
	import ContentList from './ContentList.svelte';

	export let slice: Content.ContentIndexSlice;
	export let items: Array<Content.BlogpostDocument> | Array<Content.ProjectDocument>;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<Heading size="xl" class="mb-8">
		{slice.primary.heading}
	</Heading>
	{#if isFilled.richText(slice.primary.description)}
		<div class="prose prose-xl prose-invert mb-10">
			<PrismicRichText field={slice.primary.description} />
		</div>
	{/if}
	<ContentList
		{items}
		fallbackItemImage={slice.primary.fallback_item_image}
		viewMoreText={slice.primary.view_more_text}
	/>
</Bounded>
