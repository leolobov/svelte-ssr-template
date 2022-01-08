<script>
	let count = 0;

	function handleClick() {
		count += 1;
	}
</script>

<svelte:head>
    <title>Blog</title>
</svelte:head>

<h1>Blog</h1>

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>

<style>
    h1{
        color: green;
        content: 'blog';
    }
</style>