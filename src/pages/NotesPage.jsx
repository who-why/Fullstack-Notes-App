// import { fakeData as notes } from "../assets/fakeData.js";
// import { db } from "../appwrite/databases";
import NoteCard from "../components/NoteCard";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import Controls from "../components/Controls";

const NotesPage = () => {
    const { notes } = useContext(NotesContext);

    return (
        <div>
            {notes.map((note) => (
                <NoteCard note={note} key={note.$id} />
            ))}
            <Controls />
        </div>
    );
};

export default NotesPage;