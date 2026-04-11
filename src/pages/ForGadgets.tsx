import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Smartphone,
  Laptop,
  Tablet,
  Watch,
  Shield,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Zap,
} from "lucide-react";

const devices = [
  { id: "phone", icon: Smartphone, label: "Phone", cost: "₦350,000 – ₦900,000", monthly: "₦2,500" },
  { id: "laptop", icon: Laptop, label: "Laptop", cost: "₦500,000 – ₦2,500,000", monthly: "₦4,000" },
  { id: "tablet", icon: Tablet, label: "Tablet", cost: "₦250,000 – ₦800,000", monthly: "₦2,000" },
  { id: "smartwatch", icon: Watch, label: "Smartwatch", cost: "₦150,000 – ₦600,000", monthly: "₦1,500" },
];

const quizQuestions = [
  {
    q: "How often do you take your device out in public?",
    options: ["Rarely — it lives at home", "Sometimes — weekends & trips", "Every single day"],
    weights: [1, 2, 3],
  },
  {
    q: "Have you ever cracked a screen or spilled liquid on a device?",
    options: ["Nope, never", "Once or twice", "More times than I'd like to admit"],
    weights: [1, 2, 3],
  },
  {
    q: "If your device broke today, could you replace it this week?",
    options: ["Yes, no problem", "It would hurt, but I'd manage", "Absolutely not"],
    weights: [1, 2, 3],
  },
];

const coverageCards = [
  {
    icon: Shield,
    title: "Accidental Damage",
    desc: "Cracked screens, water damage, drops — life happens. We cover it.",
  },
  {
    icon: AlertTriangle,
    title: "Theft Protection",
    desc: "If someone takes your device, we replace it — no police report runaround.",
  },
  {
    icon: Zap,
    title: "Electrical & Mechanical",
    desc: "Random failures after warranty? Still covered. Devices don't always play fair.",
  },
];

const ForGadgets = () => {
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizDone, setQuizDone] = useState(false);

  const device = devices.find((d) => d.id === selectedDevice);
  const riskScore = quizAnswers.reduce((a, b) => a + b, 0);
  const riskLevel = riskScore <= 4 ? "Low" : riskScore <= 6 ? "Medium" : "High";
  const riskColor =
    riskLevel === "Low" ? "text-primary" : riskLevel === "Medium" ? "text-accent" : "text-destructive";

  const handleAnswer = (weight: number) => {
    const newAnswers = [...quizAnswers, weight];
    setQuizAnswers(newAnswers);
    if (quizStep < quizQuestions.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      setQuizDone(true);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setQuizDone(false);
    setSelectedDevice(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-background to-muted">
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <Smartphone className="h-4 w-4" />
            Gadget Protection
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
            Your phone is your life.{" "}
            <span className="text-primary">Shouldn't it be protected?</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pick your device, take a quick quiz, and see exactly why protecting
            your gadgets is one of the smartest small investments you'll make.
          </p>
        </div>
      </section>

      {/* Device Selector */}
      <section className="container mx-auto px-4 py-12 max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-8">What device do you want to protect?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {devices.map((d) => (
            <button
              key={d.id}
              onClick={() => {
                setSelectedDevice(d.id);
                setQuizStep(0);
                setQuizAnswers([]);
                setQuizDone(false);
              }}
              className={`flex flex-col items-center gap-3 p-6 rounded-xl border-2 transition-all ${
                selectedDevice === d.id
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border hover:border-primary/40 bg-card"
              }`}
            >
              <d.icon className={`h-8 w-8 ${selectedDevice === d.id ? "text-primary" : "text-muted-foreground"}`} />
              <span className="font-medium text-sm">{d.label}</span>
            </button>
          ))}
        </div>

        {/* Cost reveal */}
        {device && (
          <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Card className="border-accent/30 bg-accent/5">
              <CardContent className="p-6 text-center">
                <p className="text-sm text-muted-foreground mb-1">
                  Replacing a {device.label.toLowerCase()} today costs
                </p>
                <p className="text-2xl font-bold text-accent mb-1">{device.cost}</p>
                <p className="text-sm text-muted-foreground">
                  Protecting it? From just{" "}
                  <span className="font-semibold text-primary">{device.monthly}/month</span>
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </section>

      {/* Quiz */}
      {selectedDevice && !quizDone && (
        <section className="container mx-auto px-4 pb-12 max-w-xl animate-in fade-in duration-500">
          <h2 className="text-2xl font-bold text-center mb-2">Quick Risk Check</h2>
          <p className="text-center text-muted-foreground text-sm mb-8">
            Question {quizStep + 1} of {quizQuestions.length}
          </p>
          <Card>
            <CardContent className="p-6">
              <p className="font-medium mb-4">{quizQuestions[quizStep].q}</p>
              <div className="space-y-3">
                {quizQuestions[quizStep].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(quizQuestions[quizStep].weights[i])}
                    className="w-full text-left p-4 rounded-lg border hover:border-primary hover:bg-primary/5 transition-colors text-sm"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Quiz Result */}
      {quizDone && (
        <section className="container mx-auto px-4 pb-12 max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card className="border-primary/30">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Your Risk Level</h3>
              <div className={`text-4xl font-bold mb-2 ${riskColor}`}>{riskLevel}</div>
              <p className="text-sm text-muted-foreground mb-4">
                {riskLevel === "High"
                  ? "You're living on the edge! Your device faces real daily risk — protection is a no-brainer."
                  : riskLevel === "Medium"
                  ? "You're more exposed than you think. A small monthly payment could save you a big headache."
                  : "Your risk is low, but accidents don't schedule appointments. Peace of mind is still worth it."}
              </p>
              <div className="flex gap-3 justify-center">
                <Button className="gap-2">
                  See Plans <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={resetQuiz}>
                  Try Again
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Coverage Cards */}
      <section className="bg-secondary/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            What does protection actually look like?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {coverageCards.map((c, i) => (
              <Card key={i} className="border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <c.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-16 text-center max-w-xl">
        <h2 className="text-2xl font-bold mb-3">Ready to protect what matters?</h2>
        <p className="text-muted-foreground text-sm mb-6">
          It takes less than 3 minutes. No jargon, no hidden fees — just straightforward coverage.
        </p>
        <Button size="lg" className="gap-2">
          Get a Quote <ArrowRight className="h-4 w-4" />
        </Button>
      </section>

      <Footer />
    </div>
  );
};

export default ForGadgets;
