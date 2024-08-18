import React from 'react';

function Footer() {
    return (
        <footer className="bg-black text-white py-12 mt-8">
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
                <div>
                    <h3 className="font-semibold mb-3">Abstract</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Branches</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3">Resources</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Blog</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Help Center</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Release Notes</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Status</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3">Community</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">Twitter</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">LinkedIn</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Facebook</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Dribbble</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Podcast</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold mb-3">Company</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Legal</a></li>
                        <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
                    </ul>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="flex justify-start mt-24">
                        <img src="https://cdn.prod.website-files.com/5ff3926f03b3ba26b7d639cb/60c388bf3c3ae4d1d10653e7_Abstract_Wordmark-White.svg" alt="Logo" className="h-8 mb-4"/>
                    </div>
                    <p className="text-xs text-gray-400 text-right">
                        © Copyright 2022 Abstract Studio Design, Inc.<br />
                        All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
