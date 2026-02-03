"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, Mail, ArrowRight, CheckCircle2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const formSchema = z.object({
    email: z.string().email("Please enter a valid email address."),
})

interface WaitlistInputProps {
    className?: string
}

export function WaitlistInput({ className }: WaitlistInputProps) {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    })

    // ----------------------------------------------------------------------
    // FORM SUBMISSION HANDLER
    // ----------------------------------------------------------------------
    // TODO: Replace with your actual Formspree endpoint or API call.
    // Example: fetch("https://formspree.io/f/YOUR_FORM_ID", { ... })
    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const response = await fetch("https://formspree.io/f/mnjzkjjz", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })

            if (!response.ok) throw new Error("Failed to submit")

            console.log("Waitlist email submitted:", values.email)
            setIsSubmitted(true)
            toast.success("You're on the list! We'll be in touch soon.")

        } catch (error) {
            console.error("Submission error:", error)
            toast.error("Something went wrong. Please try again.")
        }
    }

    return (
        <div className={cn("w-full max-w-md mx-auto", className)}>
            <AnimatePresence mode="wait">
                {!isSubmitted ? (
                    <motion.form
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="relative flex items-center p-2 bg-background/80 backdrop-blur-sm border rounded-full shadow-lg ring-1 ring-white/10 focus-within:ring-2 focus-within:ring-primary/50 transition-all duration-300"
                    >
                        <Mail className="w-5 h-5 ml-3 text-muted-foreground shrink-0" />

                        <Input
                            {...form.register("email")}
                            placeholder="Enter your email for early access"
                            className="flex-1 border-none !bg-transparent !shadow-none focus-visible:ring-0 h-10 md:h-12 text-base md:text-lg text-white placeholder:text-gray-400"
                            disabled={form.formState.isSubmitting}
                        />

                        <Button
                            type="submit"
                            size="icon"
                            disabled={form.formState.isSubmitting}
                            className={cn(
                                "h-10 w-10 md:h-12 md:w-12 rounded-full shrink-0 transition-all duration-300",
                                form.formState.isSubmitting ? "bg-muted text-muted-foreground" : "bg-primary text-primary-foreground hover:scale-105"
                            )}
                        >
                            {form.formState.isSubmitting ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                                <ArrowRight className="w-5 h-5" />
                            )}
                            <span className="sr-only">Join Waitlist</span>
                        </Button>
                    </motion.form>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center justify-center p-6 bg-background/60 backdrop-blur-md rounded-2xl border border-green-500/20 shadow-xl"
                    >
                        <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center mb-3">
                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">You're in!</h3>
                        <p className="text-muted-foreground text-center text-sm mt-1">
                            Thanks for joining. Watch your inbox for updates.
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Validation Message */}
            {form.formState.errors.email && (
                <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-red-500 text-sm mt-2 ml-4 text-left font-medium"
                >
                    {form.formState.errors.email.message}
                </motion.p>
            )}

            {/* Helper Text (only show if not submitted) */}
            {!isSubmitted && (
                <p className="mt-3 text-xs md:text-sm text-muted-foreground/60 text-center">
                    Join <span className="text-foreground font-medium">2000+</span> others waiting for access.
                </p>
            )}
        </div>
    )
}
