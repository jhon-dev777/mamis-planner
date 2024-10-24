import { NoteStatus } from "../enums/note-status.enum";

export interface NoteDetail {
    title: string;
    notes: Note[]
}
export interface Note {
    description: string;
    date: String;
    status: NoteStatus;
}