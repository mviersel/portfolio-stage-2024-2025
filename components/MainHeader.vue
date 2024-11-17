<template>
    <header class="sticky top-0 z-50">
        <!-- PC header -->
        <div
            class='hidden lg:block py-4 px-4 sm:px-10 bg-zinc-900 font-sans min-h-[70px] tracking-wide sticky z-50 text-white top-0'>
            <div class='flex flex-wrap items-center gap-4 w-full'>
                <!-- Logo -->
                <NuxtLink to="/"><img src="../assets/img/LogoMetDiepte-02.png" alt="logo"
                        class='h-20 hover:scale-110 duration-150 transition' />
                </NuxtLink>
                <div class="border-l border-siteMain-200 h-6 max-lg:hidden opacity-45"></div>
                <p class="text-lg font-thin">Martijn van Iersel</p>
                <!-- Menu items -->

            </div>
        </div>

        <!-- Mobile header -->
        <div class="lg:hidden bg-zinc-900 w-full sticky top-0">
            <div>
                <!-- Logo -->
                <div class="flex flex-col items-center justify-center py-2">
                    <NuxtLink to="/"><img class="h-40" src="../assets/img/LogoMetDiepte-02.png" alt="logo"/>
                    </NuxtLink>
                    <div class="text-white text-lg">Martijn van Iersel</div>
                </div>
                <!-- Menu items -->
                <div class="grid grid-cols-3 grid-container h-14 text-white">
                    <NuxtLink to="/">
                        <div>Home</div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>

</script>