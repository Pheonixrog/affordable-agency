export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
            Affordable Agency connects talented editors and designers with clients worldwide since 2021.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm mb-2">Email: Singhsaabkamboke@gmail.com</p>
            <p className="text-sm">Discord: affordableagency</p>
          </div>
         
         </div>
        <div className="mt-8 pt-8 border-t border-muted-foreground/20 text-center">
          <p>&copy; 2024 Creative Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

