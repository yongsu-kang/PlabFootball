<template>
<h1>Members Component 호출</h1>
<div class="list--match-schedule--container" v-for="(member, index) in members" :key="index">
    <ul>
        <li class="list--match-schedule--item">
            <a>
                <div class="list--match-schedule__time"><p>{{ member.id }}</p></div>
                <div class="list--match-schedule__info"><h3>{{ member.email }}</h3></div>
                <div class="label--match-option">{{ member.name }}</div>
                <button>비밀번호 변경</button>
                <button>회원 탈퇴</button>
            </a>
            
        </li>
        
    </ul>
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

<style>

.list--match-schedule--container {
    max-width: 1024px;
    margin: 0 auto;
}

ol, ul, li {
    list-style: none;
}

.list--match-schedule--item a {
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 20px 15px;
}
.list--match-schedule--item button{
    
}

.list--match-schedule--item .list--match-schedule__time {
    width: 15%;
    font-weight: 700;
    text-align: center;
    font-size: 15px;
}

.list--match-schedule--item .list--match-schedule__info {
    width: 62%;
    padding-right: 10px;
}

.label--match-option {
    font-size: 12px;
    color: #727f88;
    margin-top: 3px;
    display: flex
;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
}

.list--match-schedule--item .list--match-schedule__info h3 {
    font-size: 14px;
    font-weight: 400;
    word-break: keep-all;
}

</style>
