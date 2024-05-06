<script setup>
import H2Particle from "../particles/H2Particle.vue"
</script>

<template>
  <section class="container">
    <div class="flex flex-col gap-8">
      <H2Particle title="Comprendre mes motivations" uptitle="Ma description" />
      <div class="bg-white-998 p-8 rounded-xl font-light flex flex-col gap-5">
        <p>
          Hello, je m'appelle Oriane et voici mon histoire ! Tout a commencé en 2018, lorsque j'ai
          entamé mes études supérieures en <strong>PACES</strong> à Lille. Pendant trois ans, de
          2019 à 2022, j'ai poursuivi une formation en tant que <strong>sage-femme</strong> à
          Bruxelles. J'ai trouvé une réelle passion dans ce domaine, mais j'ai eu un déclic et le
          plus gros tournant de ma vie commença.
        </p>
        <p>
          Cependant, ce changement radical m'a permis de découvrir des aspects de moi-même. Malgré
          les défis, je garde précieusement tout ce que cette période m'a apporté : la
          <strong>persévérance</strong>, le <strong>courage</strong>, l'<strong>altruisme</strong> ,
          et surtout, la <strong>patience</strong>. J'ai eu le privilège de côtoyer des parents, des
          nouveau-nés et des professionnels de santé dévoués, une expérience qui restera gravée en
          moi et qui me permet d'être ce que je suis aujourd'hui.
        </p>
        <p>
          Aujourd'hui, j'ai renoué avec ma créativité et ma logique en effectuant un
          <a href="https://www.mydigitalschool.com/bachelor-1-2-web" target="_blank"
            >Bachelor Cycle Web et Multimédia</a
          >
          à MyDigitalSchool, où j'étudie à la fois le design, le développement web et le marketing.
          Chaque jour je développe (sans mauvais jeux de mots) mes compétences avec passion et
          aspire ainsi à intégrer le MBA
          <a href="https://www.mydigitalschool.com/mba-architecte-web" target="_blank"
            >Développeur Full Stack.</a
          >
        </p>

        <p>
          Cela fait désormais un an que j'ai intégré l'entreprise
          <a href="https://www.floax.fr/" target="_blank">Floax</a>, et ma motivation à réussir est
          toujours aussi forte. Tout comme durant mes années d'études précédentes, je continue
          d'apprendre de nouvelles choses chaque jour, tant sur le plan technique que professionnel.
          Au sein de cette entreprise, j'ai acquis de nouvelles compétences dans divers domaines,
          notamment en matière de développement front et back. J'ai également pu observer les
          méthodes de travail et de gestion de projets, qui m'ont été utiles lors de mes projets
          d'études.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
strong,
a {
  font-weight: 600;
  color: var(--melon-600);

  &:hover {
    background-color: var(--melon-940);
    border-radius: 4px;
  }
}

strong {
  padding: 1px 2px;
}
</style>
