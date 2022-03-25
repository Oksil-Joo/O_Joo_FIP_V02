<template>
    <article class="card-rounded">
        <div class="card-body text-center" @click="navToHome">
            <img :src="require('@/assets/images/' + user.avatar)" alt="avata" class="rounded-circle img-fluid">
            <h2>{{ user.first_name }}</h2>
        </div>
    </article>
</template>

<script>

export default {
    name: "TheUserComponent",

    props: {
        user: Object
    },

    methods: {
        navToHome() {
            this.$router.push({name: "UserHomeView", params: this.user});
        }
    },
}
</script>