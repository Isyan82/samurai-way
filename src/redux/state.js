const state = {
  profilePage: {
    posts: [
      { post: "Hello, how are you?", id: 1, likesCount: 10 },
      { post: "Hi! I,m fine!", id: 2, likesCount: 10 }
    ],
    newPostText: 'it-kamasutra'
  },
  dialogPage: {
    dialogs: [
      { name: 'Ivan', id: 1 },
      { name: 'Dima', id: 2 },
      { name: 'Mama', id: 3 },
      { name: 'Vasilisa', id: 4 },
      { name: 'Masha', id: 5 }
    ],
    messages: [
      { message: "Hi", id: 1 },
      { message: "Hi-hi!", id: 2 },
      { message: "How are you?", id: 3 },
      { message: "i'm fine", id: 4 },
      { message: "Good!", id: 5 }
    ]
  },
  sidebar: {
    nav: [
      { id: 1, title: 'Profile', path: '/profile' },
      { id: 2, title: 'Messages', path: '/dialogs' },
      { id: 3, title: 'News', path: '/news' },
      { id: 4, title: 'Music', path: '/music' },
      { id: 5, title: 'Settings', path: '/settings' }
    ]
  }
}
// window.state = state
// export const addPost = () => {
//   let newPost = {
//     id: state.profilePage.posts.length + 1,
//     post: state.profilePage.newPostText,
//     likesCount: 0
//   }
//   state.profilePage.posts.push(newPost)
//   state.profilePage.newPostText = ''
//   rerendetEntireTree(state)
// }

// export const updateNewPostText = (newText) => {
//   state.profilePage.newPostText = newText
//   rerendetEntireTree(state)
// }

// export const subscribe = (observer) => {
//   rerendetEntireTree = observer
// }

export default state