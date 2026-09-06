import { useState } from "react";
import type { FormEvent } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLang } from "@/lib/lang";

interface EnquiryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const fieldClass =
  "border-[#e1dfdf] bg-white text-[#222] placeholder:text-[#999] focus-visible:border-[#f68a4a]";

export const EnquiryDialog = ({ open, onOpenChange }: EnquiryDialogProps) => {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [program, setProgram] = useState("");
  const [message, setMessage] = useState("");

  const PROGRAM_OPTIONS = [
    t("Not sure — please guide me", "ठरवलेले नाही — मार्गदर्शन हवे"),
    t("Kids Transform (Ages 6–12)", "Kids Transform (६–१२ वर्षे)"),
    t("Youth Transform (Ages 13–18)", "Youth Transform (१३–१८ वर्षे)"),
    t("Young Adult Transform (Ages 19+)", "Young Adult Transform (१९+)"),
    t("Parenting 360° (1 Day)", "Parenting 360° (१ दिवस)"),
    t("30-Day Transformation Program", "३० दिवसांचा रूपांतर कार्यक्रम"),
  ];

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success(t("Enquiry sent successfully!", "चौकशी यशस्वीरीत्या पाठवली!"), {
      description: t(
        `Thank you ${name || "for reaching out"} — our team will call you back within 24 hours.`,
        `धन्यवाद ${name || ""} — आमची टीम २४ तासांच्या आत तुम्हाला कॉल करेल.`
      ),
    });
    setName("");
    setMobile("");
    setEmail("");
    setCity("");
    setProgram("");
    setMessage("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-testid="enquiry-dialog"
        className="border-[#e1dfdf] bg-white text-[#222] sm:max-w-lg"
      >
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl font-black text-[#18463b]">
            {t("Send an", "चौकशी")} <span className="text-brand-gradient">{t("Enquiry", "पाठवा")}</span>
          </DialogTitle>
          <DialogDescription className="text-[#7a7a7a]">
            {t(
              "Tell us a little about yourself — our mentors will call you back with the right program, batch, and center.",
              "तुमच्याविषयी थोडे सांगा — आमचे मार्गदर्शक योग्य कार्यक्रम, बॅच आणि केंद्रासह तुम्हाला परत कॉल करतील."
            )}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} className="mt-2 flex flex-col gap-4" data-testid="enquiry-form">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="enq-name" className="text-xs font-bold uppercase tracking-[0.14em] text-[#555]">
                {t("Full Name", "पूर्ण नाव")}
              </Label>
              <Input
                id="enq-name"
                data-testid="enquiry-name-input"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("Your full name", "तुमचे पूर्ण नाव")}
                className={fieldClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="enq-mobile" className="text-xs font-bold uppercase tracking-[0.14em] text-[#555]">
                {t("Mobile Number", "मोबाईल नंबर")}
              </Label>
              <Input
                id="enq-mobile"
                data-testid="enquiry-mobile-input"
                required
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="+91 ..."
                className={fieldClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="enq-email" className="text-xs font-bold uppercase tracking-[0.14em] text-[#555]">
                {t("Email", "ईमेल")}
              </Label>
              <Input
                id="enq-email"
                data-testid="enquiry-email-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className={fieldClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="enq-city" className="text-xs font-bold uppercase tracking-[0.14em] text-[#555]">
                {t("City / Village", "शहर / गाव")}
              </Label>
              <Input
                id="enq-city"
                data-testid="enquiry-city-input"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder={t("e.g. Karjat", "उदा. कर्जत")}
                className={fieldClass}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="enq-program" className="text-xs font-bold uppercase tracking-[0.14em] text-[#555]">
              {t("Which Program?", "कोणता कार्यक्रम?")}
            </Label>
            <select
              id="enq-program"
              data-testid="enquiry-program-select"
              value={program || PROGRAM_OPTIONS[0]}
              onChange={(e) => setProgram(e.target.value)}
              className="h-10 w-full rounded-md border border-[#e1dfdf] bg-white px-3 text-sm text-[#222] focus:border-[#f68a4a] focus:outline-none"
            >
              {PROGRAM_OPTIONS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="enq-message" className="text-xs font-bold uppercase tracking-[0.14em] text-[#555]">
              {t("What change would you like to see?", "तुम्हाला कोणता बदल हवा आहे?")}
            </Label>
            <textarea
              id="enq-message"
              data-testid="enquiry-message-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={3}
              placeholder={t("Optional — share anything that helps us guide you", "ऐच्छिक — तुमच्यासाठी काय महत्त्वाचे आहे ते लिहा")}
              className="w-full rounded-md border border-[#e1dfdf] bg-white px-3 py-2 text-sm text-[#222] placeholder:text-[#999] focus:border-[#f68a4a] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            data-testid="enquiry-form-submit-button"
            className="mt-1 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[2px] hover:border-[#18463b] hover:bg-[#18463b] active:scale-95"
          >
            {t("Send Enquiry", "चौकशी पाठवा")}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
