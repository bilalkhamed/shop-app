import NotFoundMessage from '@/components/not-found-message';

export default function NotFound() {
    return (
        <>
            <NotFoundMessage
                message="Sorry, we couldn't find the product you're looking for. It may have been removed or the link is incorrect."
                href="/categories"
                backText="Browse Categories"
            />
        </>
    );
}