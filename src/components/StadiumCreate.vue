<template>
<h2>Stadium Create Component</h2>
<div class="stadium-create-container">
    <form>
        <div class="form-group">
            <label for="name">경기장 이름</label>
            <input v-model="name" type="text" id="name" required />
        </div>
        <div class="form-group">
            <label for="location">경기장 주소</label>
            <input v-model="location" type="text" id="location" required />
        </div>
        <button type="submit">회원가입</button>
    </form>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            name: '',
            location: '',
            errorMessage: ''
        }
    }
}
</script>

<style>
.stadium-create-container {
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
