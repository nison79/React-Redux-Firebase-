export const createProject = (project) => {
    return (dispatch , getState) => {
        //make async to db

        dispatch({ type: 'CREATE_PROJECT' , project })
    }
}