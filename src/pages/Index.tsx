import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  FileText,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Star,
  ChevronDown,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const stats = [
  { value: "12,000+", label: "Businesses Protected" },
  { value: "98%", label: "Claims Approved" },
  { value: "4.9★", label: "Customer Rating" },
  { value: "< 24hrs", label: "Average Claim Time" },
];

const steps = [
  {
    icon: FileText,
    title: "Tell us about yourself",
    desc: "Answer a few simple questions — no forms that go on forever, we promise.",
  },
  {
    icon: CheckCircle,
    title: "See what fits",
    desc: "We'll show you clear, jargon-free options that actually make sense for you.",
  },
  {
    icon: Shield,
    title: "You're covered",
    desc: "Relax knowing you're protected. If something happens, we handle the hard part.",
  },
];

const testimonials = [
  {
    quote: "I used to dread reading my policy documents. Sitzu Assure translated everything into plain English — I finally know what I'm paying for.",
    name: "Adaeze O.",
    role: "Small Business Owner",
    icon: Users,
  },
  {
    quote: "My laptop got stolen while travelling. Filed a claim on my phone, got sorted in 18 hours. No back-and-forth, no stress.",
    name: "James K.",
    role: "Freelance Designer",
    icon: Star,
  },
  {
    quote: "I never thought about insuring my phone until Sitzu showed me what replacing it would actually cost. Now I sleep better.",
    name: "Fatima B.",
    role: "University Student",
    icon: Clock,
  },
];

const faqs = [
  {
    q: "Is insurance really worth it for a small business?",
    a: "Absolutely. One unexpected event — a burst pipe, a lawsuit, a data breach — can cost more than years of premiums. We help you find affordable coverage so one bad day doesn't become a business-ending disaster.",
  },
  {
    q: "I don't understand my current policy. Can you help?",
    a: "That's literally why we built our Policy Helper. Paste your policy text and we'll break it down in plain language — what's covered, what's not, and what you should ask your provider about.",
  },
  {
    q: "How quickly can I get a claim processed?",
    a: "Most claims are reviewed within 24 hours. No endless phone trees, no waiting weeks for a response. We believe if you're going through a tough time, the last thing you need is more hassle.",
  },
  {
    q: "Do I really need insurance for my phone or laptop?",
    a: "Think about it this way: your phone has your photos, your contacts, your banking apps, your work. Replacing it isn't just expensive — it's disruptive. A small monthly payment means you're back up and running fast if something goes wrong.",
  },
];

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-muted -z-10" />
        <div className="container mx-auto px-4 py-20 md:py-32 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            Insurance, minus the headache
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Protection shouldn't be{" "}
            <span className="text-primary">complicated.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Whether you run a business or just love your gadgets, we make sure
            you're covered — in words you actually understand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="gap-2 text-base px-8">
              <Link to="/for-businesses">
                <FileText className="h-5 w-5" />
                I'm a Business Owner
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2 text-base px-8">
              <Link to="/for-gadgets">
                <Smartphone className="h-5 w-5" />
                Protect My Gadgets
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-bold text-primary">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Three steps. That's it.
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          No 40-page forms, no confusing fine print. Just a simple path to peace
          of mind.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <Card key={i} className="text-center border-0 shadow-none bg-muted/50">
              <CardContent className="pt-8 pb-6 px-6">
                <div className="mx-auto w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="text-xs font-bold text-primary mb-2">STEP {i + 1}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Real people. Real peace of mind.
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <Card key={i} className="border-0 shadow-md">
                <CardContent className="pt-6 pb-6 px-6">
                  <div className="flex items-center gap-1 text-accent mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <t.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 py-20 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Questions? We've got answers.
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          No fine print here — just honest, plain-language answers.
        </p>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border rounded-xl overflow-hidden bg-card"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-medium text-sm hover:bg-muted/50 transition-colors"
              >
                {faq.q}
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform shrink-0 ml-4 ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === i && (
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to feel actually covered?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join thousands who ditched the confusion and got real protection — in under 5 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="gap-2 text-base">
              <Link to="/for-businesses">
                For Businesses <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2 text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/for-gadgets">
                For Gadgets <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
