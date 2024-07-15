<script>
	import { SliceZone } from '@prismicio/svelte';
  import Heading from '$lib/components/Heading.svelte';
	import { components } from '$lib/slices';
	import Bounded from '$lib/components/Bounded.svelte';

	export let data;
</script>

<Bounded tag="article">
	<div class="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md:px-8 md:py-20">
    <Heading tag="h1">{data.page.data.title}</Heading>
		<SliceZone slices={data.page.data.slices} {components} />
	</div>
</Bounded>
