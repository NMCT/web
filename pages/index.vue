<template>
  <div>
    <div class="test pointer-events-none fixed top-0 h-full w-full" />
    <GenericRow class="py-24">
      <GenericContainer>
        <GenericHeroText title="Impact door future tech&nbsp;&&nbsp;IT">
          <template #text>
            <p class="max-w-prose text-center">
              Ben je gebeten door informatica en innovatie? Wil je impact
              creëren op de wereld rondom ons heen door de applicaties van
              morgen te ontwikkelen?
            </p>
            <!-- <p>
              Klinken artificial intelligence, augmented reality, user
              interfaces, full stack web development of 5G je als muziek in de
              oren? Dan is de bachelor Multimedia en Creatieve Technologie je op
              het lijf geschreven.
            </p> -->
          </template>

          <div
            class="col-span-12 flex items-center justify-center gap-16 text-sm text-neutral-400"
          >
            <p class="flex items-center gap-3 whitespace-nowrap">
              <LucideGraduationCap :size="24" /> Bachelor IT-opleiding
            </p>
            <p class="flex items-center gap-3">
              <LucideBuilding2 :size="24" /> Kortrijk
            </p>
            <p class="flex items-center gap-3 whitespace-nowrap">
              <LucideRocket :size="24" /> New technology
            </p>
          </div>
        </GenericHeroText>
      </GenericContainer>
    </GenericRow>

    <GenericRow>
      <GenericContainer>
        <img
          class="col-span-12 block rounded-2xl"
          src="/placeholder.jpg"
          alt="Cutting edge IT opleiding"
        >
      </GenericContainer>
    </GenericRow>

    <GenericRow>
      <GenericContainer>
        <HomeSection title="Eén duidelijk doel: impact">
          <p class="leading-noral col-span-9 mb-12 max-w-prose text-lg">
            We geloven dat je met de nieuwste technologie een enorme impact kan
            hebben op jouw omgeving. We begeleiden je om op zoek te gaan naar
            jouw skills die een meerwaarde zijn in teams, het echte leven
            verbeteren en mensen doen dromen.
          </p>

          <div
            class="col-span-5 col-start-4 row-span-2 h-full w-full overflow-hidden rounded-xl"
          >
            <img class="h-full w-full object-cover" src="/1.jpg" >
          </div>
          <div class="col-span-4 h-full w-full overflow-hidden rounded-xl">
            <img class="object-cover" src="/2.jpg" >
          </div>
          <div class="col-span-4 h-full w-full overflow-hidden rounded-xl">
            <img class="object-cover" src="/3.jpg" >
          </div>
        </HomeSection>
      </GenericContainer>
    </GenericRow>

    <GenericRow>
      <GenericContainer>
        <div class="grid grid-cols-12 gap-6 py-52">
          <div class="col-span-6">
            <HomeSectionTitle class="mb-12">
              Cutting edge: niet scherp
            </HomeSectionTitle>
            <p class="leading-noal max-w-prose text-lg">
              Innovatie ligt ons nauw aan het hart! Je zal als IT’er de rest van
              je leven mogen werken om met alles mee te zijn. wij stomen je
              klaar voor die boeiende carrierie!
            </p>
          </div>

          <div class="col-span-6">
            <HomeSectionTitle class="mb-12"
              >Projecten: met échte klanten</HomeSectionTitle
            >
            <p class="leading-noal max-w-prose text-lg">
              Door een goede opbouw van verschillende projecten doorheen je
              opleiding, leren we je aan de slag gaan. Met echte klanten,
              reallife scenarios en goede begeleiding, gaat de stap naar het
              werkveld als vanzelf.
            </p>
          </div>
        </div>
      </GenericContainer>
    </GenericRow>

    <GenericRow>
      <GenericContainer>
        <HomeSection title="Zo kan je bij ons een expert worden" class="">
          <div class="col-span-9">
            <!-- Space the parent grid out -->
          </div>

          <BentoBox>
            <BentoItem
              class="relative col-span-4 flex flex-col items-center justify-center bg-white"
            >
              <LucideRocket class="mb-4" :size="36" />
              <h3 class="mb-6 text-center text-4xl font-bold">
                Klaar voor de toekomst.
              </h3>
              <p class="text-lg">
                We bieden je een opleiding aan die je klaarstoomt voor de
                toekomst. We leren je de nieuwste technologieën en methodes aan,
                zodat je klaar bent om de wereld te veranderen.
              </p>
            </BentoItem>

            <BentoItem
              class="relative col-span-8 flex aspect-square flex-col items-center justify-center overflow-hidden text-white"
            >
              <img class="absolute inset-0 z-0 object-cover" src="/3.jpg" >
              <div
                class="absolute inset-x-0 bottom-0 z-10 h-2/3 bg-gradient-to-t from-neutral-900 to-transparent"
              />

              <LucideHandshake
                class="animation-delay-3000 relative z-10 mb-4 mt-auto animate-bounce"
                :size="36"
              />
              <h3 class="relative z-10 mb-6 text-center text-4xl font-bold">
                Studenten = toekomstige collega’s
              </h3>
              <p class="relative z-10 max-w-prose text-lg leading-normal">
                We zien studenten als toekomstige collega’s. We zijn er apetrots
                op dat we dicht bij onze studenten staan. Ja, we zijn bereikbaar
                via chat of via mail. Ja, we weten hoe iedereen heet en waar je
                sterk in bent!
              </p>
            </BentoItem>

            <BentoItem
              class="col-span-8 grid grid-cols-[2fr_1fr] items-center gap-12 bg-neutral-800 text-white"
            >
              <div class="">
                <LucideSmilePlus class="mb-4 text-yellow-400" :size="36" />
                <h3 class="mb-6 text-4xl font-bold">
                  Ons rapport.<br >Joepie, goede punten!
                </h3>
                <p class="max-w-prose text-lg leading-normal">
                  We krijgen jaar na jaar geweldige feedback van onze studenten
                  en bedrijven. Zowel werkpunten als goede punten nemen we ter
                  harte. We gaan iedere dag aan de slag om de beste IT’ers op de
                  markt te zetten!
                </p>
              </div>
              <div class="flex items-center justify-center text-center">
                <span class="text-8xl font-bold leading-none">85</span>
                <LucidePercent class="text-white" :size="48" />
              </div>
            </BentoItem>

            <BentoItem
              class="from-mct-400 to-mct-600 col-span-4 flex flex-col items-center justify-center bg-gradient-to-r text-white"
            >
              <LucideScale class="mb-4" :size="36" />
              <h3 class="mb-6 text-center text-4xl font-bold">
                Praktijk vs theorie
              </h3>
              <p class="max-w-prose text-lg leading-normal">
                Theorie is belangrijk...! Om de praktijk goed uit te voeren. We
                willen voldoende theorie meegeven om aan de slag te kunnen met
                onze praktijkgerichte labo’s.
              </p>
            </BentoItem>
          </BentoBox>
        </HomeSection>
      </GenericContainer>
    </GenericRow>

    <GenericRow class="relative">
      <GenericContainer>
        <div class="absolute inset-0">
          <HomeMap class="h-full w-full" />
        </div>

        <HomeSection title="Internationaal" class="relative py-96 text-white">
          <div class="relative z-10 col-span-3">
            <nav class="mb-3 flex items-center gap-3">
              <button><LucideArrowLeft /></button>
              <p class="font-bold tracking-wide">Intro</p>
              <button><LucideArrowRight /></button>
            </nav>

            <p class="leading-noal break-words text-lg">
              We zijn trots op onze internationale samenwerkingen met bedrijven
              en scholen over de hele wereld. We zijn er van overtuigd dat je
              door samen te werken met mensen van over de hele wereld een betere
              IT’er wordt.
            </p>
          </div>
        </HomeSection>
      </GenericContainer>
    </GenericRow>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.test {
  --size: 128px;
  --line: color-mix(in lch, canvasText, transparent 90%);
  background:
    linear-gradient(90deg, var(--line) 1px, transparent 1px var(--size)) 50% 50% /
      var(--size) var(--size),
    linear-gradient(var(--line) 1px, transparent 1px var(--size)) 50% 50% /
      var(--size) var(--size);
  -webkit-mask: linear-gradient(-20deg, transparent 50%, white);
  mask: linear-gradient(-20deg, transparent 50%, white);
  transform-style: flat;
}
</style>
