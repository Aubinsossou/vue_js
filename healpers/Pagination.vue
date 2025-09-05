<script setup>
//import { ref } from 'vue'
import { ref, computed, onMounted } from 'vue'

// Variables réactives
const numb_element_perpage = ref(6)
const page_actuel = ref(1)
const datas = ref([])
const loading = ref(false)
//let is_disable = false

async function fetchData() {
  loading.value = true
  try {
    const response = await fetch('https://restcountries.com/v3.1/independent?status=true')
    datas.value = await response.json()
    console.log('Données récupérées:', datas.value.length, 'pays')
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error)
  } finally {
    loading.value = false
  }
}
function getFirstLanguage(languages) {
  if (!languages) return 'N/A'
  const languageValues = Object.values(languages)
  return languageValues[0] || 'N/A'
}
const totalPages = computed(() => {
  return Math.ceil(datas.value.length / numb_element_perpage.value)
})
const paginatedData = computed(() => {
  const start = (page_actuel.value - 1) * numb_element_perpage.value
  const end = start + numb_element_perpage.value
  return datas.value.slice(start, end)
})

function nextPage() {
  if (page_actuel.value < totalPages.value) {
    page_actuel.value++
  }
}

function previousPage() {
  if (page_actuel.value > 1) {
    page_actuel.value--
  }
}
onMounted(() => {
  fetchData()
})
/* function page_next() {
  first.value += 6
  numb_element_perpage.value += 6
  page_actuel.value += 1
  api()
  console.log('first.value', first.value)
  console.log('numb_element_perpage.value', numb_element_perpage.value)
  console.log('page_actuel.value', page_actuel.value)
}
function page_previous() {
  ;((first.value -= 2), (numb_element_perpage.value -= 2), (page_actuel.value -= 1))
  api()
}
function page_end() {
  console.log('je suis dans end: ')
}
function page_start() {
  console.log('je suis dans start: ')
  is_disable = true
  first
}
 */
</script>
<template>
    <div class="container">
      <div v-if="loading">Chargement...</div>
      <div v-else class="countrie">
        <div class="countrie_item" v-for="data in paginatedData" :key="data.cca3">
          <div class="countrie_item_part1">
            <span class="img_pays">
              <img :src="data.flags.svg" alt="" />
            </span>
            <h2 class="name_pays">Pays: {{ data.name.common }}</h2>
            <br />
          </div>
          <div class="countrie_item_part2">
            <img
              v-if="data.coatOfArms?.png"
              :src="data.coatOfArms.png"
              alt=""
              class="devise_pays"
            />
          </div>
          <div class="countrie_item_part3">
            <h3>Langue: {{ getFirstLanguage(data.languages) }}</h3>
            <h3>Population: {{ data.population?.toLocaleString() }}</h3>
            <h3>Capitale: {{ data.capital?.[0] || 'N/A' }}</h3>
            <div class="countrie_content_part3_icon">
              <span>
                <img
                  src="../src/assets/images/icon.png"
                  alt=""
                  class="countrie_item_part3_icon_1"
                />
              </span>
              <span>
                <img
                  src="../src/assets/images/icon_3.png"
                  alt=""
                  class="countrie_item_part3_icon_1"
                />
              </span>
              <span>
                <img
                  src="../src/assets/images/icon_2.png"
                  alt=""
                  class="countrie_item_part3_icon_1"
                />
              </span>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="pagination" v-if="datas.length > numb_element_perpage">
          <button @click="previousPage" :disabled="page_actuel === 1">Précédent</button>
          <span>Page {{ page_actuel }} / {{ totalPages }}</span>
          <button @click="nextPage" :disabled="page_actuel === totalPages">Suivant</button>
        </div>
      </div>
    </div>
    <!-- <p>{{ datas[0].name.common}}</p> -->
  <div class="button_content container">
    <button @click.prevent="page_start()" class="button_content_3">Première page</button>
    <button @click.prevent="page_previous()" class="button_content_1">précédent</button>
    <p :v-model="page_actuel">{{ page_actuel }}</p>
    <!-- <span v-model="page_actuel"></span> -->
    <button @click.prevent="page_next()" class="button_content_2">Suivant</button>
    <button @click.prevent="page_end()" class="button_content_4">Dernière page</button>
  </div>
</template>

<style>
.countrie {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.countrie_item {
  display: grid;
  margin: 30px;
  background-color: #7a96ff;
  width: 300px;
  border-radius: 7px;
  box-shadow: 0px 20px 20px 4px #7a96ff;
  transition: 0.3s;
}

.countrie_item:hover {
  transform: scale(1.1);
}

/* .active {
    transform: scale(1.1);
    background-color: rgb(132, 0, 255);

} */

/* .disable {
    background-color: rgb(132, 0, 255);
    width: 130px;
    height: 45px;
    border: none;
    border-radius: 7px;
    transition: 0.4s;
    padding: 0 1px;
    color: white;
    font-size: 1.1rem;
} */

.countrie_item_part1 {
  display: flex;
}

.countrie_item_part2 {
  margin-left: 10px;
  margin: 10px 10px;
}

.countrie_item_part3 {
  color: white;
  padding-left: 10px;
}

.countrie_content_part3_icon {
  margin: 20px 10px;
  display: flex;
  justify-content: space-between;
}

.countrie_item_part3_icon_1 {
  cursor: pointer;
  width: 50px;
  transition: 0.4s;
}

.countrie_item_part3_icon_1:hover {
  transform: scale(1.2);
}

.button_content {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 1100px;
}

.button_content_1,
.button_content_2,
.button_content_3,
.button_content_4 {
  cursor: pointer;
  width: 130px;
  height: 45px;
  border: none;
  background-color: #7a96ff;
  border-radius: 7px;
  transition: 0.4s;
  padding: 0 1px;
  color: white;
  font-weight: 900;
  font-size: 1.1rem;
}

.button_content_1:hover,
.button_content_2:hover,
.button_content_3:hover,
.button_content_4:hover {
  box-shadow: 0px 0px 20px 3px #7a96ff;
  transform: scale(1.1);
}

.img_pays {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  margin: 10px 15px;
  display: inline-block;
  overflow: hidden;
}
.img_pays img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.name_pays {
  font-size: 1.2rem;
  margin: 30px 10px;
}

.devise_pays {
  width: 250px;
  margin: 0 10px;
  height: 150px;
}

/* 
<div class="countrie_item" v-for="data in datas">
      <div class="countrie_item_part1">
        <span class="img_pays"><img :src="data[x].flags.svg" alt="" /></span>
        <h2 class="name_pays">Pays: {{ data[x].name.common }}</h2>
        <br />
      </div>
      <div class="countrie_item_part2">
        <img :src="data.value[x].coatOfArms.png" alt="" class="devise_pays" />
      </div>
      <div class="countrie_item_part3">
        <h3>Langue: {{ langage[0] }}</h3>
        <h3>Populations: {{ data[x].population }}</h3>
        <h3>Capital: {{ data[x].capital[0] }}</h3>
        <div class="countrie_content_part3_icon">
          <span
            ><img src="../src/assets/images/icon.png" alt="" class="countrie_item_part3_icon_1"
          /></span>
          <span
            ><img src="../src/assets/images/icon_3.png" alt="" class="countrie_item_part3_icon_1"
          /></span>
          <span
            ><img src="../src/assets/images/icon_2.png" alt="" class="countrie_item_part3_icon_1"
          /></span>
        </div>
      </div>
    </div>
 */
</style>
