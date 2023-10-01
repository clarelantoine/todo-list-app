import { useContext } from 'react';
import { useMatch } from 'react-router-dom';
import Filter from '../filter/filter.component';
import * as Styled from './note-sidebar.styles';
import { TaskContext } from '../../contexts/task.context';

const NoteSidebar = () => {
    const { showModal, setShowModal } = useContext(TaskContext);
    const isNotesRoute = useMatch('/dashboard/notes');

    return (
        <>
            {isNotesRoute ? (
                <Styled.AddNewIcon onClick={() => setShowModal(!showModal)} />
            ) : (
                <Styled.NotesIcon />
            )}
            {isNotesRoute && <Filter />}
        </>
    );
};

export default NoteSidebar;
