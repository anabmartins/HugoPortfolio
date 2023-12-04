//import '@/app/ui/global.css';
import { poppins } from '../app/ui/fonts';
import './globals.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <head>
                <title>Portfolio | Hugo Mendes</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/icon.png" />
            </head>
            <body className={`${poppins.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
