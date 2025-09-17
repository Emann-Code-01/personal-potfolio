<template>
    <section class="px-5 sm:px-10 mx-auto pt-[166px]">
        <div class="grid gap-16 mx-auto lg:grid-cols-2 max-w-7xl">
            <div class="relative rounded-lg p-[2px] bg-animation h-[543px]">
                <div
                    class="relative bg-blend-luminosity bg-emann w-full bg-center bg-cover bg-no-repeat bg-primary rounded-lg animate-fade-up animate-duration-[2000ms] animate-ease-in-out z-20 h-full lg:col-span-1">
                </div>
            </div>
            <div class="animate-fade animate-duration-[2000ms] animate-ease-in lg:col-span-1">
                <h3 class="text-accent mb-[14px]">Who am i?</h3>
                <h3 class="mb-2 text-[28px] font-[Montserrat-Bold] tracking-[0.84px]">I'm Ifeoluwa Olajubaje Emmanuel
                </h3>
                <p class="leading-[150%] tracking-[0.48px] lg:w-[90%] mb-5">
                    As a passionate frontend developer, I specialize in creating exceptional web experiences that
                    combine clean code with beautiful user interfaces. With expertise in Vue.js, TailwindCSS, and
                    modern frontend technologies, I transform design concepts into responsive, performant, and
                    user-friendly applications.
                    <br>
                    <br>
                    I have a strong foundation in JavaScript and modern web development practices, allowing me to
                    build scalable and maintainable applications. My approach combines technical excellence with an
                    eye for detail, ensuring that every project not only functions flawlessly but also provides an
                    engaging user experience. I’m particularly skilled in component-based architecture, state
                    management, and optimizing web performance.
                </p>
                <div class="flex gap-3 mb-10 opacity-50">
                    <div class="flex">
                        <i class="pi pi-map-marker"></i>
                        <span class="text-sm ml-[6px] font-[Montserrat-SemiBold]">Lagos, Nigeria</span>
                    </div>
                    <div class="flex">
                        <i class="pi pi-envelope"></i>
                        <a href="mailto:olajubajeifeoluwa93@gmail.com"
                            class="underline text-sm ml-[6px] hover:text-accent font-[Montserrat-SemiBold]">olajubajeifeoluwa93@gmail.com</a>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <a href="https://drive.google.com/file/d/1h0qAOARD8hhuSgOlSvzNtCaFUVlJnKiM/view?usp=drive_link"
                        target="_blank"
                        class="px-6 py-[17px] flex border border-accent rounded-lg place-items-center font-semibold hover:bg-accent transition-all ease-in w-max">
                        <i class="pi pi-book mr-3" alt="loader" loading="lazy" width="20" height="20" decoding="async"
                            data-nimg="1"></i>View Resume
                    </a>
                    <hr class="opacity-30 w-[50px] hidden sm:block">
                    <ul class="hidden gap-4 sm:flex">
                        <a href="https://www.linkedin.com/in/emann-b66a0b343" target="_blank"
                            class="transition-all ease-in hover:text-accent hover:scale-110"><i
                                class="pi pi-linkedin"></i></a>
                        <a href="https://github.com/Emann-Code-01" target="_blank"
                            class="transition-all ease-in hover:text-accent hover:scale-110"><i
                                class="pi pi-github"></i></a>
                        <a href="https://wa.link/cbphkn" target="_blank"
                            class="transition-all ease-in hover:text-accent hover:scale-110"><i
                                class="pi pi-whatsapp"></i></a>
                        <a href="mailto:olajubajeifeoluwa93@gmail.com" target="_blank"
                            class="transition-all ease-in hover:text-accent hover:scale-110"><i
                                class="pi pi-envelope"></i></a>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup></script>

<style scoped></style>