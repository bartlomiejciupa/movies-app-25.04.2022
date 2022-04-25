import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../db";

const InputMovie = ({
  id,
  movie,
  rate,
  year,
  watched,
  comments,
  refreshList,
}) => {
    console.log('Ja też działam');
  const [commentInput, setCommentInput] = useState("");

  const editComment = async () => {
    const comment = commentInput;

    await updateDoc(doc(db, "movies-app", id), {
      comment: comment,
    });
    //setEditMode();
    refreshList();
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    editComment();
  };
  return (
    <div>
        <div>
           {comments}
        </div>
      {/* <form onSubmit={handleSubmit}>
        <label for="edit-comment">Dodaj Komentarz</label>
        <input
          type="text"
          name="edit-comment"
          id="edit-comment"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
      </form> */}
      <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text" 
                        value={commentInput} 
                        placeholder="Imie i nazwisko" 
                        onChange={(e) => setCommentInput(e.target.value)} 
                    />
                </div>
               
                <button type="submit">Zapisz zmiany</button>
            </form>
    </div>
  );
};

export default InputMovie;
