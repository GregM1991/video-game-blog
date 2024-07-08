<script lang="ts">
	import type { Content } from '@prismicio/client';

	export let settings: Content.SettingsDocument;
</script>

<footer class="text-slate-600">
	<div class="container">
		<div class="name">
			<a
				href="/"
				class="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
			>{settings.data.name}</a>
			<span class="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline">/</span>
			
		</div>
		<div class="navigation">Profile</div>
		<div class="socials">Tiwtter</div>
	</div>
</footer>
