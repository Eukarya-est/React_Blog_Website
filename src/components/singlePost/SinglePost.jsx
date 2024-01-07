import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg"
                    src="https://images.pexels.com/photos/169196/pexels-photo-169196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="" />
                <h1 className="singlePostTitle">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Alice</b>
                    </span>
                    <span className="singlePostDate">
                        1 hour ago
                    </span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Libero quaerat sint tenetur distinctio nesciunt, aut, exercitationem laudantium nemo perspiciatis in dignissimos! 
                    Deserunt maxime possimus soluta tenetur minus, quas obcaecati rem!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Libero quaerat sint tenetur distinctio nesciunt, aut, exercitationem laudantium nemo perspiciatis in dignissimos! 
                    Deserunt maxime possimus soluta tenetur minus, quas obcaecati rem!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Libero quaerat sint tenetur distinctio nesciunt, aut, exercitationem laudantium nemo perspiciatis in dignissimos! 
                    Deserunt maxime possimus soluta tenetur minus, quas obcaecati rem!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Libero quaerat sint tenetur distinctio nesciunt, aut, exercitationem laudantium nemo perspiciatis in dignissimos! 
                    Deserunt maxime possimus soluta tenetur minus, quas obcaecati rem!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Libero quaerat sint tenetur distinctio nesciunt, aut, exercitationem laudantium nemo perspiciatis in dignissimos! 
                    Deserunt maxime possimus soluta tenetur minus, quas obcaecati rem!
                </p>
            </div>
    </div>
  );
}
