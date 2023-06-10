import React from "react";

function Contact(){
    return (
        <div>
        
        <div className="contactform">
        <h1>Contact</h1>
             <form name="contact" method="post" onSubmit="submit" data-netlify="true">

                <input type="hidden" name="contact" value="contact"></input>

                <table className="table1">
                    <tr>
                        <td><label>FirstName:</label></td>
                    <td><input type="text" name="firstname"></input></td>
                    
                    </tr>
                    <tr>
                        <td><label>LastName:</label></td>
                    <td><input type="text" name="lastname"></input></td>
                    
                    </tr>
                    <tr>
                        <td><label>Email:</label></td>
                    <td> <input type="email" name="email"></input></td>
                   
                    </tr>
                    <tr>
                        <td><label>Comments:</label></td>
                    <td><textarea name="comments" placeholder="leave your message here..."></textarea></td>
                    
                    </tr>
                </table>
            
                <br></br>
                <button type="submit">Submit</button>
                <br></br>
             </form>

        </div>
        </div>
       
        
    )
}

export default Contact;