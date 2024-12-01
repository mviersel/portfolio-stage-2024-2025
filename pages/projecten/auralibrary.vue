<template>
    <div class="bg-gray-100">

        <MainNav />
        <ProjectTitle title="Aura Library App"
            subtitle="Het Aura Library project was mijn eigen project voor het vierde semester. Ik wilde graag een app redesignen en die vervolgens maken in Swift(UI). De keuze om het in Swift(UI) te doen was door mijn keuze in dit semester, Smartmobile.  "
            titleimage="/img/auralibrary/auraPlateV3.png" />
        <!-- <ProjectBody /> -->

        <section class="max-w-screen-xl mx-auto">
            <BodyTitle stap="Stap 1" fase="Introductie" />

            <BodyText
                alinea="Bij het Aura Library project gaat het om het herontwerpen van de bestaande app. Op dit moment is de app eigenlijk alleen handig als je spullen van de ISSD wilt lenen. Als een student die werkt met de app leek het me handig om bepaalde functies toe te voegen die het gebruiken kunnen verbeteren." />

            <BodyTitle stap="Stap 2" fase="Onderzoek" />
            <BodyTextImage kop="Bestaande app"
                content="Omdat deze app een verbeterde variant moet worden van de bestaande app ben ik als eerste gaan kijken naar wat de bestaande app als functies heeft."
                image="/img/auralibrary/project/bestaande-app.png" />
            <BodyTextImageMirror kop="App structuur"
                content="Door het bekijken van de huidige app heb ik een een app structuur gemaakt om hier een volledig idee van te krijgen. Zelf had ik nog een paar ideeën voor functies om toe te voegen aan de app. Deze zijn ook toegevoegd aan het diagram."
                image="/img/auralibrary/project/user-flow-aura-library.png" />

            <BodyTitle stap="Stap 3" fase="Design" />

            <BodyTextImage kop="Design voor mobile" content="Het design geeft door middel van een bentobox design snel een overzicht van de app. Onderaan staan verschillende tabjes die je naar de pagina brengen waar je moet zijn. Er is nog overwogen om de tabjes bovenaan het scherm te zetten, maar het is vriendelijk voor mobiel om het onderaan te zetten. Omdat het project nog steeds bezig is kan op dit moment alleen dit scherm worden getoond." image="/img/auralibrary/aurapage-withoutmockup.png" />

        </section>

        <Footer />
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>