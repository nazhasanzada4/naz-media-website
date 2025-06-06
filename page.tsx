import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e1e2f] to-[#2d2d44] text-white px-6 py-10">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Naz Media and Marketing</h1>
        <p className="text-lg mb-10 text-gray-300">
          Premium marketing solutions for small businesses, event clients, and affiliate product partnerships.
        </p>
        <Button className="text-lg px-8 py-6 rounded-2xl shadow-lg">Contact Us</Button>
      </div>

      <section className="mt-20">
        <h2 className="text-3xl font-semibold mb-6 text-center">Affiliate Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#292940] rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Top Business Tools</h3>
              <p className="text-gray-400 mb-4">Check out our favorite tools for productivity and small business growth.</p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                View Offers
              </a>
            </CardContent>
          </Card>
          <Card className="bg-[#292940] rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Event Gear & Promotions</h3>
              <p className="text-gray-400 mb-4">Everything you need to market events—from banners to branding packages.</p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Shop Now
              </a>
            </CardContent>
          </Card>
          <Card className="bg-[#292940] rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Startup Branding Kits</h3>
              <p className="text-gray-400 mb-4">Logo, color palette, social templates—all in one place to launch your brand fast.</p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Get Your Kit
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mt-24 text-center">
        <h2 className="text-3xl font-semibold mb-4">Work With Us</h2>
        <p className="text-gray-400 mb-8">
          Need help marketing your small business or promoting an event? Let’s talk.
        </p>
        <Button className="text-lg px-8 py-6 rounded-2xl shadow-lg">Email Us</Button>
      </section>

      <section className="mt-24 max-w-xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Join Our Email List</h2>
        <p className="text-gray-400 mb-6">Get exclusive offers, marketing tips, and more.</p>
        <div className="flex items-center gap-4 justify-center">
          <Input type="email" placeholder="Enter your email" className="bg-white text-black rounded-xl" />
          <Button className="rounded-xl px-6 py-4">Subscribe</Button>
        </div>
        <p className="text-xs text-gray-500 mt-2">We'll never spam you. Reach us at nazmediaandmarketing@gmail.com</p>
      </section>
    </div>
  );
}