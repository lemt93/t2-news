<script context="module">
	export const prerender = true;
	export const router = false;
	export const hydrate = true;
</script>

<svelte:head>
	<title>Liên hệ | t2 badminton</title>
</svelte:head>

<div class="flex flex-col flex-1 w-full items-center content-center">
	<img
		src="https://lh5.googleusercontent.com/p/AF1QipOYVmB-U0o-mwBVGfti4EPANswfZIKgMgz2qJVA=s1354-k-no"
		alt="Shop banner"
		title="Thông tin liên hệ"
		class="mb-4 w-full h-[25rem] object-cover"
		width="0"
		height="0"
	/>
	<h1 class="font-semibold text-4xl my-2">Thông tin liên hệ</h1>

	<div class="flex w-full mt-4 px-8">
		<div
			class="flex flex-col lg:flex-row w-full outline outline-1 outline-gray-100 rounded-b-sm shadow-md"
		>
			<div class="flex flex-col p-4 lg:min-w-[25rem] info">
				<ul>
					<li class="py-2">
						<strong>Địa chỉ:</strong>
						<ul class="pl-4 list-disc list-inside">
							<li>536 Cách Mạng Tháng Tám - P11 - Q3</li>
							<li>536 Cách Mạng Tháng Tám - P11 - Q3</li>
						</ul>
					</li>
					<li class="py-2">
						<strong>Email:</strong>
						<ul class="pl-4 list-disc list-inside">
							<li>hotro@t2badminton.com</li>
							<li>giaosi@t2badminton.com</li>
						</ul>
					</li>
					<li class="py-2">
						<strong>Điện thoại:</strong>
						<ul class="pl-4 list-disc list-inside">
							<li>0984039439 | Tư vấn - hỗ trợ</li>
							<li>0945212325 | Giao sỉ</li>
						</ul>
					</li>
					<li class="py-2">
						<strong>Facebook:</strong>
						<ul class="pl-4 list-disc list-inside">
							<li>https://facebook.com</li>
							<li>https://facebook.com</li>
						</ul>
					</li>
				</ul>
				<hr class="my-6" />
				<p>Đừng ngại nhé!</p>
				<p>Hãy liên hệ ngay khi có thắc mắc, nhu cầu cần tư vấn và giải đáp.</p>
			</div>
			<div class="flex flex-grow min-h-[35rem] px-2 max-w-full direction">
				<iframe
					class="w-full"
					loading="lazy"
					title="Google Map for direction"
					allowfullscreen
					src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBlhaqRNv_ytH-vXSz7YvuJ6SLbAG3_vw4
						&q=Space+Needle,Seattle+WA"
				/>
			</div>
		</div>
	</div>
</div>
