<script>
	import About from './about.svelte';
	import { onMount } from 'svelte';
	let todos = [];
	let newTodo = '';
	const addTodo = () => {
		todos = [...todos, newTodo];
		newTodo = '';
		localStorage.setItem('todos', JSON.stringify(todos));
	};
	const clearAllTodos = () => {
		todos = [];
		localStorage.setItem('todos', '');
	};
	onMount(async () => {
		const existingTodos = localStorage.getItem('todos');
		todos = JSON.parse(existingTodos) || [];
	});
</script>

<div class="flex flex-col justify-center h-screen bg-orange-300">
	<div>
		<div class="container mx-auto max-w-screen-sm bg-white p-4 rounded shadow-2xl ">
			<h1 class="text-3xl font-bold uppercase text-orange-400 mb-4">Svelte Todo list</h1>
			<ul class="list-disc ml-5">
				{#each todos as todo}
					<li>{todo}</li>
				{/each}
			</ul>
			<div class="py-4">
				<input type="text" name="todo" id="" placeholder="Add todo here" bind:value={newTodo} />
				<div class="flex flex-row space-x-2 mt-4">
					<button
						on:click|preventDefault={addTodo}
						class="bg-orange-400 hover:bg-orange-600 text-white uppercase px-4 py-2.5 rounded">
						Add Todo
					</button>
					<button
						on:click|preventDefault={clearAllTodos}
						class="bg-orange-600 hover:bg-orange-400 text-white uppercase px-4 py-2.5 rounded">
						Clear all todos
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
