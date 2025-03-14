<template>
<div class="signup-container">
    <h1>회원가입</h1>
    <form @submit.prevent="handleSubmit">
        <div class="form-group">
            <label for="name">이름</label>
            <input v-model="name" type="text" id="name" required />
        </div>
        <div class="form-group">
            <label for="email">이메일</label>
            <input v-model="email" type="email" id="email" required />
        </div>
        <div class="form-group">
            <label for="password">비밀번호</label>
            <input v-model="password" type="password" id="password" required />
        </div>
        <button type="submit">회원가입</button>
    </form>
</div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
        };
    },
    methods: {
        async handleSubmit() {
            const payload = {
                name: this.name,
                email: this.email,
                password: this.password,
            };

            try {
                const response = await axios.post('http://localhost:8080/api/auth/signup', payload);
                console.log(response);
            } catch (error) {
                console.error(error);
                alert('회원가입 중 오류가 발생했습니다.');
            }
        },
    },
};
</script>

<style>
.signup-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background: #fff;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
}

.form-group input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
}

button {
    padding: 10px 15px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background: #0056b3;
}
</style>
