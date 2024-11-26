<template>
    <div class="bg-gray-100">
        <section class="py-10 md:py-16">

            <div class="container max-w-screen-xl mx-auto px-4">

                <nav class="flex items-center justify-between mb-40">
                    <img src="/assets/img/Logo-gray-transparent.png" alt="Logo" class="h-20">
                    <!-- <button
                        class="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">Get
                        my CV</button> -->
                </nav>

                <div class="text-center">
                    <div class="flex justify-center mb-16">
                        <img src="https://media.licdn.com/dms/image/v2/D4E03AQEQTt422QJhhA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1681157489564?e=1737590400&v=beta&t=8yMRDulk_9xSPXtZkC-RGBj6KqlCHM-aDBJs29TtkJU"
                            alt="Image" class="grayscale hover:grayscale-0 rounded-full">
                    </div>
                    <h6 class="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">Martijn van Iersel</h6>
                    <h1 class="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">ICT & Media student
                    </h1>
                    <p class="font-normal text-gray-600 text-md md:text-xl mb-16">Ik maak ontwerpen die mensen ook
                        echt willen gebruiken.</p>
                    <!-- <a href="#"
                        class="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">Bekijk
                        mijn portfolio</a> -->
                </div>
            </div>
        </section>

        <!-- Portfolio -->
        <section>
            <div class="container max-w-screen-xl mx-auto px-4" id="portfolio">
                <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Portfolio</h1>
                <p class="font-normal text-gray-500 text-xs md:text-base">Hier het ik het meeste van geleerd.</p>
                <div class="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
                    <NuxtLink to="/projecten/auralibrary"
                        class="mx-auto transform transition-all hover:scale-105 md:mx-0">
                        <img src="/public/img/covers/CoversPortfolio-05-02.png"
                            class="w-full shadow grayscale hover:grayscale-0" alt="portfolio image" />
                    </NuxtLink>
                    <NuxtLink to="/projecten/spullekes"
                        class="mx-auto transform transition-all hover:scale-105 md:mx-0">
                        <img src="/public/img/covers/CoversPortfolio-05-04.png"
                            class="w-full shadow grayscale hover:grayscale-0" alt="portfolio image" />
                    </NuxtLink>
                    <NuxtLink to="/projecten/netvlies" class="mx-auto transform transition-all hover:scale-105 md:mx-0">
                        <img src="/public/img/covers/CoversPortfolio-05-03.png"
                            class="w-full shadow grayscale hover:grayscale-0" alt="portfolio image" />
                    </NuxtLink>
                    <NuxtLink to="/projecten/speeltuin"
                        class="mx-auto transform transition-all hover:scale-105 md:mx-0">
                        <img src="/public/img/covers/CoversPortfolio-05-05.png"
                            class="w-full shadow grayscale hover:grayscale-0" alt="portfolio image" />
                    </NuxtLink>
                </div>
            </div>
        </section>


        <!-- Opleiding -->
        <section class="py-10 md:py-16">
            <div class="container max-w-screen-xl mx-auto px-4">
                <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-10">Opleiding</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="bg-gray-50 px-8 py-10 rounded-md">
                        <h4 class="font-medium text-gray-700 text-lg mb-4">2022 – heden</h4>
                        <div class="relative">
                            <h6 class="font-semibold text-gray-500 text-md relative z-10">Fontys ICT</h6>
                            <!-- <span class="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span> -->
                        </div>
                        <p class="font-normal text-gray-500 text-md mb-4">ICT&Media design</p>
                    </div>
                    <div class="bg-gray-50 px-8 py-10 rounded-md">
                        <h4 class="font-medium text-gray-700 text-lg mb-4">2018 – 2022</h4>
                        <div class="relative">
                            <h6 class="font-semibold text-gray-500 text-md relative z-10">ROC Tilburg</h6>
                            <!-- <span class="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span> -->
                        </div>
                        <p class="font-normal text-gray-500 text-md mb-4">Grafisch vormgeven</p>
                    </div>
                    <div class="bg-gray-50 px-8 py-10 rounded-md">
                        <h4 class="font-medium text-gray-700 text-lg mb-4">2014 – 2018</h4>
                        <div class="relative">
                            <h6 class="font-semibold text-gray-500 text-md relative z-10">2College Durendael</h6>
                            <!-- <span class="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span> -->
                        </div>
                        <p class="font-normal text-gray-500 text-md mb-4">VMBO-GT (niveau 4)</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Wat wil ik graag leren -->
        <section class="py-10 md:py-16">
            <div class="container max-w-screen-xl mx-auto px-4">
                <div class="flex flex-col lg:flex-row justify-between">
                    <div class="mb-10 lg:mb-0">
                        <h1 class="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Wat wil ik graag leren</h1>
                        <p class="font-normal text-gray-500 text-xs md:text-base">Er valt altijd genoeg te leren, maar
                            ik wil ik me graag als eerste op focussen. Het gaat in de praktijk natuurlijk anders dan op
                            school.</p>
                    </div>

                    <div class="space-y-24">
                        <div class="flex space-x-6">
                            <h1 class="font-normal text-gray-700 text-3xl md:text-4xl">01</h1>
                            <span class="w-28 h-0.5 bg-gray-300 mt-5"></span>

                            <!-- <NuxtLink to="/"> -->
                            <div>
                                <h1 class="font-normal text-gray-700 text-3xl md:text-4xl mb-5">Brain stormen</h1>
                                <p class="font-normal text-gray-500 text-sm md:text-base">Hoe komt een UX/UI'er aan een
                                    idee. En hoe kan ik zorgen dan ik mijn manier nog beter kan maken.</p>
                            </div>
                            <!-- </NuxtLink> -->
                        </div>

                        <div class="flex space-x-6">
                            <h1 class="font-normal text-gray-700 text-3xl md:text-4xl">02</h1>
                            <span class="w-28 h-0.5 bg-gray-300 mt-5"></span>
                            <!-- <NuxtLink to="/"> -->
                            <div>
                                <h1 class="font-normal text-gray-700 text-3xl md:text-4xl mb-5">Design valideren</h1>

                                <p class="font-normal text-gray-500 text-sm md:text-base">Op welke kan ik zien welke
                                    punten nog aandacht nodig hebben. </p>
                            </div>
                            <!-- </NuxtLink> -->
                        </div>

                        <div class="flex space-x-6">
                            <h1 class="font-normal text-gray-700 text-3xl md:text-4xl">03</h1>

                            <span class="w-28 h-0.5 bg-gray-300 mt-5"></span>

                            <!-- <NuxtLink to="/"> -->
                            <div>
                                <h1 class="font-normal text-gray-700 text-3xl md:text-4xl mb-5">Project in actie brengen
                                </h1>

                                <p class="font-normal text-gray-500 text-sm md:text-base">Hoe werk je samen met een
                                    developer om het project van een concept naar een werkend product te krijgen.</p>
                            </div>
                            <!-- </NuxtLink> -->
                        </div>
                    </div>
                </div>

            </div>

        </section>

        <Footer />
    </div>

</template>

<script setup>

</script>

<style scoped></style>