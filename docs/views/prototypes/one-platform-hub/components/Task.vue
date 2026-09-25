<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

const props = defineProps({
  task: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
});

const task = ref({
  ...props.task,
  ...props.task.columns,
  cta: `https://crm.iamproperty.com.au/Task/Edit?taskId=12`, // returned by CRM API after creating the task
  title: 'Task Title',
  priority: 'medium',
  startDate: new Date().toISOString().split('T')[0], // default to today
  dueDate: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString().split('T')[0], // default to 7 days from today
  assignee: 'John Doe', // default to first assignee
  description: '',
  checklist: []
});

const assignees = ref([
  'John Doe',
  'Jane Smith',
  'Bob Johnson'
]);

const checklistItem = ref('');

const addChecklistItem = () => {
  if (checklistItem.value != "") {
    task.value.checklist.push({ text: checklistItem.value, completed: false });
    checklistItem.value = '';
  }
};


const emit = defineEmits(['previous', 'next', 'close', 'added', 'added-last']);

const add = () => {

  emit('added',task.value);
  emit('next');
};

const addLast = () => {

  emit('added-last',task.value);
  emit('close');
};


</script>

<template>
  <p class="lead text-heading text-center">Task details for {{ task['Property Short Address'] }}</p>

  <label>Task title *
    <input type="text" v-model="task.title" required />
  </label>


  <label>Priority status
    <select v-model="task.priority" required>
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
  </label>

  <label v-if="assignees.length > 0">
    Task assignee(s)
    <select
      v-model="task.assignee"
      required
    >
      <option v-for="assignee in assignees" :key="assignee" :value="assignee">{{ assignee }}</option>
    </select>
  </label>

  <div class="dates">
    <label>
      Start date *
      <input type="date" v-model="task.startDate" required />
    </label>
    <label>
      Due date *
      <input type="date" v-model="task.dueDate" required />
    </label>
  </div>


  <label>
    Task description
    <textarea v-model="task.description" rows="3"></textarea>
  </label>


  <div class="add-checklist">

    <label>
      Task checklist
      <input name="checklist-item" v-model="checklistItem" @keydown.enter.prevent="addChecklistItem" class="input--sm" />
    </label>
    <button @click.prevent="addChecklistItem" class="btn btn-action">Add item</button>

  </div>

  <fieldset v-for="(item, index) in task.checklist" :key="index" class="checklist-item">
    <label><input type="checkbox" v-model="task.checklist[index].completed" /></label>
    <span>{{ item.text }}</span>
    <button @click.prevent="task.checklist.splice(index, 1)" class="btn btn-secondary colour-danger btn-sm btn-compact fa-trash">Remove</button>
  </fieldset>

  <div class="btn__group mb-0 pt-2">
    <button @click="$emit('close')" class="btn btn-secondary">Cancel</button>
    <button v-if="index < total - 1" @click="add" class="btn btn-primary">Confirm and add next</button>
    <button v-else @click="addLast" class="btn btn-primary">Confirm and finish</button>
  </div>

  <div class="text-center mb-0 mt-2" v-if="index < total - 1">
    <button @click="$emit('next')" class="btn btn-tertiary">Skip this item</button>
  </div>


</template>

<style scoped>
  .dates {
    display: flex;
    gap: 1rem;

    & > label {
      flex: 1;
    }
  }

  .add-checklist {
    display: flex;
    gap: 1rem;

    & > label {
      flex: 1;
    }

  }

  .checklist-item {
    display: flex;

    &:has(input[type="checkbox"]:checked) span{
      text-decoration: line-through;
    }
    .btn-compact {
      margin-top: auto;
      margin-bottom: 0;
    }
  }

</style>
