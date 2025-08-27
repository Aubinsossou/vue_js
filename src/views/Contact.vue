<template>
  <section class="formulaire">
        <div class="container">
          <div class="formulaire_content">
            <h2 class="formulaire_content_title">Contactez-Nous</h2>
            <div
              id="login"
              style="
                width: 150px;
                height: 50px;
                background-color: aqua;
                border-radius: 20px;
                margin: 0 auto;
                text-align: center;
                align-content: center;
                display: none;
              "
            >
              Connexion réussi
            </div>
            <form action="" id="form" method="">
              <div class="formulaire_list">
                <label for="nom">Nom et prénom :</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Nom et prénom"
                  autocomplete="none"
                  class="input"
                />
                <p style="display: none" class="name_message_error"></p>
              </div>
              <div class="formulaire_list">
                <label for="email">Email :</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"

                  class="input"
                />
                <p style="display: none" class="email_message_error"></p>
              </div>
              <div class="formulaire_list">
                <label for="objet">Object :</label>
                <input
                  type="text"
                  id="Object"
                  placeholder="objet"

                  class="input"
                />
                <p style="display: none" class="object"></p>
              </div>
              <div class="formulaire_list">
                <label for="message">Message :</label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  placeholder="Message"

                ></textarea>

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
    #button{
    text-align: center;
    padding: 20px 90px;
    margin:33px auto;
    background-color: #7a96ff;
    border-radius: 50px;
    }
    .formulaire_button
    {
    text-align: center  ;
    }
</style>
