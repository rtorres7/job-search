<template>
  <HeaderContainer>
    <template #title>
      <!-- <template #default> -->
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>
    <template #subtitle>
      <h1 class="my-4 w-full text-base font-light">
        It's awesome working here... why don't you come join us?!
      </h1>
    </template>
  </HeaderContainer>
</template>

<script>
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

export default {
  name: "TeamsView",
  components: { HeaderContainer },
};
</script>
