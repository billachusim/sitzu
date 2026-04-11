import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  FileText,
  Shield,
  AlertTriangle,
  Calendar,
  CheckCircle,
  XCircle,
  ArrowRight,
  Lightbulb,
} from "lucide-react";

const sampleOutput = {
  summary:
    "This is a standard Commercial General Liability (CGL) policy. It covers you if someone gets hurt at your place of business, or if your product causes harm to a customer. It does NOT cover employee injuries (that's workers' comp) or damage to your own property.",
  covered: [
    "Third-party bodily injury on your premises",
    "Product liability claims",
    "Legal defence costs (up to policy limit)",
    "Advertising injury (libel, slander)",
  ],
  notCovered: [
    "Employee injuries or illness",
    "Damage to your own property or equipment",
    "Intentional acts or criminal behaviour",
    "Cyber attacks or data breaches",
  ],
  dates: [
    "Policy effective: 1 Jan 2025 – 31 Dec 2025",
    "Claims must be reported within 60 days",
    "Renewal notice sent 30 days before expiry",
  ],
  actions: [
    "Review your coverage limit — ₦5M may not be enough if you serve the public",
    "Consider adding cyber liability coverage separately",
    "Update your employee count with your provider — it affects your premium",
  ],
};

const ForBusinesses = () => {
  const [policyText, setPolicyText] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleAnalyze = () => {
    setShowResult(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-background to-muted">
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <FileText className="h-4 w-4" />
            For Business Owners
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            Finally understand what your policy{" "}
            <span className="text-primary">actually says.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Paste your policy text below and we'll translate the legal jargon
            into plain language — so you know exactly what you're paying for.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="container mx-auto px-4 py-12 max-w-3xl">
        <Card>
          <CardContent className="p-6 space-y-4">
            <label className="text-sm font-medium">
              Paste your policy text or describe your coverage
            </label>
            <Textarea
              placeholder="e.g. 'Commercial General Liability policy with ₦5,000,000 aggregate limit, covering premises liability and products-completed operations…'"
              rows={6}
              value={policyText}
              onChange={(e) => {
                setPolicyText(e.target.value);
                if (showResult) setShowResult(false);
              }}
            />
            <Button onClick={handleAnalyze} className="gap-2 w-full sm:w-auto">
              <Lightbulb className="h-4 w-4" />
              Break it down for me
            </Button>
          </CardContent>
        </Card>

        {/* Results */}
        {showResult && (
          <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Summary */}
            <Card className="border-primary/30">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Shield className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Plain-Language Summary</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {sampleOutput.summary}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Covered */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold flex items-center gap-2 mb-3 text-primary">
                    <CheckCircle className="h-5 w-5" /> What's Covered
                  </h3>
                  <ul className="space-y-2">
                    {sampleOutput.covered.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Not covered */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold flex items-center gap-2 mb-3 text-destructive">
                    <XCircle className="h-5 w-5" /> What's NOT Covered
                  </h3>
                  <ul className="space-y-2">
                    {sampleOutput.notCovered.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Dates */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold flex items-center gap-2 mb-3">
                  <Calendar className="h-5 w-5 text-accent" /> Important Dates
                </h3>
                <ul className="space-y-2">
                  {sampleOutput.dates.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card className="border-accent/30 bg-accent/5">
              <CardContent className="p-6">
                <h3 className="font-semibold flex items-center gap-2 mb-3">
                  <AlertTriangle className="h-5 w-5 text-accent" /> Recommended Actions
                </h3>
                <ul className="space-y-2">
                  {sampleOutput.actions.map((a, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center pt-4">
              <p className="text-muted-foreground text-sm mb-4">
                Want a real expert to review your policy? We connect you with advisors who speak human.
              </p>
              <Button size="lg" className="gap-2">
                Talk to an Advisor <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default ForBusinesses;
