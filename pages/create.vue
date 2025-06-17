<script lang="ts" setup>
const taskName = ref("");
const errorMessage = ref("");
const loading = ref(false);

const onSubmit = () => {
	if (!taskName.value.trim()) {
		errorMessage.value = "Task is required!";
		return;
	}
	try {
		loading.value = true;
		errorMessage.value = "";
		console.log("hello");
		$fetch("/api/tasks", {
			method: "POST",
			body: { title: taskName.value },
		});
	}
	catch (e) {
		const error = e as FetchError;
		errorMessage.value = error.statusMessage || "Unknown error occured";
		console.error("Hello", e);
	}
	loading.value = false;
};
</script>

<template>
	<div>
		<article
			v-if="loading"
			aria-busy
		/>
		<article
			v-else-if="errorMessage"
			class="error"
		>
			{{ errorMessage }}
		</article>
		<form @submit.prevent="onSubmit">
			<label>
				Task
				<input
					v-model="taskName"
					type="text"
					name="title"
				>
			</label>
			<div class="button-container">
				<button>Create</button>
			</div>
		</form>
	</div>
</template>
