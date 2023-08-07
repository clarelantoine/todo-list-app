import { useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { TaskContext } from '../../contexts/task.context';
import TodoForm from '../todo-form/todo-form-component';
import { backdropVariants, modalVariants } from './modal.animations';
import {
    Backdrop,
    CloseButton,
    ModalCloseButton,
    ModalContainer,
    ModalTitle,
} from './modal.styles';

const Modal = () => {
    const { isTodoForm, setIsTodoForm } = useContext(TaskContext);

    return (
        <AnimatePresence mode="wait">
            {isTodoForm && (
                <Backdrop
                    as={motion.div}
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <ModalContainer as={motion.div} variants={modalVariants}>
                        <ModalTitle>Add a note</ModalTitle>
                        <TodoForm
                            isTodoForm={isTodoForm}
                            setIsTodoForm={setIsTodoForm}
                        />
                        <ModalCloseButton
                            onClick={() => setIsTodoForm(!isTodoForm)}
                        >
                            <CloseButton />
                        </ModalCloseButton>
                        {/* <ModalCloseButton
                            onClick={() => setIsTodoForm(!isTodoForm)}
                        >
                            Close
                        </ModalCloseButton> */}
                    </ModalContainer>
                </Backdrop>
            )}
        </AnimatePresence>
    );
};

export default Modal;
