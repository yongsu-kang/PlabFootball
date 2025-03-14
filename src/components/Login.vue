<template>
<div class="login">
    <h2>로그인</h2>
    <form @submit.prevent="handleSubmit">
        <div>
            <label for="email">이메일:</label>
            <input type="email" id="email" v-model="email" required />
        </div>
        <div>
            <label for="password">비밀번호:</label>
            <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">로그인</button>
    </form>
    <div v-if="error">{{ error }}</div>
</div>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue';
import axios from 'axios';

export default defineComponent({
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            error: ''
        };
    },
    methods: {
        async handleSubmit() {
            try {
                const response = await axios.post('http://localhost:8080/api/auth/login', {
                    email: this.email,
                    password: this.password
                });
                console.log('로그인 성공:', response.data);
                // 로그인 성공 처리 (예: 토큰 저장, 리다이렉션 등)
            } catch (error) {
                console.error('로그인 실패:', error);
                this.error = '로그인에 실패했습니다. 다시 시도해주세요.';
            }
        }
    }
});
</script>

<style scoped>
.login {
    max-width: 400px;
    margin: 0 auto;
    padding: 1em;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

label {
    display: block;
    margin-bottom: 0.5em;
}

input {
    width: calc(100% - 20px);
    padding: 0.5em;
    margin-bottom: 1em;
    border: 1px solid #ccc;
    border-radius: 3px;
}

button {
    padding: 0.7em;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>
