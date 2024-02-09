'use client';

import { Button, Label, TextInput } from 'flowbite-react';

const Login = () => {
  return (
    <div className="w-1/2 mx-auto my-12">
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@flowbite.com"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput id="password2" type="password" required shadow />
        </div>

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};
export default Login;
