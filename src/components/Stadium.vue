<template>
<h1>Stadium Component</h1>
    <div v-for="(stadium, index) in stadiums" :key="index">
        <h2>{{ stadium.name }}</h2>
        <p>{{ stadium.location }}</p>
        <div v-for="(field, index) in stadium.fields" :key="index">
            <h3>{{ field.name }}</h3>
            <div v-for="(r_field, index) in field.rentalFields" :key="index">
                <a>{{ r_field.startTime }}</a><a> | </a><a>{{ r_field.endTime }}</a>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'Stadium',
        data() {
            return {
                stadiums: []
            }
        },
        methods: {
            getStadiums() {
                console.log('Fetching stadiums...')
                this.axios.get('/api/stadiums').then(response => {
                    this.stadiums = response.data
                }).catch(error => {
                    console.error(error)
                })
                console.log('Stadiums fetched successfully')
            }
        },
        mounted() {
            this.getStadiums()
        }
    }
</script>

<style lang="scss" scoped>

</style>