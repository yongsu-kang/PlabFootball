<template>
    <h1>Plab FootBall Project</h1>
<p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
</p>
<nav>
    <RouterLink to="/">Home</RouterLink>
    <a> | </a>
    <RouterLink to="/stadiums/add">Stadium Add</RouterLink>
    <a> | </a>
    <RouterLink to="/signup">Sign Up</RouterLink>
    <a> | </a>
    <RouterLink to="/login">Login</RouterLink>
</nav>
<main>
    <RouterView />
</main>
</template>
