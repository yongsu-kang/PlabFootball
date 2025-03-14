<template>
<h1>Members Component 호출</h1>
<div v-for="(member, index) in members" :key="index">
    <div>
        <h2>{{ member.name }}</h2>
        <a>{{ member.id }}</a>
        <a>{{ member.email }}</a>
    </div>
</div>
</template>

<script lang="ts">
import axios from 'axios';

export default {
    name: 'MemberList',
    data() {
        return {
            members: [],
        }
    },
    methods: {
        get() {
            console.log("Get called");
            this.axios.get("/api/members").then(response => {
                this.members = response.data;
                console.log(response.data);
                console.log(this.members);
            });
        },
    },
    mounted() {
        this.get();
    }
}
</script>

<style lang="scss" scoped>

</style>
