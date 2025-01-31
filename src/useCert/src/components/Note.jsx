/* eslint-disable react/prop-types */
import styles from './Note.module.css';

function Note({ note, onDelete }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

    return (
        <div className={styles['note-container']}>
            <p className={styles['note-title']}>{note.title}</p>
            <p className={styles['note-content']}>{note.content}</p>
            <p className={styles['note-date']}>{formattedDate}</p>
            <button className={styles['delete-button']} onClick={() => onDelete(note.id)}>
                Delete
            </button>
        </div>
    );
}

export default Note;
