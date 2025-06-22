// app/not-found.tsx
import { Link } from '@heroui/link';
import { Button } from '@heroui/button';
import { ArrowLeft, Frown } from 'lucide-react';

type NotFoundProps = {
    message: string,
    href: string,
    backText: string
}

export default function NotFoundMessage({ message, href, backText }: NotFoundProps) {
    return (
        <div className='flex flex-col items-center justify-center text-center p-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <h1 className='text-5xl font-bold text-danger mb-4'>
                <Frown className='inline-block mr-2' />
                404

            </h1>
            <p className='text-lg text-default-500 mb-6'>
                {message}
            </p>
            <Button as={Link} href={href} color='primary' startContent={<ArrowLeft />}>
                {backText}
            </Button>


        </div>
    );
}
