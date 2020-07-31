import React,{useEffect,useState} from 'react'
import axios from 'axios'
import mockUser from './mockData/mockUser'
import mockFollowers from './mockData/mockFollowers'
import mockRepos from './mockData/mockRepos'

//Main Root Url
const rootUrl = 'https://api.github.com';

//Create Context
const GithubContext = React.createContext();

//Github Provider
function GitHubProvider({children}) {
    const [githubUser,setGithubUser] = useState(mockUser);
    const [githubFollowers,setGithubFollowers] = useState(mockFollowers);
    const [githubRepos,setGithubRepos] = useState(mockRepos);

       //request loading
    const[request,setRequest]=useState(0);
    const [isLoading,setIsLoading]=useState(false);
       
       //error
   
     const [error,setError]=useState({show:false,msg:""})

    const searchUser = async (user) => {
        toggleError();
        setIsLoading(true)
        const response = await axios.get(`${rootUrl}/users/${user}`)
        .catch((err)=>{console.log(err)})

        if(response){
            setGithubUser(response.data);
            const{login,followers_url} = response.data;


            await Promise.allSettled([
            axios.get(`${rootUrl}/users/${login}/repos?per_page=100`)
            ,axios.get(`${followers_url}?per_page=100`)])
            .then((results)=>{

                const [repos,followers] = results;
                const status = "fulfilled";
                if(repos.status === status){
                    setGithubRepos(repos.value.data); 
                }
                if(followers.status === status){
                    setGithubFollowers(followers.value.data)
                }
            })
        }
        else{
            toggleError(true,'there is no user with that username')
        }
        checkRequests();
        setIsLoading(false)
    }

    //toggleError Function
    function toggleError(show =false,msg = ' ') {
        setError({show,msg});
    }
    const checkRequests = () =>{
        axios.get(`${rootUrl}/rate_limit`)
        .then(({data:{rate:{remaining}}})=>{
            setRequest(remaining);
            if(remaining === 0){
                toggleError(true,'sorry, you have exceed your hurly rate limit!');
            }
        })
        .catch((err)=>{console.log(err)});
    }
   

    useEffect(checkRequests,[githubUser])
    return (
        
        <GithubContext.Provider value={{githubUser,githubFollowers,githubRepos,searchUser,request,error,isLoading}}>
            {children}
        </GithubContext.Provider>
    )
}

export {GitHubProvider,GithubContext};
