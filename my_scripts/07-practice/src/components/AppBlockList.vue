<template>
  <template v-for="block in blocks" :key="block.type+block.value">
    <component :is="`app-${block.type}`" :value="block.value"></component>  <!-- динамический компонет с помощью бинда is -->
  </template>
</template>

<script>
import AppAvatar from "@/components/parts/AppAvatar.vue";
import AppTitle from "@/components/parts/AppTitle.vue";
import AppSubtitle from "@/components/parts/AppSubtitle.vue";
import AppText from "@/components/parts/AppText.vue";
export default {
  props: ['blocks'],
  components: {
    // eslint-disable-next-line vue/no-unused-components
    AppAvatar, AppSubtitle, AppText, AppTitle
  }
}
</script>

<style lang="scss" scoped>

</style>