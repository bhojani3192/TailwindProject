<template>
    <div class="bg-brand-gradient  md:h-[96px] lg:px-0 ">
        <div class="container flex justify-between items-center">
            <h1 class="md:text-[32px] text-white font-bold">Registration</h1>

            <div class="steps">
                <ul>
                    <li>
                        <div class="index">
                            01
                        </div>
                        <span>Get Started</span>
                    </li>
                    <li class="active">
                        <div class="index">
                            02
                        </div>
                        <span>Get Started</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.steps {
    ul {
        @apply flex gap-1 md:gap-0;

        li {
            @apply md:h-[96px] md:w-[128px] py-4 md:px-7 text-xs text-white flex justify-center items-center flex-col;

            .index {
                @apply  border-2 border-solid border-white-500 w-4 h-4 md:w-10 md:h-10 rounded-full text-center text-white-500 font-extrabold lg:block mx-auto mb-2 leading-10  text-[0px] md:text-[16px];
            }

            span {
                @apply underline font-bold hidden md:block;
            }
        }

        li.active {
            .index {
                @apply bg-white text-brand-solid-500 font-extrabold;
            }

            span {
                @apply no-underline font-bold;
            }
        }
    }
}
</style>