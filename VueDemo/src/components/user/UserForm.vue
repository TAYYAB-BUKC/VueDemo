<template>
    <div>
        <h2>Insert Data</h2>
        <h3>Generated JSON:</h3>
        <pre>{{ posts }}</pre>
        <button type="button" @click="submitForm">Insert Above Mock Data</button>


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
                        id: 1,
                        title: 'Hello, world!',
                        body: 'Some awesome body...',
                        author: {
                            id: 1,
                            name: 'John Doe',
                            email: 'john@example.com'
                        }
                    }
                ]
            }
        },
        methods: {
            submitForm() {
                console.log('Submitting data to VuexORM Store:')
                Post.insert({ data: this.posts })
            }
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
</style>