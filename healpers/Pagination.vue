<script setup>
const data={}
const page_actuel_tag=ref('')
let numb_element_perpage = 2
let page_actuel = 1
let first=0
const Pagination:()=>{
  perpage:(data)=>{
        page_actuel_tag.value.innerHTML = `${page_actuel}`
    if (page_actuel == 1 && first == 0 && numb_element_perpage == 2) {
      button_premiere_page.disabled = true
      button_precedent.disabled = true
      button_premiere_page.classList = 'disable'
      button_precedent.classList = 'disable'
    } else if (page_actuel !== 1 && first !== 0 && numb_element_perpage !== 2) {
      button_precedent.disabled = false
      button_premiere_page.disabled = false
      button_precedent.classList = 'button_content_1'
      button_premiere_page.classList = 'button_content_3'
    }
    if (page_actuel == data.length) {
      button_suivant.disabled = true
      button_derniere_page.disabled = true
      button_suivant.classList = 'disable'
      button_derniere_page.classList = 'disable'
    } else if (page_actuel !== 33) {
      button_suivant.disabled = false
      button_derniere_page.disabled = false
      button_suivant.classList = 'button_content_2'
      button_derniere_page.classList = 'button_content_4'
    }
  },
  page_next:()=>{

  },
   page_previous:()=>{

  },
   page_end:()=>{

  },
   page_start:()=>{

  },
}
if (button_suivant) {
    button_suivant.addEventListener("click", (e) => {
      e.preventDefault();
      first += 6, numb_drapeau += 6, page_actuel += 1
      if (first <= 186) {

      } else if (first >= 192 && first < 195) {
          console.log("oui je suis")
          first -= 3, numb_drapeau -= 3, page_actuel += 0

      } else {
          first = 192
          console.log(first)

      }
    })

}
let actualisation = true
if (button_premiere_page) {
    button_premiere_page.addEventListener("click", (e) => {
        e.preventDefault();
        if (actualisation && page_actuel !== 1) {
            first = 0
            numb_drapeau = 5
            page_actuel = 1

            api()
        }


    })
}
if (button_derniere_page) {
    button_derniere_page.addEventListener("click", (e) => {
        e.preventDefault();
        if (actualisation && page_actuel !== 33) {
            first = 192, numb_drapeau = 194, page_actuel = 33
            api()
        }
    })
}
</script>
<template>
  <p v-model="page_actuel_tag"></p>
  <div class="button_content">
    <button @click.prevent="page_start()" class="button_content_3" >Première page</button>
    <button @click.prevent="page_previous()"class="button_content_1">précédent</button>
    <span class="page_actuel"></span>
    <button @click.prevent="page_next()" class="button_content_2">Suivant</button>
    <button @click.prevent="page_end()" class="button_content_4">Dernière page</button>
  </div>
</template>

<style scoped>
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
    background-color: lab(61.68% 40.08 -59.36);
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
    box-shadow: 0px 0px 20px 3px blueviolet;
    transform: scale(1.1);
  }
</style>
