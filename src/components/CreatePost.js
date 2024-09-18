// import { useContext, useRef } from "react";
// import { PostList } from "../store/post-list-store"
// import { useNavigate } from "react-router-dom";

import { Form, redirect } from "react-router-dom";

const CreatePost = () => {

  // const { addPost } = useContext(PostList);
  // const navigate = useNavigate();

  /*const userIdElem = useRef();
  const postTitleElem = useRef();
  const postBodyElem = useRef();
  const postReactionsElem = useRef();
  const postHashtagsElem = useRef();*/

  //  const handleSubmit = (event) => {
    /*event.preventDefault();
    const userId = userIdElem.current.value;
    const postTitle = postTitleElem.current.value;
    const postBody = postBodyElem.current.value;
    const postReaction = postReactionsElem.current.value;
    const postHashtags = postHashtagsElem.current.value.split(' ');*/

    /*userIdElem.current.value = "";
    postTitleElem.current.value = "";
    postBodyElem.current.value = "";
    postReactionsElem.current.value = "";
    postHashtagsElem.current.value = "";};*/

    

  

  return (
    <Form method="POST" className="create-post" /*onSubmit={handleSubmit}*/>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your User Id Here
        </label>
        <input
          type="text"
          // ref={userIdElem}
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          // ref={postTitleElem}
          name="title"
          className="form-control"
          id="title"
          placeholder="How Are You Feeling Today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          // ref={postBodyElem}
          name="body"
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell Us More About It"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number Of Reactions
        </label>
        <input
          type="text"
          // ref={postReactionsElem}
          name="reactions"
          className="form-control"
          id="reactions"
          placeholder="How Many People Reacted To This Post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Your Hashtags Here
        </label>
        <input
          type="text"
          // ref={postHashtagsElem}
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Please Enter Your Tags Using Space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function postSubmit  (data)  {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify (postData),
  })
  .then(res => res.json())
  .then(post => {
    console.log(post);
  });

  return redirect("/");
}

export default CreatePost;