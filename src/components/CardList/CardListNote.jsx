import React from "react";

export default function CardListNote({ notes, onDelete, onArchive }) {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <div key={note.id} className="card-list-note">
          <h3 className="card-title">{note.title}</h3>
          <p className="card-date">
            {new Date(note.createdAt).toLocaleDateString("id-ID", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="card-description">{note.body}</p>
          <div className="card-actions">
            <button className="delete-button" onClick={() => onDelete(note.id)}>
              Hapus
            </button>
            <button
              className="archive-button"
              onClick={() => onArchive(note.id)}
            >
              {note.archived ? "Pindahkan" : "Arsipkan"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
