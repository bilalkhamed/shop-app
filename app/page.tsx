'use client';

import { Card, CardHeader, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { Moon } from "lucide-react";
import CategoriesList from "@/components/categories/categories-list";
import { Badge } from "@heroui/badge";


export default function HomePage() {
  return (
    <section className='py-10 max-w-6xl mx-auto px-4 space-y-10'>
      {/* Hero */}
      <div className='text-center space-y-4'>
        <h1 className='text-4xl font-bold tracking-tight'>Welcome to ShopEase 🛍️</h1>
        <p className='text-lg text-default-500'>Shop your favorite products delivered right to your door.</p>
      </div>

      <Divider />

      {/* Featured products placeholder */}
      <div>
        <h3 className="mb-5 text-xl text-center">Browse our categories</h3>
        <CategoriesList />
      </div>

    </section>
  );
}
