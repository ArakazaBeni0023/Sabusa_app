<script>
import axios from "axios";
export default {
    data() {
        return {
            Ibidandazwa: [],
            username: "",
            password: ''
        }
    },
    methods: {
        login() {
            let data = {
                'username': this.username,
                'password': this.password,
            }
            axios.post("http://127.0.0.1:8000/produit/", data).then((response) => {
                this.Ibidandazwa = response.data
            })
        }
    }
}
</script>
<template>
    <div class="Login">
        <form>
            <h1>Injira</h1>
            <div class="izina">
                <label>Izina:</label>
                <input type="text" v-model="username">
            </div>
            <div class="pswd">
                <label>Igiharuro kabanga:</label>
                <input type="password" v-model="password">
            </div>
            <button @click="login">Injira</button>
            <div>{{ Ibidandazwa }}</div>
            <!-- 
                in login function
                axios.get("http://127.0.0.1:8000/produit/").then((response) =>{
                    this.ibije = response.data
                })
             -->
        </form>
    </div>
</template>
<style scoped>
.Login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
}

form {
    width: 30%;
    padding: 3rem;
    border-radius: 10px;
    background: #212c38;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}


.izina,
.pswd {
    text-align: start;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

input {
    all: unset;
    background: #151e2783;
    padding: 1rem 1.5rem;
    border-radius: 5px;
    transition: background .5s ease;
}

input:hover {
    background: #151e27;
}

form button {
    all: unset;
    text-align: center;
    background: #095f91;
    color: #fff;
    padding: .8rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background .5s ease;
}

form button:hover {
    background: #097fc4;
}
</style>