<script setup lang="ts">
import { ref } from 'vue';

const symptom = ref('');
const description = ref('');
const severity = ref(0);

const submitForm = async () => {
  try {
    const response = await fetch('http://localhost:3000/patient', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        symptom: symptom.value,
        description: description.value,
        severity: severity.value,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Form submitted successfully', data);
  } catch (error: any) {
    console.error('Error submitting form: ', error.message);
  }
};
</script>

<template>
  <div>
    <form @submit.prevent="submitForm">
      <label for="symptom">Symptom:</label>
      <input type="text" id="symptom" v-model="symptom" />

      <label for="description">Description:</label>
      <input type="text" id="description" v-model="description" />

      <label for="severity">Severity:</label>
      <input type="number" id="severity" v-model.number="severity" />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>