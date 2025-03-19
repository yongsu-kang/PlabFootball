<template>
<nav class="top--menu">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/stadiums/add">Stadium Add</RouterLink>
    <RouterLink to="members">MemberList</RouterLink>
    <RouterLink to="/signup">Sign Up</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
</nav>
<main>
    <RouterView />
</main>
</template>

<style>
.top--menu {
    display: flex;
    justify-content: space-between;
    margin-top: 11px;
}

</style>