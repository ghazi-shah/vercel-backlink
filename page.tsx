
// app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wide text-indigo-600">
            WinPKR
          </h1>
          <nav className="space-x-6 text-gray-700 font-medium">
            <a href="#about" className="hover:text-indigo-600 transition">
              About
            </a>
            <a href="#features" className="hover:text-indigo-600 transition">
              Features
            </a>
            <a href="#download" className="hover:text-indigo-600 transition">
              Download
            </a>
            <a href="#faq" className="hover:text-indigo-600 transition">
              FAQs
            </a>
          </nav>
        </div>
      </header>

      {/* Banner Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto flex gap-10 flex-col md:flex-row items-center justify-between px-6 py-20">
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="w-full rounded-xl overflow-hidden shadow-lg">
              <img
                src="winpkr-game-images.webp"
                alt="WinPKR Game Banner"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              WinPKR Game – Play & Win Anytime
            </h2>
            <p className="text-lg md:text-xl text-gray-100">
              Experience the thrill of WinPKR with smooth gameplay, engaging challenges, and exciting rewards. 
              Download now and start your journey toward non-stop entertainment.
            </p>
            <div className="flex space-x-4">
              <a
                href="#download"
                className="px-6 py-3 bg-white text-indigo-600 rounded-lg shadow hover:bg-gray-100 transition font-semibold"
              >
                Download Now
              </a>
            </div>
          </div>
          
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-5xl font-bold mb-10 text-gray-800">
            Why Choose WinPKR?
          </h3>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-indigo-600 mb-3">
                Smooth Gameplay
              </h4>
              <p className="text-gray-600">
                Enjoy lag-free, immersive gameplay designed to give you a seamless gaming experience.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-indigo-600 mb-3">
                Rewards & Bonuses
              </h4>
              <p className="text-gray-600">
                Unlock rewards, daily bonuses, and achievements as you progress through the game.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold text-indigo-600 mb-3">
                Multi-Platform
              </h4>
              <p className="text-gray-600">
                Play WinPKR on your mobile, tablet, or desktop without losing progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with SEO Content */}
      <section id="about" className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          <h3 className="text-4xl font-bold text-gray-800 text-center">
            About WinPKR
          </h3>
          <article className="prose prose-lg max-w-none text-gray-700">
            <p>
              <strong>WinPKR</strong> is a popular online game designed for players who enjoy excitement, challenges, 
              and real-time entertainment. With easy controls, immersive design, and a rewarding structure, 
              WinPKR has quickly become a top choice among mobile and desktop gamers. Whether you are looking 
              to pass time casually or want to compete with friends and other players, WinPKR offers 
              something engaging for everyone.
            </p>

            <p>
              Unlike other games that feel repetitive, WinPKR keeps players engaged with fresh challenges, 
              interactive modes, and continuous updates. The game combines modern design with user-friendly 
              functionality, making it appealing for both beginners and experienced gamers.
            </p>
            <br />
            <h2 className="text-2xl font-bold mb-2">Gameplay Experience</h2>
            <p>

              One of the standout features of <strong>WinPKR Game</strong> is its smooth and lag-free 
              gameplay. Thanks to its optimized mechanics, players can enjoy fast-paced action without 
              interruptions. The user interface is clean, intuitive, and responsive, ensuring that you 
              focus more on the thrill of the game rather than struggling with controls.
            </p>
            <br />
            <h2 className="text-2xl font-bold mb-2">Why Players Love WinPKR</h2>
            <ul>
              <li>Completely <strong>free to download</strong> and play.</li>
              <li>Daily rewards and exciting bonuses keep the game fresh.</li>
              <li>Compatible with multiple devices including Android, iOS, and PC.</li>
              <li>Simple controls for beginners but enough depth for pro gamers.</li>
              <li>Regular updates bring new features, levels, and challenges.</li>
            </ul>
            <br />
            <h2 className="text-2xl font-bold mb-2">How to Download WinPKR</h2>
            <p>
              Downloading <strong>WinPKR APK</strong> is easy and secure. Players can click the 
              download button above to install the game directly on their devices. The installation 
              process is quick, and the game is lightweight, so it won’t take up much space on your 
              phone or computer. Once installed, you can launch the game instantly and start playing.
            </p>
            <br />
            <h2 className="text-2xl font-bold mb-2">Safe & Secure</h2>
            <p>
              Security is a top priority for WinPKR. The APK is free from malware and viruses, 
              ensuring that your device remains safe. Players can enjoy peace of mind knowing that 
              their data and gameplay are protected.
            </p>
            <br />
            <h2 className="text-2xl font-bold mb-2">Tips to Win More</h2>
            <p>
              While WinPKR is simple to play, mastering the game requires practice and smart strategies. 
              Here are some quick tips:
            </p>
            <ul>
              <li>Start with beginner levels to get used to controls.</li>
              <li>Claim daily rewards to unlock bonuses faster.</li>
              <li>Upgrade your strategies as you move to higher levels.</li>
              <li>Play regularly to improve your reflexes and decision-making.</li>
            </ul>
            <br />
            <h2 className="text-2xl font-bold mb-2">Why WinPKR Stands Out</h2>
            <p>
              The online gaming industry is filled with thousands of options, but <strong>WinPKR</strong> 
              stands out because of its unique mix of simplicity, reward system, and multi-device 
              compatibility. It is not just another game; it’s a community of gamers who love to compete, 
              connect, and enjoy their time.
            </p>
            <br />
            <h2 className="text-2xl font-bold mb-2">SEO Optimized Summary</h2>
            <p>
              To sum up, <strong>WinPKR Game</strong> is more than just an app – it’s an experience. 
              With its smooth performance, engaging challenges, daily bonuses, and multi-platform 
              compatibility, it has become one of the most downloaded free games. If you are looking 
              for a reliable, fun, and addictive game, WinPKR is the perfect choice.
            </p>
          </article>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            <details className="bg-white rounded-lg shadow p-6">
              <summary className="cursor-pointer font-semibold text-indigo-600">
                Is WinPKR free to play?
              </summary>
              <p className="mt-3 text-gray-600">
                Yes, WinPKR is completely free to download and play. You can also enjoy additional 
                bonuses and daily rewards without paying.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow p-6">
              <summary className="cursor-pointer font-semibold text-indigo-600">
                Can I play on mobile?
              </summary>
              <p className="mt-3 text-gray-600">
                Absolutely! WinPKR is optimized for smartphones, tablets, and desktops, ensuring a 
                smooth experience across devices.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow p-6">
              <summary className="cursor-pointer font-semibold text-indigo-600">
                How do I download the game?
              </summary>
              <p className="mt-3 text-gray-600">
                Simply click on the “Download Now” button to get the WinPKR APK and install it on 
                your device. It’s quick, safe, and easy.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} WinPKR. All rights reserved.</p>
          <div className="space-x-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}



