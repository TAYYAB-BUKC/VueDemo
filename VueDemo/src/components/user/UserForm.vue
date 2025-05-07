<template>
    <div>
        <h2>Posts</h2>
        <article v-for="post in showposts" :key="post.id" class="post-article">
            <span class="post-label">Title:</span><h2 class="post-title">{{ post.title }}</h2>
            <p class="post-detail">
                <span class="post-label">Body:</span> {{ post.body }}
            </p>
            <p class="post-detail">
                <span class="post-label">Author Name:</span> {{ post?.author?.name || 'Unknown' }}
            </p>
        </article>

        <button type="button" @click="getPostsWithoutAuthor">List Posts Without Author(.all())</button>
        <button type="button" @click="getPostsWithAuthor">List Posts With Author (.get())</button>
        <button type="button" @click="insertPost">Insert Post</button>

    </div>
</template>

<script>
    import Post from '../../models/post'
    export default {
        name: 'UserForm',
        data() {
            return {
                posts: [
                    {
                        title: 'Hello, world!',
                        body: 'Some awesome body...',
                        author: {
                            name: 'John Doe',
                            email: 'john@example.com'
                        }
                    }
                ],
                showposts: []
            }
        },
        methods: {
            insertPost() {
                console.log('Submitting data to VuexORM Store:')
                Post.insert({ data: this.posts })
            },
            getPostsWithoutAuthor() {
                this.showposts = Post.all()
            },
            getPostsWithAuthor() {
                this.showposts = Post.query().with('author').get()
            },
        }
    }
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        max-width: 300px;
    }

    label {
        margin-top: 10px;
    }

    button {
        margin-top: 20px;
    }

    .post-article {
        margin-bottom: 20px;
        padding: 16px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: #fafafa;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    .post-title {
        font-size: 1.5em;
        font-weight: bold;
        color: #333;
        margin-bottom: 10px;
    }

    .post-detail {
        margin-bottom: 8px;
        color: #555;
    }

    .post-label {
        font-weight: 600;
        color: #000;
    }
</style>