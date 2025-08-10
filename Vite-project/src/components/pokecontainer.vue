<script>
const url = 'https://pokeapi.co/api/v2/pokemon/';
import pokemon from './pokemon.vue';

export default {
    components: {
        pokemon
    },
    data() {
        return {
             pokemons: []
        }
    },

    mounted() {
        for(let i=1; i<650; i++) {
            let EP = url + i;
            axios.get(EP).then(response => {
                const pokeData = response.data
                let typesList = []
                pokeData.types.forEach(type => {
                    console.log(type.type.name);
                    typesList.push(type.type.name)
                });
                let poke = {
                    id: pokeData.id,
                    name: pokeData.name,
                    typesList: typesList,
                    img: `https://raw.githubusercontent.com/PokeAPI/sprites/refs/heads/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokeData.id}.gif`
                }
                console.log(pokeData.name);
                console.log(poke);
                

                this.pokemons.push(poke);

            })
        }
        console.log(this.pokemons);
    },
}
// import 
</script>

<template>
    <main>
        <pokemon 
            v-for="poke in pokemons"
            :key="poke.id"
            :id="poke.id"
            :name="poke.name"
            :typesList="poke.typesList"
            :img="poke.img"
            ></pokemon>
    </main>
</template>