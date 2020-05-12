<template>
    <div class="card">
        <div class="card-block">
            <p class="card-text">{{ comment.body }}</p>
        </div>
        <div class="card-footer">
            <a href="" class="comment-author">
                <img v-bind:src="comment.author.image" class="comment-author-img"/>
            </a>
            <a href="" class="comment-author">{{comment.author.username}}</a>
            <span class="date-posted">{{comment.createdAt}}</span>
            <span v-if="isCurrentUser" class="mod-options">
              <i class="ion-edit"></i>
              <i class="ion-trash-a"></i>
            </span>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { IComment } from "@/module/types";

    @Component
    export default class Comments extends Vue {
        @Prop() private comment!: IComment;

        // @Prop() private isCurrentUser!: boolean;
        //
        // set isCurrentUser(a: any) {
        //     console.log(a);
        // }

        get isCurrentUser(): boolean {
            console.log(this.comment.author.username);
            return false;
        }
    }
</script>

<style scoped>

</style>
