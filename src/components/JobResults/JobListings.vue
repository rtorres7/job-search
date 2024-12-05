<template>
  <main class="bg-brand-gray-2 flex-auto p-8">
    <ol>
      <job-listing v-for="job in displayJobs" :key="job.id" :job="job" />
    </ol>
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from "pinia";
import JobListing from "@/components/JobResults/JobListing.vue";
import { useJobsStore, FETCH_JOBS } from "@/stores/jobs";

export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  computed: {
    currentPage() {
      return Number.parseInt(this.$route.query.page || "1");
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    },
    ...mapState(useJobsStore, {
      jobs: "jobs",
      nextPage() {
        const nextPage = this.currentPage + 1;
        const maxPage = this.jobs.length / 10;
        return nextPage <= maxPage ? nextPage : undefined;
      },
      displayJobs() {
        const pageNumber = this.currentPage;
        const firstJobIndex = (pageNumber - 1) * 10;
        const lastJobIndex = pageNumber * 10;
        return this.jobs.slice(firstJobIndex, lastJobIndex);
      },
    }),
  },
  async mounted() {
    this.FETCH_JOBS();
  },
  methods: {
    ...mapActions(useJobsStore, [FETCH_JOBS]),
  },
};
</script>
