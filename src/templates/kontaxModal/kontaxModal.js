import React, { useState } from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import './kontaxModal.css'

export default function kontaxModal({ children, modalTitle }) {
    const [modalIsOpen, setIsOpen] = useState(false)
    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <React.Fragment>
            <button onClick={openModal} className='text-kontax-secondary-text'>
                {modalTitle}
            </button>
            <Modal
                isOpen={modalIsOpen}
                contentLabel='Kontax Cam Modal'
                onRequestClose={closeModal}
                className='Modal text-white mx-auto px-10 py-5 rounded-lg flex-1 w-4/5 max-w-md bg-white'
                overlayClassName='Overlay'
            >
                <ModalLayout className='text-center text-black'>
                    {children}
                </ModalLayout>
                <ModalButtonWrapper className='text-center mt-4 border-t border-kontax-white text-black'>
                    <button
                        onClick={closeModal}
                        className='font-medium text-lg mt-4'
                    >
                        OK
                    </button>
                </ModalButtonWrapper>
            </Modal>
        </React.Fragment>
    )
}

kontaxModal.PropTypes = {
    children: PropTypes.node.isRequired,
    modalTitle: PropTypes.string.isRequired,
}

const ModalLayout = styled.div`
    text-align: -webkit-center;
`
const ModalButtonWrapper = styled.div``
