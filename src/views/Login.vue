<script setup>
import Input from '@/components/Input.vue'
import Typography from '@/components/Typography.vue'

import { ref } from "vue"
import { useRouter } from "vue-router"

const email = ref("")
const password = ref("")
const router = useRouter()

const login = () => {
  if (email.value === "boris@gmail.com" && password.value === "123456") {

    localStorage.setItem("auth", "true")
    router.push("/accueil")
  } else {
    
    alert("Email ou mot de passe incorrect")

  }
}

</script>
<template>
  <div class="auth">
    <form class="form auth-form">
      <Typography tag="h2" text="Connexion"/>
      <div class="form_item">
        <label for="email">Email</label>
        <input v-model="email" tag="input"type="email" name="email" />
      </div>
      <div class="form_item">
        <label for="password">Password</label>
        <input v-model="password" tag="input"type="password" name="password" />
      </div>
      <div class="form_item">
        <RouterLink @click.prevent="login()" to="/">Se connecter</RouterLink>
      </div>
    </form>
  </div>
</template>

<style scoped>
input {
  width: 100%;
  height: 40px;
  border-radius: 6px;
  padding-left: 10px;
  border: none;
}

input:focus {
  outline: none;
}

/* login */
.auth {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-form {
  width: 500px;
  background-color: #eee;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0px 0px 30px 0px #0000004e;
}
.auth-form h2 {
  text-align: center;
  margin-bottom: 25px;
  font-size: 2rem;
}
.form_item {
  margin-bottom: 20px;
}
.form_item label {
  margin-bottom: 3px;
}
.form_item:last-child {
  text-align: center;
  margin-top: 30px;
}
.form_item:last-child button {
  padding: 12px;
  background-color: blue;
  color: #fff;
  border: transparent;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
}
.form_item:last-child button:hover {
  background-color: rgba(16, 16, 150, 0.861);
}
</style>
