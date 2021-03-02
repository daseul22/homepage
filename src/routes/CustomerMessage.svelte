<script>
	import Main from "../components/Main.svelte"
	import axios from "axios"

	let files = []

	const clearFile = () => {
		files = []
	}
	const uploadFile = async () => {
		try {
			const formData = new FormData()
			for (const file of files) {
				formData.append("files", file)
			}
			const res = await axios.post("http://localhost:3000/msg", formData, {
				headers: { "Content-Type": "multipart/form-data" }
			})
			console.log(res.data)
			alert("파일 전송 완료!")
		} catch (err) {
			console.error(err)
			alert(err)
		}
	}

	const deleteFile = index => e => {
		files = files.filter((_, i) => i != index)
	}
</script>

<Main label="사용자 메시지">
	<input
		id="fileUpload"
		multiple
		type="file"
		accept=".xlsx"
		on:change={e => {
			files = [...files, ...Object.values(e.target.files)]
		}} />
	<button on:click={uploadFile}>Submit</button>
	<button on:click={clearFile}>Clear</button>
	{#if files}
		{#each Object.entries(files) as [index, file]}
			<p>
				{index}.
				{file.name}
				<button
					class={`deleteFile_btn ${index}`}
					on:click={deleteFile(index)}>Delete</button>
			</p>
		{/each}
	{/if}
</Main>
