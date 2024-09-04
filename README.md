## The AUTH_SECRET environment variable.

To make authentication stuff work properly, you need to define a value for the AUTH_SECRET environment variable.
This value should be kept secret.
While developing, executing

```
npx auth secret
```

Should be enough, it will create an file called **env.local** in your project's root folder and will populate it with 
a random string that will be your secret onwards.

After that, reset your development environment and everything should work.

## How to log in

In this moment we are using a fake/hardcoded account, to log into the app you just need to provide johndoe@example.com as user email and 1234 as password.

