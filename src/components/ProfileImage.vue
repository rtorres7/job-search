<template>
  <img :src="imageLink" class="h-8 w-8 rounded-3xl object-contain" alt="user profile image" />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink: "../../assets/lion.png",
    };
  },
};
</script>
