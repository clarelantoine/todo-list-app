import { useContext } from 'react';
import Filter from '../filter/filter.component';
import { AddNewIcon } from './note-sidev=bar.styles';
import { TaskContext } from '../../contexts/task.context';

const NoteSidebar = () => {
    const { showModal, setShowModal } = useContext(TaskContext);

    return (
        <>
            <AddNewIcon onClick={() => setShowModal(!showModal)} />
            <Filter />
        </>
    );
};

export default NoteSidebar;
