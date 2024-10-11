<script>
  import Article from "./components/Article.svelte";

	
</script>


<main>
	<h1>Moonglab</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<div class="row">
	<ol>
		<ul><Article link="https://apple.com"/></ul>
		<ul><Article link="https://apple.com"/></ul>
		<ul><Article link="https://apple.com"/></ul>
		<ul><Article link="https://apple.com"/></ul>
	</ol>
	<ol>
		<ul><Article link="https://apple.com"/></ul>
		<ul><Article link="https://apple.com"/></ul>
		<ul><Article link="https://apple.com"/></ul>
		<ul><Article link="https://apple.com"/></ul>
	</ol>
</div>
</main>



<style>
    /* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&display=swap'); */
	main {
		
		box-sizing: border-box;
		text-align: center;
		align-items: center;
	}

	h1 {
		/* color: #ff3e00; */
		font-weight: 500;
		font-size: 72px;
		text-transform: uppercase;
	}

	ol {
		padding-inline-start: 0px;
	}
	.row
	{
		display: flex;
		flex-direction: row;
		justify-content: center;
		/* align-items: center; */
	}

	.row ul {
		margin: 0 4px; /* 리스트 항목 간의 간격을 좁히기 위해 추가 */
		padding: 0;
		gap: 0;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>