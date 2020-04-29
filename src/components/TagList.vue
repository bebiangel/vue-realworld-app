<template>
    <div class="col-md-3">
        <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
                <template v-for="(tag, index) in tags">
                    <router-link class="tag-default tag-pill tag-outline"
                                 :key="index"
                                 to="/:tag"
                    >
                        {{ tag }}
                    </router-link>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TagList",
        data() {
            return {
                tags: []
            }
        },
        methods: {
            getTags() {
                this.$http.get('/tags')
                    .then(res => {
                        console.log(res.data);
                        this.tags = res.data.tags;
                    })
            }
        },
        created() {
            this.getTags()
        }
    }
</script>

<style scoped>

</style>
