<script lang="ts">
  import '../app.css';
</script>

<svelte:head>
  <script>
    // Manually send this script to browser! Instead of doing full-rehydrate
    document.addEventListener('DOMContentLoaded', () => {
      let header$ = document.querySelector('header');
      let main$ = document.querySelector('main');
      let observer = null;
      observer = new IntersectionObserver(
        ([e]) => header$.classList.toggle('shadow-md', e.isIntersecting),
        {
          threshold: [0],
          rootMargin: '0px 0px -100% 0px'
        }
      );
      observer.observe(main$);
    });
  </script>
</svelte:head>

<header
	id="main-header"
	class="flex flex-row
							 w-full
							 items-center justify-between
							 p-4
							 sticky top-0 bg-white/90 transition-shadow"
>
	<div class="flex">
		<a class="flex items-center justify-center" href="/">
			<img
				width="36"
				height="36"
				src="/favicon.svg"
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
					rel="external" href="https://t2delivery.com"
				>
					Shop
				</a>
			</li>
		</ul>
	</nav>
</header>

<main class="flex flex-col flex-1 w-full">
	<slot />
</main>

<footer
	class="flex flex-col-reverse sm:flex-row
							 w-full
							 items-center justify-between
							 px-2 py-4"
>
	<div class="flex flex items-center justify-center">
		<img
			width="24"
			height="24"
			src="/favicon.svg"
			alt="t2badminton logo"
			title="Next-gen shopping with t2badminton"
		/>
		<p class="mx-4 font-semibold">t2badminton - all right reserved.</p>
	</div>

	<nav>
		<ul class="flex flex-row">
			<li><a class="px-4 py-2 text-lg" rel="external" href="https://t2delivery.com">Shop</a></li>
			<li><a class="px-4 py-2 text-lg" href="/lien-he">Liên hệ</a></li>
		</ul>
	</nav>
</footer>
