import {useEffect,useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import Allmovies from './movies'
import './main.css'
const apikey='http://www.omdbapi.com/?i=tt3896198&apikey=a35a513'

function App(){
    const [movies,setMovies]=useState([])
    const [searchTerm,setSearchTerm]=useState('')
 

    const searchMovies=async(title)=>{
const res=await fetch(`${apikey}&s=${title}`)
const data=await res.json()
setMovies(data.Search)
    }

    useEffect(()=>{
        searchMovies('superman')
    },[])

    return(
    <div>
        <div className='input-field'>
     
      <audio src='vidsong.mp3' autoPlay loop/>
<input type='text' value={searchTerm} placeholder='search movies' onChange={(e)=>setSearchTerm(e.target.value)}/>
<button onClick={()=>searchMovies(searchTerm)}><FaSearch className='btn'/></button>
        </div>
        {
            movies?.length>0?(
 <div className='movie-container'>
 
 {
    movies.map((movie)=>(
 <Allmovies movie={movie}/>
    ))
 }
      
        </div>
            ):(
                 <div className='empty'>
       <h1>oops!!! no movie found</h1>
        </div>
            )
        }
       
        </div>
    )
}
   

export default App