<template>
<h1>Hello {{ first_name }}!</h1>
</template>

<script>
export default {
    name: "UserHomeView",

    props: {
        first_name: String,
        role: String,
        permissions: String,
        avatar: String
    },

    created() {
        fetch('/movies')
            .then(res => res.json())
            .then(data => {
                console.table(data);
                this.movies = data[0];

                this.currentMovie = data[0][Math.floor(Math.random() * data[0].length)];
                })
        .catch(err => console.error(err));
    },

    data() {
        return {
            movies: [],
            currentMovie: {}
        }
    }
}
</script>