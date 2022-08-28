import React, { useState, useEffect } from 'react';
import { useAuth } from '../auth/authContext';
import { useFetch } from '../hooks/useFetch';
import {useParams} from 'react-router-dom'
import { CreatePost } from '../components/CreatePost';
import { deleteRequest } from '../helpers/deleteRequest';
import { Post } from '../components/Post';
import styled from 'styled-components';
import { media } from '../styles/global.styles';
import { useSetPage } from '../hooks/useSetPage';
import { useDelete } from '../hooks/useDelete';
import { useLogout } from '../hooks/useLogout';

const userLocale =
  navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language;


const StyledPosts = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap:2em;
    align-items: center;
    width: 60%;
    margin: auto;

    ${media.desktop}{
        gap:4em;
        margin-bottom: 2em;
        article{
            width: 60%;
            transform:scale(1.3);

          
        }
        
        article:nth-child(2n+1){
                margin-left:auto;
        }
        article:nth-child(2n){
                margin-right:auto;
        }
    }

`

export const PostPage = ( props) =>{
    useSetPage("Posts")
    const [postToDeleteID, setPostToDeleteID] = useState("")
    const params = useParams()
    const {loggedIn,token,user,logout} = useAuth()
    const {data,error,loading,getData} = useFetch(`${process.env.REACT_APP_BACKET_URL}/users/${params.UserId}/posts`,token,true);
    const {data:delData,error:delError,loading:delLoading,sendDeleteRequest} = useDelete(null,token)
    useLogout(delError)

    const deletePost = async (id) => {
        await sendDeleteRequest(`${process.env.REACT_APP_BACKET_URL}/users/${params.UserId}/posts/${id}`,token)

    }
    let updatePosts = async () => {
        if(delData && data && error && delError){
            return
        }
        await getData(`${process.env.REACT_APP_BACKET_URL}/users/${params.UserId}/posts`,token,true)
    }
    useEffect(() => {
        
      

        updatePosts()

    }, [delData,delError]);

    if(loading) return <span> Loading...</span>
    if(error) return <span> Error : {error.message}</span>
    let postcheck = false;
   
    
    if(user){
        if(Object.keys(user).length > 0) {
            postcheck = user._id === params.UserId
        }

    }
    if (data){

       return( <StyledPosts>
            {postcheck && <CreatePost handleRefetch={ ()=>updatePosts()}></CreatePost>}
           {data.posts && data.posts.length > 0 ? data.posts.map((post) => <Post deletable={postcheck} handleDelete={deletePost} id={post._id} key={post._id} heading={post.heading} content={post.content} time={"Posted on - " + new Date((post.createdAt).slice(0,10)).toLocaleDateString(userLocale)}></Post> ) : <span>No Posts</span>}
        </StyledPosts>)
    }
    }

{/* <button onClick={async () => await deletePost(post.id)}>Delete</button> */}