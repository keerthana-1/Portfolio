import { Icon, Popup } from 'semantic-ui-react'
import { Divider } from 'semantic-ui-react'

function Footer(){

    const openLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (

        <div className="mb-10 text-center text-amber-900" id="contact">
            <footer>
            <Divider horizontal className='pb-5'><p className='text-lg font-semibold  text-amber-900'> get in touch &nbsp; <Icon name="coffee"></Icon> </p></Divider>
               
            <Popup content='Github' trigger={<Icon  name='github' size="big" className='pr-20 cursor-pointer' onClick={() => openLink("https://github.com/keerthana-1")} />} />
            <Popup content='Leetcode' trigger={<Icon  name='code' size="big" className='pr-20 cursor-pointer' onClick={() => openLink("https://leetcode.com/u/arkeerthana/")} />} />
            <Popup content='Linkedin' trigger={<Icon  name='linkedin' size="big" className='pr-20 cursor-pointer' onClick={() => openLink("https://www.linkedin.com/in/lakshmi-keerthana-aravapalli")}/>} />
            <Popup content='Gmail' trigger={<Icon  name='mail' size="big" className='pr-20 cursor-pointer' onClick={() => openLink("mailto:lakshmikeerthanaaravapalli@gmail.com")}/>} />

            </footer>
        </div>
    )
}

export default Footer;