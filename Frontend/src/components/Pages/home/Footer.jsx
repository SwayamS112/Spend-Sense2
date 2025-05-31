import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto p-6">
        <div className="md:flex md:justify-between">
          {/* Logo */}
          <div>
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="Flowbite Logo"
              />
              <span className="text-2xl font-semibold dark:text-white">
                Flowbite
              </span>
            </a>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
  {/* Resources Section */}
  <div>
    <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
    <ul className="text-gray-500 dark:text-gray-400">
      <li>
        <a href="https://flowbite.com/" target="_blank" className="hover:underline">Flowbite</a>
      </li>
      <li>
        <a href="https://tailwindcss.com/" target="_blank" className="hover:underline">Tailwind CSS</a>
      </li>
      <li>
        <a href="https://react.dev/learn" target="_blank" className="hover:underline">React.JS</a>
      </li>
      <li>
        <a href="https://vercel.com/swayams-projects-c43da883" target="_blank" className="hover:underline">Vercel</a>
      </li>
    </ul>
  </div>

  {/* Follow Us Section */}
  <div>
    <h2 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow Us</h2>
    <ul className="text-gray-500 dark:text-gray-400">
      <li>
        <a href="https://github.com/" target="_blank" className="hover:underline">GitHub</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/swayam-sood-b76855252/" target="_blank" className="hover:underline">LinkedIn</a>
      </li>
      <li>
        <a href="https://www.instagram.com/swayam_sood__/" target="_blank" className="hover:underline">Instagram</a>
      </li>
      <li>
        <a href="https://portfolio2-ldhoag3n9-swayams-projects-c43da883.vercel.app/" target="_blank" className="hover:underline">Portfolio</a>
      </li>
    </ul>
  </div>
</div>

        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Flowbite™. All Rights Reserved.
          </span>

          {/* Social Media Icons */}
          <div className="flex space-x-5 mt-4 sm:mt-0">
            {[
              { name: "Facebook", icon: "fab fa-facebook-f", url: "#" },
              { name: "Twitter", icon: "fab fa-twitter", url: "#" },
              { name: "GitHub", icon: "fab fa-github", url: "#" },
              { name: "Dribbble", icon: "fab fa-dribbble", url: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                aria-label={social.name}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
