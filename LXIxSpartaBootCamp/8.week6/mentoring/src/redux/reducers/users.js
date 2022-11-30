const initialState = {};

const userReducer = (users = initialState, action) => {
  const {type} = action;

  switch (type) {
    case FETCH_USERS:
      return {...users, payload};

    default:
      return users;
  }
};

export default userReducer;