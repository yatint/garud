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

interface EnrollDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const EnrollDialog = ({ open, onOpenChange }: EnrollDialogProps) => {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success(t("Enrollment request received!", "नोंदणीची विनंती मिळाली!"), {
      description: t(
        `Thanks ${name || "there"} — our mentors will call you within 24 hours with batch details.`,
        `धन्यवाद ${name || ""} — आमचे मार्गदर्शक २४ तासांच्या आत बॅचच्या माहितीसह कॉल करतील.`
      ),
    });
    setName("");
    setAge("");
    setPhone("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        data-testid="enroll-dialog"
        className="border-[#e1dfdf] bg-white text-[#222] sm:max-w-md"
      >
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl font-black text-[#18463b]">
            <span className="text-brand-gradient">Youth Transform</span>{" "}
            {t("Enrollment", "मध्ये नोंदणी करा")}
          </DialogTitle>
          <DialogDescription className="text-[#7a7a7a]">
            {t(
              "Share your details and our team will reach out with the next batch schedule and venue options.",
              "तुमची माहिती द्या — आमची टीम पुढील बॅचचे वेळापत्रक आणि ठिकाणांची माहिती देईल."
            )}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} className="mt-2 flex flex-col gap-5" data-testid="enroll-form">
          <div className="flex flex-col gap-2">
            <Label htmlFor="student-name" className="text-xs font-bold uppercase tracking-[0.16em] text-[#555]">
              {t("Student Name", "विद्यार्थ्याचे नाव")}
            </Label>
            <Input
              id="student-name"
              data-testid="enroll-name-input"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("e.g. Aarav Patil", "उदा. आरव पाटील")}
              className="border-[#e1dfdf] bg-white text-[#222] placeholder:text-[#999] focus-visible:border-[#f68a4a]"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="student-age" className="text-xs font-bold uppercase tracking-[0.16em] text-[#555]">
                {t("Age", "वय")}
              </Label>
              <Input
                id="student-age"
                data-testid="enroll-age-input"
                required
                type="number"
                min={13}
                max={18}
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="13–18"
                className="border-[#e1dfdf] bg-white text-[#222] placeholder:text-[#999] focus-visible:border-[#f68a4a]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="parent-phone" className="text-xs font-bold uppercase tracking-[0.16em] text-[#555]">
                {t("Parent Phone", "पालकांचा मोबाईल")}
              </Label>
              <Input
                id="parent-phone"
                data-testid="enroll-phone-input"
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 ..."
                className="border-[#e1dfdf] bg-white text-[#222] placeholder:text-[#999] focus-visible:border-[#f68a4a]"
              />
            </div>
          </div>
          <button
            type="submit"
            data-testid="enroll-form-submit-button"
            className="mt-1 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[2px] hover:border-[#18463b] hover:bg-[#18463b] active:scale-95"
          >
            {t("Request Enrollment", "नोंदणीची विनंती करा")}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
