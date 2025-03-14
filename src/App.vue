<template>
<h1>Hello App!</h1>
<p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
</p>
<nav>
    <RouterLink to="/">Home</RouterLink>
    <a> | </a>
    <RouterLink to="/about">About</RouterLink>
    <a> | </a>
    <RouterLink to="/stadiums/add">Stadium Add</RouterLink>
</nav>
<main>
    <RouterView />
</main>
</template>
