import { useState } from "react"
import { useHistory } from "react-router-dom"

const Create = () => {
     const [title, setTitle] = useState('')
     const [body, setBody] = useState('')
     const [author, setAuthor] = useState('mario')
     const [isPending, setIsPending] = useState(false)
     const history = useHistory()

     const handleSubmit = e => {
          e.preventDefault();
          const blog = {
               title, body, author
          }

          setIsPending(true);
          
          fetch("http://localhost:8000/blogs/",{
               method : "POST",
               headers : { "Content-Type" : "application/json" },
               body: JSON.stringify(blog)
          })
          .then( res => {
               console.log('new blog added')
               setIsPending(false);
               history.push('/')
          })
          
     }
      
     return(
          <div className="create">
               <h2 style={{textAlign:"center"}}>Add New Blog</h2>
               <form onSubmit={handleSubmit} className="createForm">
                    <div className="form-group">
                         <label htmlFor="">Blog Title</label>
                         <input type="text" className="form-control" value={title} 
                         onChange={
                              (e) => setTitle(e.target.value)
                         }
                         />
                    </div>
                    <div className="form-group">
                         <label htmlFor="">Blog Body</label>
                         <textarea name="" id="" rows="3" className="form-control"
                         value={body}
                         onChange={(e) => setBody(e.target.value)}
                         ></textarea>
                    </div>
                    <div className="form-group">
                         <label htmlFor="">Blog Author</label>
                         <select name="" className="form-control"
                         value={author}
                         onChange={(e) => setAuthor(e.target.value)}
                         >
                              <option value="mario">Mario</option>
                              <option value="yoshi">Yoshi</option>
                         </select>
                    </div>
                    <div className="form-group">
                         { !isPending && <button type="submit">Add</button>}
                         { isPending && <button type="submit" disabled>Add...</button>}
                    </div>
               </form>
          </div>
     );
     
}
export default Create;