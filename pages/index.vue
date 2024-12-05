<template>
  <div>
    <GenericHeroText title="Impact door future tech&nbsp;&&nbsp;IT">
      <template #text>
        <p>
          Ben je gebeten door informatica en innovatie en wil je impact creëren
          op de wereld rondom ons heen door de applicaties van morgen te
          ontwikkelen met cutting-edge technologie?
        </p>
        <p>
          Klinken artificial intelligence, augmented reality, user interfaces,
          full stack web development of 5G je als muziek in de oren? Dan is de
          bachelor Multimedia en Creatieve Technologie je op het lijf
          geschreven.
        </p>
      </template>
      <template #floating>
        <p class="mb-2 flex items-center gap-3 text-neutral-950">
          <LucideGraduationCap :size="24" /> Bachelor IT-opleiding
        </p>
        <p class="flex items-center gap-3 text-neutral-500">
          <LucideNavigation :size="24" /> Kortrijk
        </p>
      </template>
    </GenericHeroText>

    <img
      class="col-span-12"
      src="/placeholder.jpg"
      alt="Cutting edge IT opleiding"
    />

    <HomeSection title="Eén duidelijk doel: impact">
      <p class="mb-12 max-w-prose text-lg leading-loose">
        We geloven dat je met de nieuwste technologie een enorme impact kan
        hebben op jouw omgeving. We begeleiden je om op zoek te gaan naar jouw
        skills die een meerwaarde zijn in teams, het echte leven verbeteren en
        mensen doen dromen.
      </p>

      <div class="grid grid-cols-2 gap-6">
        <div
          class="row-span-2 h-full w-full overflow-hidden rounded-xl object-cover"
        >
          <img class="h-full w-full object-cover" src="/1.jpg" />
        </div>
        <div class="h-full w-full overflow-hidden rounded-xl object-cover">
          <img class="object-cover" src="/2.jpg" />
        </div>
        <div class="h-full w-full overflow-hidden rounded-xl object-cover">
          <img class="object-cover" src="/3.jpg" />
        </div>
      </div>
    </HomeSection>

    <div class="grid grid-cols-12 gap-6 px-24 py-52">
      <div class="col-span-6">
        <HomeSectionTitle class="mb-12"
          >Cutting edge: niet scherp</HomeSectionTitle
        >
        <p class="max-w-prose text-lg leading-loose">
          Innovatie ligt ons nauw aan het hart! Je zal als IT’er de rest van je
          leven mogen werken om met alles mee te zijn. wij stomen je klaar voor
          die boeiende carrierie!
        </p>
      </div>

      <div class="col-span-6">
        <HomeSectionTitle class="mb-12"
          >Projecten: met échte klanten</HomeSectionTitle
        >
        <p class="max-w-prose text-lg leading-loose">
          Door een goede opbouw van verschillende projecten doorheen je
          opleiding, leren we je aan de slag gaan. Met echte klanten, reallife
          scenarios en goede begeleiding, gaat de stap naar het werkveld als
          vanzelf.
        </p>
      </div>
    </div>

    <HomeSection title="Zo kan je bij ons een expert worden" class="">
      <p class="max-w-prose text-lg leading-loose">
        We bieden je een opleiding aan die je klaarstoomt voor de toekomst. We
        leren je de nieuwste technologieën en methodes aan, zodat je klaar bent
        om de wereld te veranderen.
      </p>

      <section class="grid grid-cols-12 gap-3 pb-52 pt-24">
        <div class="col-span-3">
          <h3 class="mb-6 flex items-center gap-2 text-lg font-bold">
            <LucideHandshake /> Studenten = toekomstige collega’s
          </h3>
          <p class="max-w-prose text-lg leading-loose">
            We zien studenten als toekomstige collega’s. We zijn er apetrots op
            dat we dicht bij onze studenten staan. Ja, we zijn bereikbaar via
            chat of via mail. Ja, we weten hoe iedereen heet en waar je sterk in
            bent!
          </p>
        </div>
        <div class="col-span-3 col-start-5">
          <h3 class="mb-6 flex items-center gap-2 text-lg font-bold">
            <LucideScale /> Praktijk vs theorie
          </h3>
          <p class="max-w-prose text-lg leading-loose">
            Theorie is belangrijk...! Om de praktijk goed uit te voeren. We
            willen voldoende theorie meegeven om aan de slag te kunnen met onze
            praktijkgerichte labo’s.
          </p>
        </div>
        <div class="col-span-3 col-start-9">
          <h3 class="mb-6 flex items-center gap-2 text-lg font-bold">
            <LucideSmilePlus /> Ons rapport. Joepie, goede punten!
          </h3>
          <p class="max-w-prose text-lg leading-loose">
            We krijgen jaar na jaar geweldige feedback van onze studenten en
            bedrijven. Zowel werkpunten als goede punten nemen we ter harte. We
            gaan iedere dag aan de slag om de beste IT’ers op de markt te
            zetten!
          </p>
        </div>
      </section>
    </HomeSection>

    <HomeSection
      title="Internationaal"
      class="relative bg-neutral-100 py-96 text-white"
    >
      <div class="">
        <div class="absolute inset-0">
          <HomeMap class="h-full w-full" />
        </div>

        <div class="relative z-10 w-1/3">
          <nav class="mb-3 flex items-center gap-3">
            <button><LucideArrowLeft /></button>
            <p class="font-bold tracking-wide">Intro</p>
            <button><LucideArrowRight /></button>
          </nav>

          <p class="break-words text-lg leading-loose">
            We zijn trots op onze internationale samenwerkingen met bedrijven en
            scholen over de hele wereld. We zijn er van overtuigd dat je door
            samen te werken met mensen van over de hele wereld een betere IT’er
            wordt.
          </p>
        </div>
      </div>
    </HomeSection>
  </div>
</template>

<script lang="ts" setup></script>
