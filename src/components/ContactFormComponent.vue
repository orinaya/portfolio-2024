<script setup>
// import ButtonParticle from "../particles/ButtonParticle.vue"
</script>

<template>
  <section class="contact-form container">
    <div class="contact-form_content">
      <div class="contact-form_image">
        <div>
          <h2>Une question ?</h2>
          <h2>Contactez moi !</h2>
        </div>
        <p class="form_text">
          Vous désirez continuer le voyage avec moi ? N’hésitez pas à me faire part de tous vos
          questionnements !
        </p>
      </div>
      <form class="cfcc-form" action="" method="get">
        <div>
          <label for="lastname" class="form-item_label">Nom</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Entrez votre nom"
            class="form-item_input"
          />
        </div>
        <div>
          <label for="firstname" class="form-item_label">Prénom</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Entrez votre prénom"
            class="form-item_input"
          />
        </div>
        <div>
          <label for="email" class="form-item_label">Email</label>
          <input
            type="email"
            placeholder="Ex: anakin.skywalker@gmail.com"
            name="email"
            id="email"
            class="form-item_input"
          />
        </div>
        <div>
          <label for="subject" class="form-item_label">Vous me contacter au sujet de :</label>
          <select class="form-item_input select">
            <option value="Alternance">Alternance</option>
            <option>Opportunités</option>
            <option>Autres</option>
          </select>
        </div>

        <div>
          <label for="message" class="form-item_label">Message</label>
          <textarea
            id="message"
            name="usermessage"
            placeholder="Écrivez votre message..."
            class="cffi-field cfccfi-area"
          ></textarea>
        </div>
        <div class="form-checkbox">
          <input type="checkbox" />
          <p>
            En soumettant ce formulaire, j’accepte que mes informations soient utilisées
            exclusivement dans le cadre de ma demande
          </p>
        </div>
        <!-- <ButtonParticle title="Valider" type="submit" color="mint" /> -->
      </form>
    </div>
  </section>
</template>

<style scoped>
h2:last-child {
  font-family: "IBM Plex Sans";
}
.contact-form_content {
  display: flex;
  justify-content: space-between;
  margin-top: 64px;
}

.contact-form_image {
  background-image: url(@/assets/img/background-contact.svg);
  background-position: center;
  background-size: cover;
  width: 45%;
  border-radius: 10px;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.form_text {
  max-width: 400px;
}

.cfcc-form {
  width: 39%;
  padding-top: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
}

.cfccfi-area {
  background-color: #f7f8f7;
  border-radius: 10px;
  padding: 40px 22px 10px;
  width: 91%;
  resize: none;
  height: 180px;
  border: #adb8b2 solid 1px;
  font-family: var(--font);
  font-size: var(--text);

  &::placeholder {
    color: #000000;
    font-size: 14px;
  }

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 2px var(--mint-600);
  }
}

.form-item_label {
  display: block;
  margin-bottom: -32px;
  z-index: 1;
  position: relative;
  padding: 0px 10px 0 20px;
  color: var(--olive-300);
  font-weight: 500;
  width: 100%;
}

.form-item_input {
  border: #adb8b2 solid 1px;
  background-color: #f7f8f7;
  border-radius: 10px;
  padding: 33px 19px 11px;
  width: 100%;
  resize: none;
  width: 92%;
  font-family: var(--font);
  color: #000000;
  font-size: var(--text);
}

.form-item_input:focus {
  outline: none;
  box-shadow: inset 0 0 0 2px var(--mint-600);
}

.form-checkbox {
  display: flex;
  gap: 21px;
  max-width: 500px;
  align-items: baseline;
}

h2 {
  font-size: 32px;
  color: var(--mint-300);
}

h2:last-child {
  font-weight: 300;
}
.select {
  width: 100%;
}

option {
  font-family: "IBM Plex Sans";
}
</style>
