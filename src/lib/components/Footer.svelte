<script lang="ts">
	import { type Content, isFilled } from '@prismicio/client';
	import { PrismicLink } from '@prismicio/svelte';
	import IconGithub from '~icons/fa-brands/github';
	import IconLinkedIn from '~icons/fa-brands/linkedin'
	export let settings: Content.SettingsDocument;
</script>

<footer class="text-slate-600">
	<div class="container mx-auto flex mt-20 flex-col items-center justify-between gap-6 sm:flex-row">
		<div
			class="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start"
		>
			<a
				href="/"
				class="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
				>{settings.data.name}</a
			>
			<span
				class="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
				aria-hidden="true">/</span
			>
			<p class="text-sm text-slate-300">
				© {new Date().getFullYear()}
				{settings.data.name}
			</p>
		</div>
		<div class="navigation" aria-label="Footer Navigation">
			<ul class="flex items-center gap-1">
				{#each settings.data.nav_item as { label, link }, index}
					<li>
						<PrismicLink
							field={link}
							class="block px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:text-yellow-400"
							>{label}</PrismicLink
						>
					</li>
					{#if index !== settings.data.nav_item.length - 1}
						<span class="text-slate-400 text-4xl font-thin leading-[0]" aria-hidden="true">/</span>
					{/if}
				{/each}
			</ul>
		</div>
		<div class="socials text-slate-100 inline-flex justify-center sm:justify-end">
			{#if isFilled.link(settings.data.github_link)}
				<PrismicLink
					field={settings.data.github_link}
					class="p-2 text-2xl text-slate-300 transform transition-all duration-150 hover:scale-125 hover:text-yellow-400"
					aria-label={settings.data.name + ' on GitHub'}
				>
					<IconGithub />
				</PrismicLink>
			{/if}
			{#if isFilled.link(settings.data.linkedin_link)}
				<PrismicLink
					field={settings.data.linkedin_link}
					class="p-2 text-2xl text-slate-300 transform transition-all duration-150 hover:scale-125 hover:text-yellow-400"
					aria-label={settings.data.name + ' on LinkedIn'}
				>
					<IconLinkedIn />
				</PrismicLink>
			{/if}
		</div>
	</div>
</footer>
