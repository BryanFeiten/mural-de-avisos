module.exports = {

    posts: [
        {
            id: "hcdaciagbvcib",
            title: "Teste do Mural",
            description: "Descrição teste"
        },
    ],

    getAll() {
        return this.posts;
    },

    newPost(title, description) {

        this.posts.push({ id: generateID(), title, description});
    },

    deletePost(id) {
        this.posts = this.posts.filter(doc=>doc.id != id)
    }

}


function generateID() {
    return Math.random().toString(36).substring(2, 9);
}