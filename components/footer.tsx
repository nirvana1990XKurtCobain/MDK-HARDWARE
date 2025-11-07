export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background-secondary border-t border-border mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">MDK HARDWARE</h3>
            <p className="text-foreground-secondary text-sm">
              Solusi teknologi premium untuk kebutuhan komputasi Anda.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Produk</h4>
            <ul className="space-y-2 text-sm text-foreground-secondary">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  PC Rakitan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Hardware PC
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Networking
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm text-foreground-secondary">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Karir
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-foreground-secondary">
              <li>Email: info@mdkhardware.com</li>
              <li>Phone: +62 823-1864-6610</li>
              <li>Jam Operasional: 09:00 - 18:00 WIB</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground-secondary">
          <p>&copy; {currentYear} MDK HARDWARE. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
