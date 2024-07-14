<template>
  <BannerComponent />

  <FollowTwitchComponent />

  <CharacterComponent />

<!--  <PodcastComponent />-->

  <ShoppingComponent />

<!--  <FeedbackComponent />-->
</template>

<script>
import BannerComponent from '@/components/Homepage/BannerComponent.vue';
import FollowTwitchComponent from '@/components/Homepage/FollowTwitchComponent.vue';
import CharacterComponent from '@/components/Homepage/CharacterComponent.vue';
// import PodcastComponent from '@/components/Homepage/PodcastComponent.vue';
import ShoppingComponent from '@/components/Homepage/ShoppingComponent.vue';
// import FeedbackComponent from '@/components/Homepage/FeedbackComponent.vue';

export default {
  components: {
    BannerComponent,
    FollowTwitchComponent,
    CharacterComponent,
    // PodcastComponent,
    ShoppingComponent,
    // FeedbackComponent,
  },
};
</script>
