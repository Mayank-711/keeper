import React from "react";
import notes from "../notes";

function Note() {
  return (
    NewNotes
  );
}

export default Note;

var NewNotes = notes.map(x => {
    return(
        <div className="note">
      <h1>{x.title}</h1>
      <p>{x.content}</p>
    </div>
    )
})