import Footer from '../footer/footer.component';
import DashboardHeader from '../dashboard-header/dashboard-header.component';
import NotePreview from '../note-preview/note-preview.component';

import { ContentsContainer } from './contents.styles';
import Modal from '../modal/modal.component';

const Contents = () => (
    <ContentsContainer>
        <DashboardHeader />
        <h2 className="page-title">Notes</h2>
        <NotePreview />
        <Footer />
        <Modal />
    </ContentsContainer>
);
export default Contents;
