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

interface EnrollDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const EnrollDialog = ({ open, onOpenChange }: EnrollDialogProps) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Enrollment request received!", {
      description: `Thanks ${name || "there"} — our mentors will call you within 24 hours with batch details.`,
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
        className="border-[#23487a] bg-[#0b1d3a] text-white sm:max-w-md"
      >
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl font-black text-white">
            Enroll in <span className="text-gold-gradient">Youth Transform</span>
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            Share your details and our team will reach out with the next batch schedule and venue
            options.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit} className="mt-2 flex flex-col gap-5" data-testid="enroll-form">
          <div className="flex flex-col gap-2">
            <Label htmlFor="student-name" className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300">
              Student Name
            </Label>
            <Input
              id="student-name"
              data-testid="enroll-name-input"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Aarav Patil"
              className="border-[#1e3a5f] bg-[#071328] text-white placeholder:text-slate-500 focus-visible:border-[#e6a635]"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="student-age" className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300">
                Age
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
                className="border-[#1e3a5f] bg-[#071328] text-white placeholder:text-slate-500 focus-visible:border-[#e6a635]"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="parent-phone" className="text-xs font-bold uppercase tracking-[0.16em] text-slate-300">
                Parent Phone
              </Label>
              <Input
                id="parent-phone"
                data-testid="enroll-phone-input"
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 ..."
                className="border-[#1e3a5f] bg-[#071328] text-white placeholder:text-slate-500 focus-visible:border-[#e6a635]"
              />
            </div>
          </div>
          <button
            type="submit"
            data-testid="enroll-form-submit-button"
            className="mt-1 rounded-full bg-[#e6a635] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-[#071328] transition-all duration-300 hover:scale-[1.02] hover:bg-[#f5c253] active:scale-95"
          >
            Request Enrollment
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
