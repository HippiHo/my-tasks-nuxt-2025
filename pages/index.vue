<script lang="ts" setup>
const {
    data: tasks,
    error,
    status,
} = await useFetch("/api/tasks", {
    lazy: true,
});
</script>

<template>
    <div>
        <h1>My Tasks</h1>
        <article v-if="status === 'pending'" aria-busy="true" />
        <article v-else-if="error" class="error">{{ error.statusMessage }}</article>
        <div v-else>
            <article v-for="task in tasks" :key="task.id">
                {{ task.title }}
            </article>
        </div>
    </div>
</template>
