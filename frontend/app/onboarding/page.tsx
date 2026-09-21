import OnboardingForm from "@/components/onboarding/OnboardingForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onboarding - Fixvil",
  description: "Set up your Fixvil account and tell us about your business.",
};

export default function OnboardingPage() {
  return <OnboardingForm />;
}
