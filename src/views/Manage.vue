<template>
  <!-- Main Content -->
  <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <div class="col-span-1">

      <!--  Upload      -->
      <app-upload ref="upload"></app-upload>

      </div>
      <div class="col-span-2">
        <div
            class="bg-white rounded border border-gray-200 relative flex flex-col"
        >
          <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
            <span class="card-title">My Songs</span>
            <i
                class="fa fa-compact-disc float-right text-green-400 text-2xl"
            ></i>
          </div>
          <div class="p-6">

            <!-- Composition Items -->
            <app-composition-item
                v-for="song in songs"
                :key="song.docID"
                :song="song">
            </app-composition-item>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppUpload from "@/components/AppUpload.vue";
import AppCompositionItem from "@/components/AppCompositionItem.vue";
import { songCollection, auth } from "@/includes/firebase";

export default {
  name: "Manage",
  data() {
    return {
      songs: []
    }
  },
  components: {
    AppUpload,
    AppCompositionItem
  },
  async created() {
    const snapshot = await songCollection.where('uid', '==', auth.currentUser.uid).get();

    snapshot.forEach((document) => {
      const song = {
        ...document.data(),
        docID: document.id
      }

      this.songs.push(song);
    });
  }
  // beforeRouteLeave(to, from, next) {
  //   this.$refs.upload.cancelUploads();
  //   next();
  // }
};
</script>