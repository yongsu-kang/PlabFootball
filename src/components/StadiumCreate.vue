<template>
<h2>Stadium Create Component</h2>
<div class="stadium-create-container">
    <form @submit.prevent="createStadium">
        <div class="form-group">
            <label for="name">경기장 이름</label>
            <input v-model="name" type="text" id="name" required />
        </div>
        <div class="form-group">
            <label for="location">경기장 주소</label>
            <input v-model="location" type="text" id="location" required />
        </div>
        <div class="form-group">
            <label for="parking">주차장 {{parking}}</label>
            <input type="checkbox" v-model="parking" id="parking" />
        </div>
        <div class="form-group">
            <label for="toilet">화장실 {{toilet}}</label>
            <input type="checkbox" v-model="toilet" id="toilet" />
        </div>
        <div class="form-group">
            <label for="vest">조끼 {{vest}}</label>
            <input type="checkbox" v-model="vest" id="vest" />
        </div>
        <div class="form-group">
            <label for="ball">공대여 {{ball}}</label>
            <input type="checkbox" v-model="ball" id="ball" />
        </div>
        <div class="form-group">
            <label for="region">지역</label>
            <select v-model="region" id="region">
                <option value="">선택하세요</option>
                <option value="1">경기장1</option>
                <option value="2">경기장2</option>
                <option value="3">경기장3</option>
                <option value="4">경기장4</option>
            </select>
        </div>
        <button type="submit">경기장 등록</button>
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
            parking: false,
            toilet: false,
            vest: false,
            ball: false,
            region: 'SEOUL',
        }
    },
    methods: {
        async createStadium() {
            const stadiumData = {
                name: this.name,
                location: this.location,
                parking: this.parking,
                toilet: this.toilet,
                vest: this.vest,
                ball: this.ball,
                region: this.region,
            };
            console.log(stadiumData);
            try {
                const response = await axios.post('http://localhost:8080/api/stadiums', stadiumData);
                console.log(response);
            } catch (error) {
                this.errorMessage = error.response.data.message;
                console.error(error);
            }
        },
    },
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
