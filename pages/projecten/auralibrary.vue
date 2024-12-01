<template>
    <div class="bg-gray-100">

        <MainNav />
        <ProjectTitle title="Aura Library App"
            subtitle="Het Aura Libray project was mijn eigen project voor vierde semester. Ik wilde graag een app redesigned en die vervolgens maken in Swift(UI). De keuze om het in Swift(UI) te doen was door mijn keuze in dit semester, Smartmobile.  "
            titleimage="/img/auralibrary/auraPlateV3.png" />
        <!-- <ProjectBody /> -->

        <section class="max-w-screen-xl mx-auto">
            <BodyTitle stap="Stap 1" fase="Onderzoek" />

            <BodyText
                alinea="Bij het Aura Library project gaat het om het herontwerpen van de bestaande app. Op dit moment is de app eingenlijk alleen handig als je spullen van de ISSD wil lenen. Als een student die werkt met de app leek het me handig om bepaale functie toe te voegen die het gebruiken kunnen verbeteren." />

            <BodyTitle stap="Stap 2" fase="Design" />

            <BodyTextImage kop="Bestaande app"
                content="Omdat deze app een vebeterde variant moet worden van de bestaande ben ik als eerste gaan kijken naar wat de bestaande app als functies heeft."
                image="/img/auralibrary/auraPlateV2.png" />
            <BodyTextImageMirror kop="User flow"
                content="Door het bekijken van de huidige app heb ik een een user flow diagram kunnen maken idee een goed idee geeft over de app. Zelf had ik nog een paar ideeën voor functies om toe te voegen aan de app. Deze heb ik ook toegevoegd aan de diagram."
                image="" />

            <BodyTitle stap="Stap 3" fase="Design" />

            <BodyTextImage kop="Design voor mobile" content="Het design geeft door middel van een bentobox design snel een overzicht van de app. Onderaan staan verschillende tabjes die je naar de pagina brengen waar je moet zijn. Er is nog overwogen om de tabjes bovenaan het scherm te zetten, maar het is vriendelijk voor mobiel om het onderaan te zetten. " image="" />

        </section>

        <Footer />
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>