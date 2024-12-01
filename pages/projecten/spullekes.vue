<template>

    <div class="bg-100">

        <MainNav />
        <ProjectTitle title="Spullekes.net" subtitle="Uiting & website" titleimage="" />

        <section class="max-w-screen-xl mx-auto">
            <BodyTitle stap="Stap 1" fase="Uiting" />

            <BodyText
                alinea="Spullekes.net is een zelfverzonnen marktplaats voor al jouw spullekes. Dit was een eigen project voor semester 3 waar ik voornamelijk bezig was met het koppelen van een database aan een framework. De uiting heb ik ook gemaakt, maar had niet de focus." />
            <!-- <BodyText
                alinea="Omdat dit niet de focus had ben ik voor een letterlogo gegaan. Er is veel gespeeld met het bolletje waarnaar ik tot het uiteindelijk logo ben gekomen." /> -->

            <BodyTitle stap="Stap 2" fase="Website" />

            <BodyTextImage kop=""
                content="Dit project is gemaakt met Nuxt 3. Dit framework is simpel om mee te werken en API's aan te koppelen. Er is gebruik gemaakt van firebase om informatie op te kunnen halen. Het werken met firebase voor de eerste keer had zijn moeilijkheden, maar het is alsnog gelukt."
                image="" />

            <BodyTitle stap="Stap 3 " fase="Oplevering" />
            <BodyTextImageMirror kop=""
                content="Het totale plaatje is een website die werkt met een database en een sterke herkenbare uiting heeft."
                image="" />



        </section>

        <Footer />

    </div>

</template>

<script setup>

</script>

<style lang="scss" scoped></style>