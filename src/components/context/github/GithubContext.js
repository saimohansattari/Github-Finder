import { createContext, useReducer} from "react";
import githubReducer from "./GithubReducer";


const GithubContext = createContext()

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


export const GithubProvider = ({children}) =>{
   const intialState = {
    users: [],
    user: {},
    loading: false,

   }

   const [state,dispatch] = useReducer(githubReducer,intialState)



  // Get search results
  const searchUsers = async (text) =>{

    setLoading()

    const params = new URLSearchParams({
      q: text
    })

    const reponse = await fetch(`${GITHUB_URL}/search/users?${params}`,{
      headers : {
        Authorization : `token ${GITHUB_TOKEN}`
      }
    })

    const {items} = await reponse.json()

    dispatch({
        type: 'GET_USERS',
        payload: items,
    })
  }

  //get a singl user
  const getUser = async (login) =>{

    setLoading()

   

    const reponse = await fetch(`${GITHUB_URL}/users/${login}`,{
      headers : {
        Authorization : `token ${GITHUB_TOKEN}`
      }
    })


    if(Response.status === 404){
      window.location = './notfound'
    }else {
      const data = await reponse.json()

      dispatch({
          type: 'GET_USER',
          payload: data,
      })
    }


    
  }

  //clear users from state
  const clearUsers = () => dispatch({type: 'CLEAR_USERS'})

  //set loading
  const setLoading = () => dispatch({type:'SET_LOADING'})

  return <GithubContext.Provider value={{
    users: state.users,
    loading: state.loading,
    user:state.user,
    searchUsers,
    clearUsers,
    getUser

  }}>
    {children}
  </GithubContext.Provider>
}

export  default GithubContext