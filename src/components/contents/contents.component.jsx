import { useContext } from 'react';
import Footer from '../footer/footer.component';
import Header from '../header/header.component';
import TodoForm from '../todo-form/todo-form-component';
import TodoPreview from '../todo-preview/todo-preview.component';

import { ContentsContainer } from './contents.styles';
import { TaskContext } from '../../contexts/task.context';
import Modal from '../modal/modal.component';

const Contents = () => (
    // const { isTodoForm } = useContext(TaskContext);
    // const { isTodoForm, setIsTodoForm } = useContext(TaskContext);

    <ContentsContainer>
        <Header />
        <h2 className="page-title">Notes</h2>
        <TodoPreview />
        <Footer />
        <Modal />
    </ContentsContainer>
);
export default Contents;
