<script>
export default {
    props: {
        search: String,
        type: String
    },
    mounted() {
        const savedTheme = localStorage.getItem('theme') || 'fire';
        this.setTheme(savedTheme);
    },
    methods: {
        setTheme(newTheme){
            document.body.classList.remove('fire', 'water', 'leaf');
            document.body.classList.add(newTheme);
            localStorage.setItem('theme', newTheme);
            this.activeTheme = newTheme;
        },
        onSearchInput(e) {
            this.$emit('update:search', e.target.value)
        },
        onTypeChange(e) {
            this.$emit('update:type', e.target.value)
        }
    },

    data() {
        return {
            activeTheme: localStorage.getItem('theme') || 'fire'
        }
    },
}
</script>

<template>
    <header>
        <div class="icons">
            <div class="pokeicon" aria-label="Ícone da Pokedéx, juntamente com o nome.">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 910.13 908.95">
                    <title>5</title>
                    <path class="cls-1"
                        d="M337,730c.61-252,204.75-455.12,456.36-454.09,251.82,1,454.28,204.19,453.77,455.38s-204.7,454.42-455.63,453.56C539.59,1184,336.4,980.67,337,730Z"
                        transform="translate(-337 -275.94)" />
                    <path class="cls-2"
                        d="M510,764.63c35.7,0,71.41.21,107.11-.17,7.31-.08,10.2,2,12,9.28,18.82,73.7,86,125.21,163,125.39A168.44,168.44,0,0,0,955.42,773.8c2-7.44,4.77-9.34,12-9.31q107.67.35,215.35,0c8,0,9.52,1.5,8.64,9.91-17.11,163.09-136.13,305.55-302.49,345.19-136.23,32.45-259,1.84-364.57-90.72-72-63.09-113.69-143.59-129.42-237.73-4.43-26.52-4.49-26.5,22.66-26.5Z"
                        transform="translate(-337 -275.94)" />
                    <path class="cls-3"
                        d="M1073.7,695.83c-34.94,0-69.89-.26-104.82.19-8.34.11-11.65-2.73-13.91-10.64C935.18,616,874.39,565.77,806.24,562c-76.78-4.26-141.58,35.28-170.68,104.14-.87,2.07-1.66,4.19-2.38,6.31-8,23.38-8,23.38-33.4,23.38-64.63,0-129.25-.15-193.88.15-9.61,0-13.84-.92-12.11-12.72,22.8-155.69,106.22-266.09,251.65-325,156.73-63.54,330.1-21.39,443.93,103.13,57.07,62.43,90.45,136.3,101,220.32,1.76,14.11,1.64,14.15-12.93,14.16Q1125.56,695.84,1073.7,695.83Z"
                        transform="translate(-337 -275.94)" />
                    <path class="cls-2"
                        d="M793.12,848.53c-64.13.57-118.48-51.88-119-114.84-.55-67.27,51.26-121,117.05-121.43,64.85-.41,118.47,52.27,119.29,117.21C911.3,794,858.11,848,793.12,848.53Z"
                        transform="translate(-337 -275.94)" />
                    <path class="cls-1"
                        d="M793.1,672.52c32.69.37,57.55,26.21,57.15,59.39-.39,31.86-26.4,56.79-59,56.55a57.74,57.74,0,0,1-57.36-58.33C734.31,697.35,760.2,672.15,793.1,672.52Z"
                        transform="translate(-337 -275.94)" />
                </svg>
                <p>Pokedéx</p>
            </div>
            <div class="searchbar">
                <label for="search"><i class="bi bi-search"></i></label>
                <input 
                    type="text" 
                    name="search" 
                    id="search" 
                    placeholder="ID ou nome"
                    @input="onSearchInput"
                >
                <i class="bi bi-arrow-right" id="arrow"></i>
            </div>
            <div class="themes" id="themes">
                <i class="bi bi-fire"
                    @click="setTheme('fire')"
                    :class="{active: activeTheme === 'fire'}"
                ></i>
                <i class="bi bi-droplet-fill"
                    @click="setTheme('water')"
                    :class="{active: activeTheme === 'water'}"
                ></i>
                <i class="bi bi-leaf-fill"
                    @click="setTheme('leaf')"
                    :class="{active: activeTheme === 'leaf'}"
                ></i>
            </div>
        </div>
        <div class="type-search">
            <select name="typeSort" id="typesort" class="typeSort"
                @change="onTypeChange">
                <option value="all" class="type">Todos</option>
                <option value="normal" class="normal">Normal</option>
                <option value="fire" class="fire">Fire</option>
                <option value="water" class="water">Water</option>
                <option value="electric" class="electric">Electric</option>
                <option value="grass" class="grass">Grass</option>
                <option value="ice" class="ice">Ice</option>
                <option value="fighting" class="fighting">Fighting</option>
                <option value="poison" class="poison">Poison</option>
                <option value="ground" class="ground">Ground</option>
                <option value="flying" class="flying">Flying</option>
                <option value="psychic" class="psychic">Psychic</option>
                <option value="bug" class="bug">Bug</option>
                <option value="rock" class="rock">Rock</option>
                <option value="ghost" class="ghost">Ghost</option>
                <option value="dragon" class="dragon">Dragon</option>
                <option value="dark" class="dark">Dark</option>
                <option value="steel" class="steel">Steel</option>
                <option value="fairy" class="fairy">Fairy</option>
            </select>
        </div>
    </header>
</template>

<style>
    .cls-1 {
        fill: #010101;
    }

    .cls-2 {
        fill: #fff;
    }

    .cls-3 {
        fill: #eb2127;
    }

header {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid black;
    transition: background-color 0.2s ease-out;

    .icons {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .5em 1em;
        height: 65px;
        border-bottom: 1px solid black;
        font-size: 1.2em;
        font-weight: 500;

        .pokeicon {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .75em;

            svg {
                width: 40px;
                height: 40px;
            }
        }

        .searchbar {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2em;
            border-radius: 1000px;
            box-shadow: 0 0 2px 1px var(--gray-950);

            .bi-search {
                padding: .25em;
                padding-left: .5em;
                transition: 0.2s ease;
                display: flex;
                align-items: center;
            }

            input {
                height: 100%;
                width: 200px;
                border-radius: 1000px;
                padding: .5em;
                border: NONE;
                outline: none;
                transition: 0.2s ease;
            }

            .bi-arrow-right {
                border-top-right-radius: 2em;
                border-bottom-right-radius: 2em;
                cursor: pointer;
                width: 0;
                font-size: 0px;
                display: flex;
                align-items: flex-start;
                padding: .5em;
                padding-left: .25em;
                transition: 0.2s ease;
            }
        }

        .searchbar:has(input:not(:placeholder-shown)) {
            & .bi-search {
                width: 0%;
                font-size: 0;
            }

            & .bi-arrow-right {
                width: 1.5em;
                font-size: 1em;
            }

            & input {
                width: 232px;
            }
        }

        .themes {
            display: flex;
            gap: .5em;
            margin-right: 1em;
            font-size: 1.25em;

            i {
                color: var(--gray-500);
                transition: 0.2s ease;
                cursor: pointer;

                &:hover {
                    color: var(--gray-300);
                }

                &.bi-fire:hover {
                    color: var(--red-400);
                }

                &.bi-droplet-fill:hover {
                    color: var(--blue-400);
                }

                &.bi-leaf-fill:hover {
                    color: var(--green-400);
                }

                &.bi-fire.active {
                    color: var(--red-400);
                }

                &.bi-droplet-fill.active {
                    color: var(--blue-400);
                }

                &.bi-leaf-fill.active {
                    color: var(--green-400);
                }
            }
        }
    }

    .searchs {
        height: 35px;
    }
}

.fire header {
    background-color: var(--red-800);
}

.water header {
    background-color: var(--blue-800);
}

.leaf header {
    background-color: var(--green-700);
}

.fire header .icons .searchbar {
    background-color: var(--red-800);

    input:focus {
        border: 1px solid var(--red-900);
    }

    .bi-arrow-right {
        background-color: var(--red-800);
    }
}

.water header .icons .searchbar {
    background-color: var(--blue-800);

    input:focus {
        border: 1px solid var(--blue-900);
    }

    .bi-arrow-right {
        background-color: var(--blue-800);
    }
}

.leaf header .icons .searchbar {
    background-color: var(--green-800);

    input:focus {
        border: 1px solid var(--green-900);
    }

    .bi-arrow-right {
        background-color: var(--green-800);
    }
}

header .type-search {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

select {
    padding: .25em .5em;
    border-radius: 4px;
    box-shadow: 0 0 4px 1px var(--gray-800);
    color: white;
    background-color: var(--gray-800);
    width: 150px;
}

select:has(option[value="grass"]:checked) {
    background-image: linear-gradient(to top, var(--green-700), var(--green-400));
}

select:has(option[value="poison"]:checked) {
    background-image: linear-gradient(to top, var(--purple-800), var(--purple-600));
}

select:has(option[value="fire"]:checked) {
    background-image: linear-gradient(to top, var(--red-800), var(--red-600));
}

select:has(option[value="water"]:checked) {
    background-image: linear-gradient(to top, var(--blue-800), var(--blue-600));
}

select:has(option[value="flying"]:checked) {
    background-image: linear-gradient(to top, var(--gray-200), var(--blue-700) 70%);
}

select:has(option[value="ground"]:checked) {
    background-image: linear-gradient(to top, var(--yellow-900), var(--yellow-700));
}

select:has(option[value="ice"]:checked) {
    background-image: linear-gradient(to top, var(--blue-400), var(--blue-600));
}

select:has(option[value="bug"]:checked) {
    background-image: linear-gradient(to top, var(--green-800), var(--green-600));
}

select:has(option[value="normal"]:checked) {
    background-image: linear-gradient(to top, var(--gray-800), var(--gray-600));
}

select:has(option[value="electric"]:checked) {
    background-image: linear-gradient(to top, var(--yellow-600), var(--yellow-400));
}

select:has(option[value="fairy"]:checked) {
    background-image: linear-gradient(to top, var(--purple-600), var(--purple-400));
}

select:has(option[value="ghost"]:checked) {
    background-image: linear-gradient(to top, var(--purple-500), var(--purple-700));
}

select:has(option[value="dragon"]:checked) {
    background-image: linear-gradient(to top, var(--purple-800), var(--purple-950));
}

select:has(option[value="dark"]:checked) {
    background-image: linear-gradient(to top, var(--gray-800), var(--gray-950));
}

select:has(option[value="steel"]:checked) {
    background-image: linear-gradient(to top, var(--gray-500), var(--gray-400));
}

select:has(option[value="rock"]:checked) {
    background-image: linear-gradient(to top, var(--yellow-800), var(--yellow-600));
}

select:has(option[value="psychic"]:checked) {
    background-image: linear-gradient(to top, var(--purple-500), var(--purple-700));
}

select:has(option[value="fighting"]:checked) {
    background-image: linear-gradient(to top, var(--red-950), var(--red-500));
}

@media (max-width: 650px) {
    header {
        .icons {
            padding: 0.25em .5em;

            .pokeicon {
                gap: .25em;
                cursor: pointer;

                p {
                    font-size: 0;
                }

                svg {
                    width: 2.5em;
                }
            }

            .searchbar input {
                width: 125px;
            }

            .searchbar input:focus {
                width: 150px;
            }

            .searchbar .bi-search {
                display: none;
            }

            .searchbar:has(input:not(:placeholder-shown)) {
                & .bi-arrow-right {
                    width: 1.5em;
                    font-size: 1em;
                }

                & input {
                    width: calc(150px - 1.5em);
                }
            }

            .themes {
                gap: .2em;
                margin-right: 0;
            }
        }

    }
}
</style>