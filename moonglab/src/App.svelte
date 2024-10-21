<script>
  	import Article from "./components/Article.svelte";
</script>


<main>
	<h1>Moonglab</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<div class="row">
	<ol>
		<ul><Article link="moonglab/src/routes/CompoundInterestCalculator.svelte"/></ul>
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
		margin: 0 4px; 
		padding: 0;
		gap: 0;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
