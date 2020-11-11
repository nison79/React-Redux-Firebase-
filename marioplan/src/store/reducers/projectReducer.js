const initState = {
    projects : [
        {id:'1' , title: 'i want ot make a new program' ,content: 'blahsdjkfgkslgdhlksskldhgfkls'},
        {id:'2' , title: 'i want ot make a new program' ,content: 'blahsdjkfgkslgdhlksskldhgfkls'},
        {id:'3' , title: 'i want ot make a new program' ,content: 'blahsdjkfgkslgdhlksskldhgfkls'},
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
    return state
}

export default projectReducer;