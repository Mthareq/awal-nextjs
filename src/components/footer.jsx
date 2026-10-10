import { Link } from 'react-router-dom';

const Footer = () => {

const navLinks = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Services', path: '/services' },
    { id: 3, name: 'Galeri', path: '/galeri' },
    { id: 4, name: 'About', path: '/about' },
    { id: 5, name: 'Contact', path: '/contact' },
];

const socialLinks = [
    { id: 1, name: 'Instagram', url: 'https://instagram.com' },
    { id: 2, name: 'LinkedIn', url: 'https://linkedin.com' },
    { id: 3, name: 'Twitter / X', url: 'https://twitter.com' },
];

    return (
        <footer className="w-full bg-black text-white pt-16 pb-8 px-6 md:px-16 border-t border-gray-800 font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-12 border-b border-gray-800 gap-6">
                    <div>
                        <div className="w-10 h-0.5 bg-[#C8FF00] mb-4"></div>
                        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
                        Have an idea? Let's talk.
                        </h2>
                    </div>
                <Link to="/contact" className="px-6 py-3 bg-[#C8FF00] text-black font-semibold rounded-lg hover:bg-white transition-all text-sm md:text-base flex items-center gap-2">
                Get in touch
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12">
                <div className="md:col-span-2">
                    <h3 className="text-xl font-bold tracking-wider mb-4">NARRATIV.</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                    We treat strategy as the source of creative, finding the truest version of your story.
                    </p>
                </div>

                <div>
                    <h4 className="font-mono text-xs text-[#C8FF00] uppercase tracking-widest mb-4">Navigation</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                        <Link to={link.path} className="hover:text-[#C8FF00] transition-colors">
                            {link.name}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-mono text-xs text-[#C8FF00] uppercase tracking-widest mb-4">Socials</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                        {socialLinks.map((social) => (
                            <li key={social.id}>
                            <a
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#C8FF00] transition-colors"
                            >
                                {social.name}
                            </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* SECTION BAWAH: Copyright */}
            <div className="pt-8 border-t border-gray-800/60 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4 font-mono">
                <p>© {new Date().getFullYear()} NARRATIV. All rights reserved.</p>
                <p className="hover:text-gray-400 transition-colors cursor-pointer">
                Designed with React & Tailwind CSS
                </p>
            </div>
            </div>
        </footer>
    );
};

export default Footer;