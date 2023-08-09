import Footer from '../footer/footer.component';
import Header from '../header/header.component';
import TodoPreview from '../todo-preview/todo-preview.component';

import { ContentsContainer } from './contents.styles';
import Modal from '../modal/modal.component';

const Contents = () => (
    <ContentsContainer>
        <Header />
        <h2 className="page-title">Notes</h2>
        <TodoPreview />
        <Footer />
        <Modal />
    </ContentsContainer>
);
export default Contents;
