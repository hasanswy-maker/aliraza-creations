import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Instagram, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ali Raza Creations" },
      { name: "description", content: "Start a project with Ali Raza Creations. Tell me about your channel, your goals, and your deadline — I'll reply within 24 hours." },
      { property: "og:title", content: "Contact — Ali Raza Creations" },
      { property: "og:description", content: "Tell me about your project. Reply within 24h." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  projectType: z.enum(["Single Edit", "Monthly Retainer", "Channel Management", "Other"]),
  budget: z.enum(["< $1k", "$1k–$3k", "$3k–$7k", "$7k+"]),
  message: z.string().trim().min(10, "Tell me a bit more").max(2000),
});

type FormValues = z.infer<typeof schema>;

const CONTACT_EMAIL = "alirazacreates@gmail.com";

function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { projectType: "Single Edit", budget: "$1k–$3k" },
  });

  const onSubmit = async (data: FormValues) => {
    const subject = `New project inquiry — ${data.name} (${data.projectType})`;
    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Project type: ${data.projectType}`,
      `Budget: ${data.budget}`,
      ``,
      `Message:`,
      data.message,
    ].join("\n");
    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    toast.success("Opening your email app — hit send and I'll reply within 24h.");
    reset();
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-16 md:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground">Contact</div>
          <h1 className="mt-2 font-display text-6xl leading-[0.95] md:text-7xl">
            Let's make<br /><span className="text-gradient-neon">something move.</span>
          </h1>
          <p className="mt-6 max-w-md text-muted-foreground">
            Tell me about the channel, the goal, and the deadline. I read everything that comes through and reply within 24 hours.
          </p>

          <div className="mt-12 space-y-3">
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-foreground hover:text-neon">
              <Mail className="h-5 w-5" /> {CONTACT_EMAIL}
            </a>
            <div className="flex gap-3 pt-3">
              <a
                href="https://instagram.com/aliraza.creations"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground hover:border-neon hover:text-foreground"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl border border-border bg-card p-7 md:p-8">
          <Field label="Name" error={errors.name?.message}>
            <input {...register("name")} className={inputCls} placeholder="Your name" />
          </Field>
          <Field label="Email" error={errors.email?.message}>
            <input {...register("email")} className={inputCls} placeholder="you@channel.com" />
          </Field>
          <Field label="Project type" error={errors.projectType?.message}>
            <select {...register("projectType")} className={inputCls}>
              {["Single Edit", "Monthly Retainer", "Channel Management", "Other"].map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </Field>
          <Field label="Budget" error={errors.budget?.message}>
            <select {...register("budget")} className={inputCls}>
              {["< $1k", "$1k–$3k", "$3k–$7k", "$7k+"].map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </Field>
          <Field label="Message" error={errors.message?.message}>
            <textarea {...register("message")} rows={5} className={inputCls + " resize-none"} placeholder="Tell me about the channel, the goal, the deadline." />
          </Field>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-neon px-6 py-3.5 font-semibold text-primary-foreground shadow-neon transition-transform hover:scale-[1.02] disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Send it"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}

const inputCls = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-neon";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      {children}
      {error && <div className="mt-1 text-xs text-destructive">{error}</div>}
    </div>
  );
}
