"use client"

import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from 'lucide-react'

export default function TermsAndConditions() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>
          </motion.div>
          <motion.div {...fadeIn}>
            <Alert variant="default" className="mb-8">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Important Policy</AlertTitle>
              <AlertDescription className="font-bold">
                We do not work on a commission basis. To ensure that you are a real client, video editor, designer, etc.,
and to prevent spamming and scams, we charge fees from both parties before making a connection.
              </AlertDescription>
            </Alert>
            <Card>
              <CardHeader>
                <CardTitle>Please read carefully</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-6">
                  These terms and conditions are applicable to the services supplied by Agency. They apply to any agreement reached between Agency and the Client. Any deviation from these terms and conditions shall be made as a written agreement between the Parties.
                </p>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="services">
                    <AccordionTrigger>Services and Solutions</AccordionTrigger>
                    <AccordionContent>
                      <p>The services comprise a subscription to the Agency product, including web-based analysis tools: Web leads B2B, Web analytics, SMART tracking, Social Media integration, Advertising integration, Reporting and SEO Rank.</p>
                      <p className="mt-2">The Client may change subscription package on Account on the Agency dashboard at any time. If the change is to a smaller subscription, this shall come into force from the next payment period. If the change is to a larger subscription, this shall come into force immediately.</p>
                      <p className="mt-2">When purchasing a Medium or Premium subscription, the Client agrees to the installation of a script on the Client&quot;s website. The Client is aware that full Agency functionality depends on installation of this script.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="commencement">
                    <AccordionTrigger>Commencement Date</AccordionTrigger>
                    <AccordionContent>
                      <p>The Agreement between Agency ApS and the Client comes into force when the Client chooses a subscription and invoice method on &quot;Account&quot; on the Agency360 dashboard, and then enters the required invoice data. The Subscription Agreement is binding once the Client has completed payment.</p>
                      <p className="mt-2">The Agreement is binding for both Parties until terminated at notice in accordance with the termination conditions.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="liability">
                    <AccordionTrigger>Liability</AccordionTrigger>
                    <AccordionContent>
                      <p>Agency360 ApS is not liable for any inconvenience and losses, indirect losses, including operating losses, loss of revenue, futile costs incurred in connection with services supplied or claims raised by a third party discovered or occurring in consequence of a delay to or an error or fault in Agency360 ApS&quot; delivery.</p>
                      <p className="mt-2">Agency360 ApS cannot vouch for services supplied by a third party. For example (the list is not exhaustive), Agency360 ApS is not liable for any divergence from standard terms and conditions regarding the use of e.g. search engines, Google Ads and online social media.</p>
                      <p className="mt-2">Agency360 ApS is not deemed responsible for downtime on diverse websites, including search engines and online social media.</p>
                      <p className="mt-2">Agency360 ApS is not responsible for any failure to identify enterprises via IP networks.</p>
                      <p className="mt-2">Agency360 ApS is not responsible for a situation in which visitors to the Client&quot;s website cannot be identified, including when access is achieved via direct, organic and referral marketing channels.</p>
                      <p className="mt-2">Agency360 ApS is not responsible for a situation in which the statistical data reported by online marketing channels and social media, including although not limited to Facebook, Google, Bing, LinkedIn, Instagram, Pinterest and YouTube, are incorrect.</p>
                      <p className="mt-2">Agency360 ApS is not responsible for statistical data reported by Google Analytics.</p>
                      <p className="mt-2">Agency360 ApS cannot guarantee that SEO Rank data reports reflect the Client&quot;s actual ranking. The Client is aware that the Client&quot;s search engine rankings depend on a series of variables.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="pricing">
                    <AccordionTrigger>Pricing and Terms of Payment</AccordionTrigger>
                    <AccordionContent>
                      <p>Services and subscriptions are payable for a one-month or one-year subscription period in advance, unless otherwise agreed.</p>
                      <p className="mt-2">The prices applicable at any given time are shown on Agency360.io.</p>
                      <p className="mt-2">The subscription price is the list price at any given time, unless explicitly agreed to the contrary. The subscription price at the time of commencement of this agreement is as stated in the electronically signed Agreement.</p>
                      <p className="mt-2">All prices are ex Danish VAT.</p>
                      <p className="mt-2">In the contract period, the Parties may agree that Agency360 ApS will supply additional services. The hourly rate for such work is DKK 1500 ex Danish VAT, unless the Parties reach a separate agreement to the contrary.</p>
                      <p className="mt-2">In the event of failure to pay by the due date, Agency360 ApS reserves the right to withdraw access to Agency360 and to refuse any further work on the Client&quot;s behalf. Agency360 ApS is not obliged to supply services in a period, during which the Client remains in arrears.</p>
                      <p className="mt-2">The Client shall disburse Agency360 ApS for any outlays Agency360 ApS may make on the Client&quot;s behalf.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="contract">
                    <AccordionTrigger>Contract Period and Termination</AccordionTrigger>
                    <AccordionContent>
                      <p>Depending on the Client&quot;s choice of subscription, the Agreement is irrevocable for a period of either 1 or 12 months from the commencement date, unless explicitly stated when entering the agreement.</p>
                      <p className="mt-2">The Client is at liberty at any time to check agreement status, including the contract period by logging on to the Client&quot;s personal Agency360 account. If necessary, the Client can erase, replace and renew credit and payment cards on the same page.</p>
                      <p className="mt-2">Subscription invoices will be sent via e-mail. Invoices are also available via the Client&quot;s personal Agency360 account.</p>
                      <p className="mt-2">The Client shall give notice of termination no later than the penultimate day of the subscription period. If the Client gives notice of termination later than the penultimate day of the subscription period, the Agreement is automatically extended by either 1 or 12 months.</p>
                      <p className="mt-2">Agency360 ApS is entitled to terminate the agreement at three months&quot; notice, including termination of one or more individual tools covered by the Agreement. If Agency360 ApS terminates the agreement, Agency360 ApS will reimburse the Client any prepaid amount. This shall not apply if termination is due to a failure on the part of the Client to comply with any agreement entered into or with Agency360 ApS&quot; terms and conditions of trade.</p>
                      <p className="mt-2">In the event of material breach by one of the Parties for which no remedy is forthcoming within a period of 30 days of receipt of a request for remedial action from the Party not in breach, that same Party shall be entitled without warning to terminate this Agreement in accordance with the ordinary tenets of Danish law.</p>
                      <p className="mt-2">Failure to pay by the due date will be regarded as a material breach of contract and Agency360 ApS shall be entitled to cease delivery of the subscription until payment is made.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="rights">
                    <AccordionTrigger>Material and Immaterial Rights</AccordionTrigger>
                    <AccordionContent>
                      <p>The Parties retain copyright, property rights and other immaterial rights to all the material and data in their possession on the commencement date of this Agreement.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="assignment">
                    <AccordionTrigger>Assignment</AccordionTrigger>
                    <AccordionContent>
                      <p>Neither Party is entitled to assign the rights and obligations in pursuance of this Agreement to a third party, except with their counterpart&quot;s consent.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="claims">
                    <AccordionTrigger>Claims</AccordionTrigger>
                    <AccordionContent>
                      <p>Should the Agency360 ApS product fail to meet the Client&quot;s expectations, the Client is obliged immediately to make a claim to Agency360 ApS with a view to remedying the situation. The Agreement is irrevocable after the commencement date. See general provisions regarding termination in Section 6.</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="law">
                    <AccordionTrigger>Applicable Law and Legal Venue</AccordionTrigger>
                    <AccordionContent>
                      <p>This Agreement is subject to Danish law. The Parties shall seek if possible to settle amicably any dispute that may occur in connection with this Agreement. Should an amicable settlement prove impossible, the dispute shall be settled with Copenhagen City Court as legal venue.</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
            <p className="text-center mt-8 text-sm text-muted-foreground">
              © 2021 All rights reserved
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

