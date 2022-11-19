const { createStore } = require("redux");

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'LOG_IN': 
      return {
        ...prevState,
        user: action.data,
      };
    case 'LOG_OUT':
      return {
        ...prevState,
        user: null,
      };
    case 'ADD_POST': 
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      }
    default:
      return prevState;
  }
}

const initialState = {
  user: null,
  posts: [],
}

const store = createStore(reducer, initialState);
store.subscribe(() => {
  console.log('changed');
});

const logIn = (data) => {
  return {
    type: 'LOG_IN',
    data,
  };
};

const logOut = () => {
  return {
    type: 'LOG_OUT',
  }
};

const addPost = (data) => {
  return {
    type: 'ADD_POST',
    data,
  }
};

store.dispatch(logIn({
  id: 1,
  name: 'gonggong',
  admin: true,
}));

store.dispatch(addPost({
  userId: 1,
  id: 1,
  content: '안녕하세요, 리덕스 강의입니다.'
}));

store.dispatch(logOut());

store.dispatch(changeCompA('b'));

console.log('2nd', store.getState());


