"use client"

import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AlertCircle, CheckCircle, DollarSign, Euro, Users, Zap } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Affordable Agency!</h1>
            <p className="text-xl mb-8">Connecting talented editors and designers with clients worldwide since 2021.</p>
            <div className="flex justify-center space-x-4">
              <Button size="lg"><a href="https://discord.gg/VjntwGXa">Discord</a></Button>
            </div>
          </motion.div>

          <motion.div 
            className="mt-16 grid gap-8 md:grid-cols-3"
            {...fadeIn}
          >
            <Card>
              <CardHeader>
                <Users className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>700+ Clients</CardTitle>
                <CardDescription>Trust us for their creative needs</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Fast Connections</CardTitle>
                <CardDescription>Quick matching with top talent</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CheckCircle className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Quality Assured</CardTitle>
                <CardDescription>Vetted professionals for your projects</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>

          <motion.div 
            className="mt-16"
            {...fadeIn}
          >
            <Alert variant="default">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Important Policy</AlertTitle>
              <AlertDescription>
                We do not work on a commission basis. To ensure that you are a real client, video editor, designer, etc., and to prevent spamming and scams, we charge fees from both parties before making a connection.
              </AlertDescription>
            </Alert>
          </motion.div>

          <motion.h2 
            className="text-3xl font-semibold mt-16 mb-8 text-center"
            {...fadeIn}
          >
            How We Find Clients for You
          </motion.h2>
          <motion.div 
            className="grid gap-8 md:grid-cols-3"
            {...fadeIn}
          >
            <Card>
              <CardHeader>
                <CardTitle>Major Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                We actively source clients on Fiverr, LinkedIn, and Upwork.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Direct Outreach</CardTitle>
              </CardHeader>
              <CardContent>
                We reach out to YouTubers, Instagram influencers, and potential clients directly.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Freelancing Communities</CardTitle>
              </CardHeader>
              <CardContent>
                We leverage 150+ freelancing servers to connect you with the right opportunities.
              </CardContent>
            </Card>
          </motion.div>

          <motion.h2 
            className="text-3xl font-semibold mt-16 mb-8 text-center"
            {...fadeIn}
          >
            Our Subscription Plans
          </motion.h2>
          <motion.div {...fadeIn}>
            <Tabs defaultValue="indian" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="indian">Indian Pricing</TabsTrigger>
                <TabsTrigger value="international">International Pricing</TabsTrigger>
                <TabsTrigger value="euro">Euro Pricing</TabsTrigger>
              </TabsList>
              <TabsContent value="indian">
                <Card>
                  <CardHeader>
                    <CardTitle>Indian Pricing Plans</CardTitle>
                    <CardDescription>Choose the plan that suits you best</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monthly Subscription:</span>
                      <span className="font-semibold">₹500/month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Connections:</span>
                      <span className="font-semibold">16 (4 per week)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Two Connections (same time):</span>
                      <span className="font-semibold">₹300</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Single Connection:</span>
                      <span className="font-semibold">₹200</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full"><a href="https://discord.gg/VjntwGXa">Subscribe Now</a></Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="international">
                <Card>
                  <CardHeader>
                    <CardTitle>International Pricing Plans</CardTitle>
                    <CardDescription>Choose the plan that suits you best</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monthly Subscription:</span>
                      <span className="font-semibold">$20/month</span>
                    </div>
                     <div className="flex justify-between">
                      <span>Total Connections:</span>
                      <span className="font-semibold">16 (4 per week)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Two Connections:</span>
                      <span className="font-semibold">$13</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Single Connection:</span>
                      <span className="font-semibold">$9</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full"><a href="https://discord.gg/VjntwGXa">Subscribe Now</a></Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="euro">
                <Card>
                  <CardHeader>
                    <CardTitle>Euro Pricing Plans</CardTitle>
                    <CardDescription>Choose the plan that suits you best</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monthly Subscription:</span>
                      <span className="font-semibold">€22/month</span>
                    </div>
                     <div className="flex justify-between">
                      <span>Total Connections:</span>
                      <span className="font-semibold">16 (4 per week)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Two Connections:</span>
                      <span className="font-semibold">€15</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Single Connection:</span>
                      <span className="font-semibold">€10</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full"><a href="https://discord.gg/VjntwGXa">Subscribe Now</a></Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>

          <motion.h2 
            className="text-3xl font-semibold mt-16 mb-8 text-center"
            {...fadeIn}
          >
            Benefits of Our 1-Month Subscription
          </motion.h2>
          <motion.div 
            className="grid gap-8 md:grid-cols-3"
            {...fadeIn}
          >
            <Card>
              <CardHeader>
                <CardTitle>16 Premium Connections</CardTitle>
              </CardHeader>
              <CardContent>
                Get access to 16 high-quality connections over the course of a month, with 4 connections provided each week.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Flexible Options</CardTitle>
              </CardHeader>
              <CardContent>
                Choose between a full monthly subscription, two connections at a discounted rate, or single connections as needed.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cost-Effective</CardTitle>
              </CardHeader>
              <CardContent>
                Save money with our monthly plan compared to individual connections, maximizing your networking potential.
              </CardContent>
            </Card>
          </motion.div>

          <motion.h2 
            className="text-3xl font-semibold mt-16 mb-8 text-center"
            {...fadeIn}
          >
            Additional Benefits
          </motion.h2>
          <motion.div 
            className="grid gap-8 md:grid-cols-3"
            {...fadeIn}
          >
            <Card>
              <CardHeader>
                <DollarSign className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Premium Clients Access</CardTitle>
              </CardHeader>
              <CardContent>
                Work with clients who pay higher for your services.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Full-Time Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                Impress our premium clients and potentially land full-time positions paying $700-$1500 per month.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Experience & Growth</CardTitle>
              </CardHeader>
              <CardContent>
                Gain invaluable experience while earning more with premium clients.
              </CardContent>
            </Card>
          </motion.div>

          <motion.h2 
            className="text-3xl font-semibold mt-16 mb-8 text-center"
            {...fadeIn}
          >
            How We Work
          </motion.h2>
          <motion.div 
            className="grid gap-8 md:grid-cols-3"
            {...fadeIn}
          >
            <Card>
              <CardHeader>
                <CardTitle>Client Checkpoints</CardTitle>
              </CardHeader>
              <CardContent>
                We create a detailed list of client requirements.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Skill Matching</CardTitle>
              </CardHeader>
              <CardContent>
                We match client needs with your skills to ensure the perfect fit.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Connection Fees</CardTitle>
              </CardHeader>
              <CardContent>
                To avoid spammers and ensure genuine connections, we charge fees from both parties before making a connection.
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="mt-16 text-center"
            {...fadeIn}
          >
            <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Let us help you achieve your goals and connect with premium clients!</p>
            <Button size="lg" className="animate-pulse">
             Singhsaabkamboke@gmail.com
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

