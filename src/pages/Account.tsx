import { Link } from "react-router-dom";
import { User, Download, ShoppingBag, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Account = () => {
  // Mock data — will be replaced with real auth
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return (
      <div className="container py-20 text-center space-y-4">
        <User className="h-16 w-16 mx-auto text-muted-foreground/40" />
        <h1 className="font-display text-2xl font-bold">Sign in to your account</h1>
        <p className="text-muted-foreground">Access your orders and digital library</p>
        <Button asChild><Link to="/auth">Sign In</Link></Button>
      </div>
    );
  }

  return (
    <div className="container py-8 max-w-4xl">
      <h1 className="font-display text-3xl font-bold mb-8">My Account</h1>

      <Tabs defaultValue="library">
        <TabsList>
          <TabsTrigger value="library">Digital Library</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="library" className="mt-6">
          <p className="text-muted-foreground">Your purchased digital products will appear here.</p>
        </TabsContent>

        <TabsContent value="orders" className="mt-6">
          <p className="text-muted-foreground">Your order history will appear here.</p>
        </TabsContent>

        <TabsContent value="settings" className="mt-6">
          <Card>
            <CardHeader><CardTitle>Account Settings</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Account management will be available after backend setup.</p>
              <Button variant="destructive"><LogOut className="h-4 w-4 mr-2" /> Sign Out</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Account;
