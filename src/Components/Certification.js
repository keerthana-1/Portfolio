import {
    ModalHeader,
    ModalDescription,
    ModalContent,
    ModalActions,
    Button,
    Modal,
    Icon
  } from 'semantic-ui-react'
import { useState } from 'react'

export default function Certifications(){

    const [open, setOpen] = useState(false)

    return (
        <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={ <Button icon labelPosition='left' style={{
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            cursor: 'pointer',
            fontSize: '1.5rem',
            color: '#78350F'
            }}>
        Certifications
        <Icon name="trophy" size="large" style={{ backgroundColor: 'transparent' }}></Icon>
        </Button>}
      >
        <ModalHeader className='text-amber-900 text-center'>Certifications</ModalHeader>
        <ModalContent>
          <ModalDescription className='pl-32'>
           <ul style={{ listStyleType: 'disc' }}>
            <li className='pb-3'>AZ-900 &nbsp;:&nbsp; Microsoft Azure Fundamentals</li>
            <li className='pb-3'>AI-900 &nbsp;:&nbsp; Azure AI Fundamentals</li>
            <li className='pb-3'>PEGA &nbsp;: &nbsp;Certified Senior System Architect</li>
            <li className='pb-3'>AWS &nbsp;:&nbsp; Certified Developer Associate</li>
            <li>EX288 &nbsp;:&nbsp; Redhat Openshift Application Developer</li>
           </ul>
          </ModalDescription>
        </ModalContent>
        <ModalActions>
          <Button color='brown' onClick={() => setOpen(false)}>
            Close
          </Button>
        </ModalActions>
      </Modal>
    )
}