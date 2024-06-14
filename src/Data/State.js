
let state = {

    dialogsPage: {
        dialogs: [
            { id: 1, name: "Alexandr", },
            { id: 2, name: "Tania", },
            { id: 3, name: "Lenka", },
            { id: 4, name: "Mama", },
        ],


        messages: [
            { id: 77, message: "Hi", },
            { id: 777, message: "Hello", },
            { id: 7777, message: "Yo", },
            { id: 77777, message: "Bay bay", },
        ],
    },

    profilePage: {
        postsData: [
            { id: 9, post: "Hi", likesCount: 12, },
            { id: 10, post: "Hello", likesCount: 2, },
            { id: 11, post: "Yo", likesCount: 7, },
            { id: 12, post: "Bay bay", likesCount: 5, },
        ],
    },





};

export let addPost = (textPost) => {

    let post = {
        id: Date.now().toString(36) - Math.random().toString(36).slice(2),
        post: textPost,
        likesCount: Math.random() * 10,
    };
    state.profilePage.postsData.push(post);

}
export default state;