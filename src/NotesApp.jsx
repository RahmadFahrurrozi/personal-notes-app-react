import React, { useState } from "react";
import CardListNote from "./components/CardList/CardListNote";
import "./style/mainStyle.css";
import SearchBar from "./components/Navbar/SearchBar";
import { getInitialData } from "./utils/data";

export default function NotesApp() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchKeyword, setSearchKeyword] = useState("");
  const [newNote, setNewNote] = useState({ title: "", body: "" });

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const activeNotes = filteredNotes.filter((note) => !note.archived);
  const archivedNotes = filteredNotes.filter((note) => note.archived);

  const addNote = (e) => {
    e.preventDefault();
    if (newNote.title.trim() && newNote.body.trim()) {
      const createdNote = {
        id: +new Date(),
        title: newNote.title,
        body: newNote.body,
        archived: false,
        createdAt: new Date().toISOString(),
      };
      setNotes([...notes, createdNote]);
      setNewNote({ title: "", body: "" });
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const toggleArchive = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
  };

  const handleTitleChange = (e) => {
    if (e.target.value.length <= 50) {
      setNewNote({ ...newNote, title: e.target.value });
    }
  };

  return (
    <main>
      <div className="note-app__body">
        <SearchBar keyword={searchKeyword} keywordChange={setSearchKeyword} />
        <div className="note-input">
          <h2>Buat catatan</h2>
          <form onSubmit={addNote}>
            <input
              type="text"
              placeholder="Judul catatan..."
              value={newNote.title}
              onChange={handleTitleChange}
              required
            />
            <p className="text-limit">
              Sisa karakter: {50 - newNote.title.length}
            </p>
            <textarea
              placeholder="Tuliskan catatanmu di sini..."
              value={newNote.body}
              onChange={(e) => setNewNote({ ...newNote, body: e.target.value })}
              required
            ></textarea>
            <button type="submit">Buat</button>
          </form>
        </div>
        <h2>Catatan Aktif</h2>
        <div className="notes-list">
          {activeNotes.length > 0 ? (
            <CardListNote
              notes={activeNotes}
              onDelete={deleteNote}
              onArchive={toggleArchive}
            />
          ) : (
            <p>Tidak ada catatan aktif</p>
          )}
        </div>
        <h2>Arsip</h2>
        <div className="archived-notes-list">
          {archivedNotes.length > 0 ? (
            <CardListNote
              notes={archivedNotes}
              onDelete={deleteNote}
              onArchive={toggleArchive}
            />
          ) : (
            <p>Tidak ada catatan yang diarsipkan</p>
          )}
        </div>
      </div>
    </main>
  );
}
