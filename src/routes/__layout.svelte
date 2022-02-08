<script lang="ts">
	import '../app.css';
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/env';

	// Only available in client-side onMount
	let header$: Element = null;
	let main$: Element = null;
	let observer: IntersectionObserver = null;

	onMount(() => {
		observer = new IntersectionObserver(
			([e]) => header$.classList.toggle('shadow-md', e.isIntersecting),
			{
				threshold: [0],
				rootMargin: '0px 0px -100% 0px'
			}
		);
		observer.observe(main$);
	});
	onDestroy(() => {
		if (browser) {
			observer.unobserve(main$);
		}
	});
</script>

<header
	id="main-header"
	class="flex flex-row
							 w-full
							 items-center justify-between
							 p-4
							 sticky top-0 bg-white/90 transition-shadow"
	bind:this={header$}
>
	<div class="flex">
		<a class="flex items-center justify-center" href="/">
			<img
				width="36"
				height="36"
				src="/static/favicon.svg"
				alt="t2badminton logo"
				title="Next-gen shopping with t2badminton"
			/>
			<h2 class="mx-4 text-2xl font-semibold">t2badminton</h2>
		</a>
	</div>

	<nav>
		<ul class="flex flex-row">
			<li>
				<a
					class="bg-transparent hover:bg-gray-800
                  text-lg font-semibold text-gray-800 hover:text-white
                  py-2 px-4
                  border border-gray-800 hover:border-transparent rounded"
					href="/shop"
				>
					Shop
				</a>
			</li>
		</ul>
	</nav>
</header>

<main class="flex flex-col flex-1 w-full" bind:this={main$}>
	<slot />
</main>

<footer
	class="flex flex-col-reverse sm:flex-row
							 w-full
							 items-center justify-between
							 py-4"
>
	<div class="flex flex items-center justify-center">
		<img
			width="24"
			height="24"
			src="/static/favicon.svg"
			alt="t2badminton logo"
			title="Next-gen shopping with t2badminton"
		/>
		<p class="mx-4 font-semibold">t2badminton - all right reserved.</p>
	</div>

	<nav>
		<ul class="flex flex-row">
			<li><a class="px-4 py-2 text-lg" href="https://t2delivery.com">Shop</a></li>
			<li><a class="px-4 py-2 text-lg" href="/lien-he">Liên hệ</a></li>
		</ul>
	</nav>
</footer>
