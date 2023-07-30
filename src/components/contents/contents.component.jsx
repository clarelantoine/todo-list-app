import Footer from '../footer/footer.component';
import Header from '../header/header.component';
import TodoForm from '../todo-form/todo-form-component';
import TodoPreview from '../todo-preview/todo-preview.component';

import { ContentsContainer } from './contents.styles';

const Contents = ({ isTodoForm }) => (
    <ContentsContainer>
        <Header />
        <h2>Notes</h2>
        {isTodoForm && <TodoForm />}
        <TodoPreview />
        <Footer />
    </ContentsContainer>
);

export default Contents;
