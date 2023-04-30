import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illo atque odio cupiditate eveniet mollitia aliquid harum enim assumenda laboriosam et doloremque necessitatibus perferendis quas, reiciendis placeat voluptate maxime sequi? Nulla quam sed facilis eveniet, ad ex nisi suscipit dolores et, quibusdam commodi enim beatae. Voluptatibus sit est voluptas dolorem?</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;