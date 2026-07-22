"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "./common/button";

// Zod Schema Definition
const quoteFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  location: z.string().optional(),
  projectType: z.string().min(2, "Project type is required"),
  projectDuration: z.string().min(1, "Project duration is required"),
  message: z.string().min(5, "Message must be at least 5 characters"),
  googleDoc: z.string().url("Invalid URL").optional().or(z.literal("")),
  googleDrive: z.string().url("Invalid URL").optional().or(z.literal("")),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms",
  }),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

export default function GetAQuoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      consent: false,
    },
  });

  const onSubmit = (data: QuoteFormData) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-black/5">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* ================= SECTION 1: YOUR DETAILS ================= */}
        <div className="space-y-4">
          {/* Section Header */}
          <h3 className="text-base font-bold text-neutral-900 tracking-tight">
            Your Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-neutral-700">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("name")}
                placeholder="Enter your name"
                className="w-full px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 bg-neutral-50/40 border border-neutral-200/60 rounded-xl focus:outline-none focus:border-neutral-800 focus:bg-white transition-all duration-200"
              />
              {errors.name && (
                <p className="text-[11px] text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-neutral-700">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Enter your email"
                className="w-full px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 bg-neutral-50/40 border border-neutral-200/60 rounded-xl focus:outline-none focus:border-neutral-800 focus:bg-white transition-all duration-200"
              />
              {errors.email && (
                <p className="text-[11px] text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Company */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-neutral-700">
                Your Company
              </label>
              <input
                type="text"
                {...register("company")}
                placeholder="Enter your company name"
                className="w-full px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 bg-neutral-50/40 border border-neutral-200/60 rounded-xl focus:outline-none focus:border-neutral-800 focus:bg-white transition-all duration-200"
              />
            </div>

            {/* Location */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-neutral-700">
                Your Location
              </label>
              <input
                type="text"
                {...register("location")}
                placeholder="Enter your location"
                className="w-full px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 bg-neutral-50/40 border border-neutral-200/60 rounded-xl focus:outline-none focus:border-neutral-800 focus:bg-white transition-all duration-200"
              />
            </div>
          </div>
        </div>

        {/* ================= SECTION 2: PROJECT DETAILS ================= */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-neutral-900 tracking-tight">
            Project Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Project Type */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-neutral-700">
                Project Type <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("projectType")}
                placeholder="e.g. Website"
                className="w-full px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 bg-neutral-50/40 border border-neutral-200/60 rounded-xl focus:outline-none focus:border-neutral-800 focus:bg-white transition-all duration-200"
              />
              {errors.projectType && (
                <p className="text-[11px] text-red-500">
                  {errors.projectType.message}
                </p>
              )}
            </div>

            {/* Project Duration */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-neutral-700">
                Project Duration <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("projectDuration")}
                placeholder="e.g. 1 month"
                className="w-full px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 bg-neutral-50/40 border border-neutral-200/60 rounded-xl focus:outline-none focus:border-neutral-800 focus:bg-white transition-all duration-200"
              />
              {errors.projectDuration && (
                <p className="text-[11px] text-red-500">
                  {errors.projectDuration.message}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1.5 pt-1">
            <label className="block text-xs font-semibold text-neutral-700">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Enter your message"
              className="w-full px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 bg-neutral-50/40 border border-neutral-200/60 rounded-xl focus:outline-none focus:border-neutral-800 focus:bg-white transition-all duration-200 resize-y"
            />
            {errors.message && (
              <p className="text-[11px] text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Google Doc Link */}
          <div className="space-y-1.5 pt-1">
            <label className="block text-xs font-semibold text-neutral-700">
              Google Doc
            </label>
            <input
              type="url"
              {...register("googleDoc")}
              placeholder="Google docs link with access to technofysystems@gmail.com"
              className="w-full px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 bg-neutral-50/40 border border-neutral-200/60 rounded-xl focus:outline-none focus:border-neutral-800 focus:bg-white transition-all duration-200"
            />
            {errors.googleDoc && (
              <p className="text-[11px] text-red-500">
                {errors.googleDoc.message}
              </p>
            )}
          </div>

          {/* Google Drive Link */}
          <div className="space-y-1.5 pt-1">
            <label className="block text-xs font-semibold text-neutral-700">
              Google Drive
            </label>
            <input
              type="url"
              {...register("googleDrive")}
              placeholder="Google drive link with access to technofysystems@gmail.com"
              className="w-full px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 bg-neutral-50/40 border border-neutral-200/60 rounded-xl focus:outline-none focus:border-neutral-800 focus:bg-white transition-all duration-200"
            />
            {errors.googleDrive && (
              <p className="text-[11px] text-red-500">
                {errors.googleDrive.message}
              </p>
            )}
          </div>
        </div>

        {/* ================= SECTION 3: CONSENT & SUBMIT ================= */}
        <div className="space-y-6 pt-2">
          {/* Checkbox */}
          <div className="space-y-1">
            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                {...register("consent")}
                className="mt-0.5 h-4 w-4 rounded border-neutral-300/80 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
              />
              <span className="text-xs font-semibold text-neutral-800 leading-snug group-hover:text-neutral-950 transition-colors">
                I agree to share my project details with Technofy Systems and
                consent to being contacted by their team.
              </span>
            </label>
            {errors.consent && (
              <p className="text-[11px] text-red-500 pl-7">
                {errors.consent.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <Button type="submit" className="bg-brand-primary!">
            Submit Data
          </Button>
        </div>
      </form>
    </div>
  );
}
