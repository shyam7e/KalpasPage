import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Datas from './components/Datas'
import Pagination from './components/Pagination'
import Aside from './components/Aside'
import Form from './components/Form'

import './App.css'
function App() {
    const [posts,setPosts]=useState([]);
    const [loading,setLoading]=useState(false);
    const [currentPage,setCurrentPage]=useState(1);
    const [feedback,setfeedback]=useState(false);
    const [postsPerPage]=useState(6);
    const [toggle,setToggle]=useState(false);
    useEffect(()=>{
        const fetchData=async ()=>{
            setLoading(true);
            const res= await axios.get('https://api.first.org/data/v1/news');
            setPosts(res.data.data);
            setLoading(false);
        }
        fetchData();
        console.log(posts);
    },[])


    const paginate=(number)=>{setCurrentPage(number)}
    const indexOfLastPost=currentPage*postsPerPage;
    const indexOfFirstPost=indexOfLastPost-postsPerPage;;
    const currentPosts=posts.slice(indexOfFirstPost,indexOfLastPost)
    return (
        <main className="d-flex flex-row container-fluid m-0 p-0">
            <Aside toggle={toggle}
             setToggle={setToggle}
             feedback={feedback}
             setfeedback={setfeedback} />
            {
                feedback?(<Form/>):(<div className="d-flex flex-column  align-items-center justify-content-start container py-0 m-0 flexb">
                <div className={`${!toggle?"d-flex flex-column col":"row mt-4 pt-3"}`}>
                    <Datas posts={currentPosts} loading={loading} toggle={toggle} mainPost={posts} setPosts={setPosts}/>
                </div> 
                 <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
         </div>)
            }
          
        </main>
    )
}

export default App
