<template>
    <div>
      <transition name="slide-up">
        <div v-show="isShow" class="fixed h-[calc(100%-1rem)] max-h-full left-0 right-0 bottom-0 z-[1002] bg-bgLayout py-4 px-4 rounded-t-lg">
          <!-- Header -->
          <!-- <div class="flex justify-between items-center mb-2">
            <div class="text-sm" @click="fnCloseModal">Cancel</div>
            <div class="font-medium">Create Task</div>
            <div class="text-sm">Done</div>
          </div> -->
  
          <!-- Form -->
          <div class="flex justify-between ">
            <p @click="fnCloseModal" class="text-sm text-sky-500">Cancle</p>
            <p>Tags</p>
            <p @click="fnSetTag" class="text-sm text-sky-500">Done</p>
          </div>
           <div class="flex items-center bg-zinc-200 justify-between px-3 py-2 mt-5 rounded-md">   
                <div class="">
                    <svgicon name="icon_search" width="18" height="18" color="#A6A6A6" class="" />
                </div>
                <input v-model="inputTag" ref="inputTag" class="bg-zinc-200 flex-grow input-px-3 input-tag" placeholder="Input Tag"/>
                <div class="" @click="fnResetInput">
                    <svgicon name="icon_close_add_modal" width="18" height="18" color="#A6A6A6" class="" />
                </div>
           </div>
           <div class="bg-zinc-50 mt-2 rounded-md flex flex-col items-start ">
                <div class="px-3 py-3" v-for="tag in tagSetedList" :key="tag.name">
                    <label>
                        <input type="checkbox" style=" border-radius:50%" class="radio-input mr-2.5" :value="tag.name" checked v-model="istagNotSetListChecked[tag.name]" />
                        {{ tag.name }}
                    </label>
                </div>
           </div>
           <div class="bg-zinc-50 mt-3 rounded-md flex flex-col items-start ">
                <div class="px-3 py-3" v-for="tag in tagSearch" :key="tag.name" >
                    <label>
                        <input type="checkbox" style=" border-radius:50%" class="radio-input mr-2.5" :value="tag.name" v-model="istagNotSetListChecked[tag.name]"/>
                        {{ tag.name }}
                    </label>
                </div>
           </div>
           <div v-show="isNoSearchTag" class="bg-zinc-50 mt-3 rounded-md flex flex-col items-start py-2.5">
                <div class="text-indigo-600 flex px-3 items-center" @click="createTag">
                    <div class="pr-2.5 ">
                        <svgicon name="icon_tag" width="18" height="18" color="#4f46e5" class="" />
                    </div>
                    Create "{{ inputTag }}"
                </div>
           </div>
        </div>
      </transition>
  
      <!-- Overlay -->
      <div
        v-show="isShow"
        class="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.2)] z-[999]"
        @click="fnCloseModal"
      ></div>
    </div>
  </template>
  
  <script>
  import '@/icons/icon_search';
  import '@/icons/icon_close_add_modal';
  import '@/icons/icon_tag';
  import PriorityPicker from '@/components/picker/PriorityPicker.vue';
  import TagPicker from '@/components/picker/TagPicker.vue';
  
  export default {
    components: {
      PriorityPicker,
      TagPicker,
    },
    data() {
      return {
        inputTag: '',
        tagList: [
            {
                name: 'tag1',
            },
            {
                name: 'tag2',
            },
            {
                name: 'tag3',
            },
            {
                name: 'tag4',
            },
            {
                name: 'tag5',
            },
        ],
        tagSetedList: [
            {
                name: 'tag1',
            },
            {
                name: 'tag2',
            },
            {
                name: 'tag3',
            },
        ],
        tagSearch: [],
        isNoSearchTag: false,
        istagNotSetListChecked: [

        ],
      };
    },
    computed: {
      isShow() {
        return this.$store.state.app.isUpdateTagModal;
      },
      tagNotSetList() {
         return this.tagList.filter(tag => !this.tagSetedList.some(setTag => setTag.name === tag.name));
      }
    },
    methods: {
      fnCloseModal() {
        this.fnReset()
        this.$store.commit('app/setShowUpdateTag', false)
      },
      fnSetTag() {
        this.tagNotSetList.forEach(tag => {
          if(this.istagNotSetListChecked[tag.name]) {
            this.tagSetedList.push(tag)
          }
        })
        this.tagSetedList.forEach(tag => {
          if(!this.istagNotSetListChecked[tag.name]) {
            this.tagSetedList = this.tagSetedList.filter(tag => this.istagNotSetListChecked[tag.name])
          }
        })
        this.fnCloseModal()
      },
      fnResetInput() {
        this.inputTag = ''
        this.fnFocus()
      },
      fnFocus() {
        this.$refs.inputTag.focus();
      },
      createTag() {
        if(this.tagSetedList.filter(tag => tag.name === this.inputTag).length > 0) {
            alert('This tag is existed')
            return
        }
        this.tagList.push({
          name: this.inputTag
        })
        this.$nextTick(() => {
          var _this = this
          var checkboxes = document.querySelectorAll('.radio-input');
          checkboxes.forEach(function (checkbox) {
            console.log('check123',checkbox.value, checkbox.checked)
            if (checkbox.value === _this.inputTag) {
              console.log('ok lot')
              checkbox.checked = true;
              _this.istagNotSetListChecked[_this.inputTag] = true
              console.log('llll',_this.istagNotSetListChecked )
              _this.inputTag = ''
            }
          });
        });
      },
      fnReset() {
        this.inputTag = '',
        this.isNoSearchTag = false
      },
    },
    watch: {
      isShow: function () {
        this.$nextTick(() => {
          this.$refs.inputTag.focus();
        });
      },
      inputTag() {
        this.tagSearch = this.tagNotSetList.filter(tag => tag.name.includes(this.inputTag))
        if(this.tagSearch.length == 0) {
            this.isNoSearchTag = true
        } else {
            this.isNoSearchTag = false
        }
      },
      tagNotSetList() {
        this.tagNotSetList.forEach((ele) => {
          this.istagNotSetListChecked[ele.name] = this.istagNotSetListChecked[ele.name]? true: false
        })
        console.log('iiii', this.istagNotSetListChecked)
        this.tagSearch = this.tagNotSetList
      },
    },
    mounted() {
        this.tagSearch = this.tagNotSetList
        this.tagSetedList.forEach(tag => {
          this.istagNotSetListChecked[tag.name] = true
        })
    },
  };
  </script>
  
  <style scoped>
  .input-px-3 {
        padding-left: 12px;
        padding-right: 12px;
    }
   .input-tag {
    border: none;
    outline: none;
    box-shadow: none;
  }

  .input-tag:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }
  .input-tag::placeholder {
    color:#a1a1aa;
    font-size: 14px;
  }
  .radio-input {
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  /* Tùy chỉnh kiểu dáng viền */
    border: 1px solid #A6A6A6!important;
    width: 16px;
    height: 16px;
    border-radius: 50%!important;
}

/* Đổi màu viền khi input radio được chọn */
.radio-input:checked {
  border-color: #A6A6A6;
}

</style>
  