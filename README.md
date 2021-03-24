## Hello, this is my [Portfolio](https://matthewdodd.net/) built with Next.js and CSS modules. Feel free to fork and reuse, you can just swap out your projects/skills info in `data/projects.json` and `data/services.json`, you'll need to just edit some of the markup text too.

If you want to use emailjs like I have done for the contact form you'll need to set up an account on [emailjs](https://www.emailjs.com/) (free account for a couple hundred emails per month) then just create a .env.local and copy over your email template key. It should look something like this in your .env.local

```
NEXT_PUBLIC_EMAIL_USER=user_sdfjsdoigjjlgjdfklgjfdklgjdflkgjfdkl
NEXT_PUBLIC_EMAIL_TEMPLATE=template_ewregjdlh;jfdlkjfgklhjglfhjkfglhjklfg
NEXT_PUBLIC_EMAIL_SERVICE=service_sdgfd;gkfdl;gkfdl;gfdl;gwsiudfh
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
