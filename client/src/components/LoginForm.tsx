import React, { FC, useState } from 'react';

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    return (
        <div>
            <input 
            onChange={e=>setEmail(e.target.value)}
            type='text'
            value={email}
            placeholder='Email'
            />
            <input 
            onChange={e=>setPassword(e.target.value)}
            type='password'
            value={email}
            placeholder='Password'
            />
            <button>
                Login
            </button>
            <button>
                Registration
            </button>
        </div>
    );
};

export default LoginForm;