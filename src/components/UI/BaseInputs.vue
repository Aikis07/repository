<template>
    <div class="inputs flex flex-col gap-3 mt-6">
        <h2 class="main__title text-6xl">
            <slot name="title"></slot>
        </h2>
        <base-socials />
        <p class="main__subtitle mt-14 text-2xl">
            <slot name="subtitle"></slot>
        </p>
        <div class="inner flex flex-col gap-3">
            <slot name="inputs"></slot>
            <slot name="phone"></slot>
        </div>
        <slot name="remember"></slot>
        <div class="buttons flex flex-col gap-3 mt-7">
            <slot name="buttons"></slot>
        </div>
    </div>
</template>

<script>
import BaseSocials from '@/components/UI/BaseSocials.vue';

export default {
    components: {
        BaseSocials,
    },
}
</script>

<style lang="scss" scoped></style>