import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HMOAccreditations } from "./components/HMOAccreditations";
import { VideoSlider } from "./components/VideoSlider";
import { FullScreenVideoHero } from "./components/FullScreenVideoHero";
import { Home } from "./pages/Home";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { PatientPortalPage } from "./pages/PatientPortalPage";
import { CareersPage } from "./pages/CareersPage";
import { AdminPage } from "./pages/AdminPage";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Shield, Lock, User } from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - In production, use proper authentication
    if (adminUsername === 'admin' && adminPassword === 'admin123') {
      setIsAdminLoggedIn(true);
      setShowAdminLogin(false);
      setCurrentPage('admin');
      setLoginError('');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    setCurrentPage('home');
    setAdminUsername('');
    setAdminPassword('');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'services':
        return <ServicesPage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage setCurrentPage={setCurrentPage} />;
      case 'patient-portal':
        return <PatientPortalPage setCurrentPage={setCurrentPage} />;
      case 'careers':
        return <CareersPage setCurrentPage={setCurrentPage} />;
      case 'admin':
        return isAdminLoggedIn ? (
          <AdminPage setCurrentPage={setCurrentPage} onLogout={handleAdminLogout} />
        ) : (
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
              <CardHeader className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Administrator Login</CardTitle>
                <CardDescription>
                  Enter your credentials to access the admin dashboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAdminLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="username">Username</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="username"
                        type="text"
                        placeholder="Enter username"
                        className="pl-10"
                        value={adminUsername}
                        onChange={(e) => setAdminUsername(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter password"
                        className="pl-10"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  {loginError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
                      {loginError}
                    </div>
                  )}
                  <div className="space-y-2">
                    <Button type="submit" className="w-full" size="lg">
                      Login to Admin Panel
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="w-full"
                      onClick={() => setCurrentPage('home')}
                    >
                      Back to Main Site
                    </Button>
                  </div>
                  <div className="text-center text-sm text-muted-foreground mt-4 p-3 bg-blue-50 rounded">
                    <p className="font-medium">Demo Credentials:</p>
                    <p>Username: <code className="bg-white px-2 py-1 rounded">admin</code></p>
                    <p>Password: <code className="bg-white px-2 py-1 rounded">admin123</code></p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        );
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  // Show admin page directly if logged in
  if (currentPage === 'admin' && isAdminLoggedIn) {
    return renderPage();
  }

  // Show login page if admin page requested but not logged in
  if (currentPage === 'admin' && !isAdminLoggedIn) {
    return renderPage();
  }

  return (
    <div className="min-h-screen bg-background">
      <FullScreenVideoHero setCurrentPage={setCurrentPage} />
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <VideoSlider setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <HMOAccreditations />
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}