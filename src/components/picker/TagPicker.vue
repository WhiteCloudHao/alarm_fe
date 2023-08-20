<template>
  <div>
    <div v-for="tag in tagList" :key="tag.id">
      <div
        class="flex items-center w-full py-4 px-5"
        :class="[tagSelect.includes(tag) ? 'bg-secondary/20' : 'bg-transparent']"
      >
        <label :for="tag.id" class="ml-2 text-sm font-medium w-full text-left flex items-center">
          <svgicon name="icon_tag_bulk" width="20" height="20" class="mr-2" />
          {{ tag.name }}
        </label>
        <input
          :id="tag.id"
          v-model="tagSelect"
          :value="tag.id"
          type="checkbox"
          class="w-4 h-4 text-secondary bg-gray-100 border-gray-300 rounded"
          @change="fnSelectTag"
        />
      </div>
    </div>
  </div>
</template>

<script>
import '@/icons/icon_tag_bulk';
export default {
  components: {},
  data() {
    return {
      tagList: [
        { id: 1, name: 'Tag 1' },
        { id: 2, name: 'Tag 2' },
        { id: 3, name: 'Tag 3' },
      ],
      tagSelect: [],
    };
  },
  methods: {
    fnSelectTag() {
      console.log(this.tagSelect);
      this.$emit('select-tags', this.tagSelect);
    },
  },
};
</script>

<style></style>
