<script setup>
import { ref } from 'vue'
import ServiceList from '../components/ServiceList.vue'
//import BouttonDecouvrir from '../components/BouttonDecouvrir.vue'
import iconImg from '../assets/images/icon.png'
import BouttonDecouvrir from '@/components/BouttonDecouvrir.vue'
import Typography from '@/components/Typography.vue'
import Input from '@/components/Input.vue'


const n_name = ref('')
const n_mail = ref('')
const n_objet = ref('')
const n_message = ref('')
const services = [
  {
    id: 1,
    title: 'service1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.isi ut aliquip ex ea commodo consequat.',
    img: iconImg,
  },
  {
    id: 2,
    title: 'service2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.isi ut aliquip ex ea commodo consequat.',
    img: iconImg,
  },
  {
    id: 3,
    title: 'service3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.isi ut aliquip ex ea commodo consequat.',
    img: iconImg,
  },
  {
    id: 4,
    title: 'service4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.isi ut aliquip ex ea commodo consequat.',
    img: iconImg,
  },
]
console.log('services: ', services)

function verify() {
  if (
    n_name.value !== '' &&
    n_mail.value !== '' &&
    n_objet.value !== '' &&
    n_message.value !== ''
  ) {
    console.log(n_name.value, n_mail.value, n_objet.value, n_message.value)
  } else {
    console.log('Veuillez remplir tous les champs')
  }
}
</script>
<template>
  <Typography tag="h1" text="Ma page d'accueil" />
  <section class="banner">
    <div class="container">
      <div class="banner_content">
        <div class="banner_left">
          <Typography tag="h1" text="Work Hard" class="banner_left_title" />

          <p class="banner_left_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure .
          </p>
          <BouttonDecouvrir text_button="Découvrir" />
        </div>
        <div class="banner_right">
          <img src="../assets/images/image.png" alt="banner_image" />
        </div>
      </div>
    </div>
  </section>

  <section class="services">
    <div class="container">
      <div class="services_content">
        <Typography tag="h2" text="Nos-Services" />
        <p class="service_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.isi ut aliquip ex ea commodo consequat.
        </p>
        <div class="services_list">
          <div v-for="service in services">
            <ServiceList
              :id="service.id"
              :url_img="service.img"
              :title="service.title"
              :description="service.description"
            >
              <BouttonDecouvrir
                text_button="Découvrir"
                :url="{ name: 'detail', params: { id: service.id } }"
              />
            </ServiceList>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="formulaire">
    <div class="container">
      <div class="formulaire_content">
        <Typography tag="h2" text="Contactez-Nous" classe="formulaire_content_title" />

       <form action="" id="form" method="">
          <div class="formulaire_list">
            <label for="nom">Nom et prénom :</label>
            <Input tag="input" id="name" class="input" type="text" placeholder="Nom et prénom"autocomplete="none"/>
            <p style="display: none" class="name_message_error"></p>
          </div>
          <div class="formulaire_list">
            <label for="email">Email :</label>
            <Input tag="input" class="input" type="text" placeholder="Email"/>
            <p style="display: none" class="email_message_error"></p>
          </div>
          <div class="formulaire_list">
            <label for="objet">Object :</label>
            <Input tag="input" class="input" type="text" id="Object" placeholder="objet"/>
            <p style="display: none" class="object"></p>
          </div>
          <div class="formulaire_list">
            <label for="message">Message :</label>
            <Input tag="textarea" class="input" name="message" id="message" rows="6" placeholder="Message"/>
          </div>
          <div class="formulaire_button">
            <button id="button" type="submit">Envoyer</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.banner {
  background-color: #2d5298;
}
.banner_content {
  padding: 12px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.banner_left {
  width: 400px;
}
.banner_left_title {
  font-size: 48px;
  color: #fff;
  margin-bottom: 30px;
}
.banner_left_text {
  line-height: 25px;
  color: #fff;
  margin-bottom: 30px;
}
.banner_left_link {
  background-color: #7a96ff;
  padding: 12px 56px;
  border-radius: 35px;
}

.hidden {
  background-color: white;
  padding: 12px 56px;
  border-radius: 35px;
}

/*Formulaire*/

.formulaire {
  background-color: #f2f6fc;
}
.formulaire_content {
  padding: 0 157px;
}
.formulaire_content_title {
  margin: 52px 0;
  font-size: 32px;
  font-weight: bold;
  line-height: 100%;
  text-align: center;
  padding-top: 30px;
}
.formulaire_content form {
  max-width: 750px;
  margin: 0 auto;
}
.formulaire_content form label {
  display: block;
}
.formulaire_content form input,
textarea {
  border-radius: 35px;
  padding-left: 5px;
  padding: 15px;
  margin: 12px 0;
  width: 100%;
}
.formulaire_content form textarea {
  border-radius: 5px;
  padding-left: 5px;
  padding-top: 7px;
  margin-top: 7px;
}
#button {
  text-align: center;
  padding: 20px 90px;
  margin: 33px auto;
  background-color: #7a96ff;
  border-radius: 50px;
  cursor: pointer;
}
.formulaire_button {
  text-align: center;
}
@media (max-width: 942px) {
  .services_list {
    flex-wrap: wrap;
  }
}
@media (max-width: 668px) {
  .banner_right {
    display: none;
  }
  .header_right {
    flex-wrap: wrap;
  }
  .banner_left {
    width: 100%;
  }
}
@media (max-width: 737px) {
  .header_right {
    display: none;
  }
}
</style>
