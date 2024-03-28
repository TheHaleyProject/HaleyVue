<template>
  <div  class="min-w-full">
    <!-- <div class="col"><pre>{{ selected }}</pre></div> -->
    <div class="dropdown min-w-full" @click="showHideDropdown" style="position: relative;">
      <div class="overselect"></div>
          <select class="w-full bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block">
            <option value=""></option>
          </select>
      </div>
      <div class="multiselect min-w-full" style="position: relative;" v-if="showOptions" >
        <ul class="pt-2 min-w-full" tabindex="1"  >
          <li v-for="(option, index) in options" :key="index" class="min-w-full flex gap-2 justify-start hover:bg-gray-400 shadow-sm bg-gray-50 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500">
            <input class="p-2" type="checkbox" :id="option.id" :value="option.id" v-model="selected" >
            <label class="capitalize"  :for="option.id">{{ option.name }}</label>
          </li>
        </ul>
      </div>
  </div>
</template>

<script setup lang="ts">
import services from "@services";

interface Props {
  options: any;
  selected_items: any;
}

const _props = withDefaults(defineProps<Props>(), {
  options: [],
  selected_items: [],
});

//console.log(_props.selected_items.value);

const showOptions = ref<boolean>(false);
const selected = ref<any>([]);

selected.value = _props.selected_items;

function showHideDropdown() {
  showOptions.value = !showOptions.value;
}

const _emit = defineEmits<{
  (e: "checked", itemId: any): void;
}>();

// watch([() => _props.selected_items.value, () => selected.value], ([newselectedItems, newSelected], [oldSelectedItems, oldSelected]) => {
//   selected.value = _props.selected_items;
//   _emit('checked', newSelected)
//  });

//  watch(() => _props.selected_items, (new_ids, old_ids) => {
//    //selected.value = new_ids;
//    //selected.value = _props.selected_items;
//    //_emit('checked', new_ids)
//  });


 watch(() => selected.value, (new_ids, old_ids) => {
   _emit('checked', new_ids)
 });

function handleFocusOut() {
  //console.log("lost focus");
    showOptions.value = false;
};
function showDropdown() {
  showOptions.value = true;
  //console.log("got focus");
}

</script>

<style scoped>
.col {
  flex: 0 0 50%;
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
}


/*****
- MultiSelect 
*****/

.dropdown { 
  position: relative; 
  cursor: pointer;
}

.multiselect {
  position: relative;
  z-index: 99;

}

ul {
    border: 1px solid #ddd;
    border-top: 0;
    border-radius: 0 0 3px 3px;
    left: 0px;
    padding: 1px 1px;
    position: absolute;
    top: 0.5rem;
    list-style: none;
    height: 170px;;
    overflow: auto;
    background-color: rgb(248, 250, 252); 
  }
  li {
    margin-bottom: 7px;
    padding: 3px;
    
  }
.overselect {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
