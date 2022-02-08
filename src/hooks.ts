/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    const response = await resolve(event, {
        // ssr: !event.url.pathname.startsWith('/lien-he')
    });

    return response;
}
