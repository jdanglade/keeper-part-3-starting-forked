import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleNote(event) {
    const newTitle = event.target.value;
    setNote((prevNotes) => {
      return [
        ...prevNotes,
        {
          title: newTitle,
          text: prevNotes.content,
        },
      ];
    });
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Take a note..." rows="3" />
        <button
          onClick={() => {
            props.onAdd(note);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
