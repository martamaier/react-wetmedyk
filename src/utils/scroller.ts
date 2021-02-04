export const scrollToElement = (element: string) => window.scrollTo(
    {
        top: (document.getElementById(element) as any).offsetTop,
        behavior: 'smooth',
    },
);
