import React from 'react';

const Page = () => {
    return (
        <div>
            AboutPage working!
        </div>
    );
};

export default Page;

export async function generateStaticParams() {
    return [
        { slug: 'hello-world' },
        { slug: 'nextjs-tutorial' },
        { slug: 'my-first-post' },
    ];
}