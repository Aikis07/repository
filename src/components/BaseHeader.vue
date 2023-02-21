<template>
    <div class="header flex items-center my-7">
        <header-icon />
        <h2 class="header__title font-semibold text-2xl ml-2">XSLAB</h2>
        <header-mult class="header__icon ml-4"/>
        <p class="header__subtitle ml-4 opacity-40">Программирование</p>
    </div>
</template>

<script>
import HeaderIcon from '@/assets/img/header-icon.svg';
import HeaderMult from '@/assets/img/header-mult.svg';

export default {
  components: {
    HeaderIcon,
    HeaderMult,
  },
};
</script>

<style lang="scss" scoped>

</style>