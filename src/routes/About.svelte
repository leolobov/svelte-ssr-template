<script>
    let text = 'About';
</script>

<svelte:head>
    <title>{text}</title>
</svelte:head>

<h1>{text}</h1>
<input type="text" bind:value={text}>

<style>
    h1{
        color: red;
        content: 'about';
    }
</style>