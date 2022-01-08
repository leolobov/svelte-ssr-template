<script>
  import { Router, Route } from "svelte-routing";
  import { onMount } from 'svelte';

  import NavLink from "./components/NavLink.svelte";
  import Home from "./routes/Home.svelte";
  import About from "./routes/About.svelte";
  import Blog from "./routes/Blog.svelte";

  // Used for SSR. A falsy value is ignored by the Router.
  export let url;

  export let auth;

  console.log(auth);
  console.log(url);
</script>

<Router url="{url}">
  <nav>
    <h1>{auth}</h1>
    <h2>{url}</h2>
    <NavLink to="/">Home</NavLink>
    <NavLink to="about">About</NavLink>
    {#if auth}
      <NavLink to="blog">Blog</NavLink>
    {/if}
  </nav>
  <div>
    <Route path="about" component="{About}" />
    {#if auth}
      <Route path="blog" component="{Blog}" />
    {/if}
    <Route path="/" component="{Home}" />
  </div>
</Router>
