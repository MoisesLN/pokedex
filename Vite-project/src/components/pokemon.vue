<script>
export default {
    props: {
        id: Number,
        name: String,
        typesList: Array,
        img: String
    }
}

</script>

<template>
    <div class="card">
        <div class="id">Nº {{ id }} </div>
        <div class="name">{{ name }}</div>
        <div class="info">
            <div class="tags">
                <div :class="type" v-for="type in typesList">{{ type }}</div>
            </div>
            <img alt="Imagem do Pokemón" :src="img">
        </div>
    </div>
</template>