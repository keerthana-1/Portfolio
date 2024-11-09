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

export default function Volunteering(){

    const [open, setOpen] = useState(false)

    return (
        <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={  <Button icon labelPosition='left' style={{
            backgroundColor: 'transparent',
            border: 'none',
            boxShadow: 'none',
            cursor: 'pointer',
            fontSize: '1.5rem',
            color: '#78350F'
        }}>
        Volunteering
        <Icon name="hand rock" size="large" style={{ backgroundColor: 'transparent' }}></Icon>
        </Button>}
      >
        <ModalHeader  className='text-amber-900 text-center'>Volunteering</ModalHeader>
        <ModalContent>
          <ModalDescription className='pl-32'>
            <ul style={{ listStyleType: 'disc' }}>
                <li className='pb-3'>Academic Support Volunteer at Make a Difference</li>
                <li className='pb-3'>Member of Computer society of India</li>
                <li>Member of Association for Computing Machinery</li>
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