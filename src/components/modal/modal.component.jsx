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
    const { updateTask, showModal, setShowModal, setUpdateTask } =
        useContext(TaskContext);

    return (
        <AnimatePresence mode="wait">
            {(showModal || updateTask) && (
                <Backdrop
                    as={motion.div}
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <ModalContainer
                        as={motion.div}
                        variants={modalVariants}
                        // $color={updateTask.bgColor}
                    >
                        <ModalTitle>
                            {updateTask ? 'Update your note' : 'Add a note'}
                        </ModalTitle>
                        <TodoForm />
                        <ModalCloseButton
                            onClick={() =>
                                updateTask
                                    ? setUpdateTask('')
                                    : setShowModal(!showModal)
                            }
                        >
                            <CloseButton />
                        </ModalCloseButton>
                    </ModalContainer>
                </Backdrop>
            )}
        </AnimatePresence>
    );
};

export default Modal;
