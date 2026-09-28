// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import heroImg from "../../../public/images/hero.svg";
// import {
//   AArrowUp,
//   Brain,
//   Galaxy,
//   Activity,
//   ZodiacAquarius,
//   AudioLines,
// } from "lucide-react";

// // Dynamic array for company logos to ensure type safety and easy maintenance
// const LOGOS = [
//   { name: "Apex", Icon: AArrowUp },
//   { name: "Nexus", Icon: Brain },
//   { name: "Vortex", Icon: Galaxy },
//   { name: "Pulse", Icon: Activity },
//   { name: "Nova", Icon: ZodiacAquarius },
//   { name: "Echo", Icon: AudioLines },
// ];

// export function Hero() {
//   return (
//     <section className="bg-white py-12 lg:py-20">
//       <div className="container mx-auto max-w-7xl px-4">
//         {/* Main Hero Grid Layout: 2 Columns on large screens */}
//         <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
//           {/* Left Column: Heading, Subtitle, and Call to Action (CTA) Buttons */}
//           <div className="space-y-6 lg:col-span-7">
//             <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl xl:text-6xl">
//               AI-Powered Customer Support That Scales With You
//             </h1>

//             <p className="max-w-xl text-base text-slate-600 sm:text-lg">
//               Automate up to 80% of your customer inquiries in minutes, lower
//               resolution times, and delight your customers with smart AI agents.
//               No coding required.
//             </p>

//             <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
//               {/* Primary Call-To-Action Button */}
//               <Button asChild variant="brand" size="lg" className="shadow-md">
//                 <Link href="/register">Start Free Trial</Link>
//               </Button>

//               {/* Secondary Button */}
//               <Button asChild variant="outline" size="lg" className="shadow-sm">
//                 <Link href="/pricing">Pricing & FAQ</Link>
//               </Button>
//             </div>
//           </div>

//           {/* Right Column: Hero Illustration Image */}
//           <div className="flex justify-center lg:col-span-5">
//             <Image
//               src={heroImg}
//               alt="Hero Illustration"
//               width={500}
//               height={500}
//               priority // Preloads the image to improve LCP performance
//               className="h-auto w-full max-w-md object-contain lg:max-w-none"
//             />
//           </div>
//         </div>

//         {/* Social Proof Section: Client/Partner Logos */}
//         <div className="mt-16 border-t border-gray-200 pt-10">
//           <p className="pb-8 text-center text-sm font-semibold tracking-widest text-gray-500 uppercase">
//             TRUSTED BY OVER 10,000+ MODERN TEAMS WORLDWIDE
//           </p>
//           <div className="grid grid-cols-2 items-center justify-items-center gap-8 opacity-70 md:grid-cols-3 lg:grid-cols-6">
//             {LOGOS.map(({ name, Icon }) => (
//               <div
//                 key={name}
//                 className="flex items-center gap-2 text-slate-600 transition-colors hover:text-slate-900 cursor-pointer"
//               >
//                 <Icon className="h-24 w-24" />
//                 <span className="text-lg font-bold tracking-tight">{name}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import {
//   AArrowUp,
//   Brain,
//   Galaxy,
//   Activity,
//   ZodiacAquarius,
//   AudioLines,
//   Bot,
//   User,
//   Sparkles,
//   CheckCircle2,
//   ArrowRight,
//   ChevronRight,
// } from "lucide-react";

// const LOGOS = [
//   { name: "Apex", Icon: AArrowUp },
//   { name: "Nexus", Icon: Brain },
//   { name: "Vortex", Icon: Galaxy },
//   { name: "Pulse", Icon: Activity },
//   { name: "Nova", Icon: ZodiacAquarius },
//   { name: "Echo", Icon: AudioLines },
// ];

// export function Hero() {
//   return (
//     <section className="bg-white py-12 lg:py-20 overflow-hidden dark:bg-transparent">
//       <div className="container mx-auto max-w-7xl px-4">
//         {/* Main Hero Grid Layout */}
//         <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
//           {/* Left Column: Heading & CTAs */}
//           <div className="space-y-6 lg:col-span-7">
//             {/* Pill Badge */}
//             <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50/80 px-3.5 py-1 text-xs font-medium text-violet-700 transition-colors hover:bg-violet-100 dark:border-violet-500/30 dark:bg-violet-500/10 dark:text-violet-300">
//               <span className="flex h-2 w-2 rounded-full bg-violet-600 animate-pulse"></span>
//               <span>Introducing NexusAI 2.0</span>
//               <ChevronRight className="h-3.5 w-3.5" />
//             </div>

//             <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl xl:text-6xl dark:text-white">
//               AI-Powered Customer Support That Scales With You
//             </h1>

//             <p className="max-w-xl text-base text-slate-600 sm:text-lg leading-relaxed dark:text-slate-400">
//               Automate up to 80% of your customer inquiries in minutes, lower
//               resolution times, and delight your customers with smart AI agents.
//               No coding required.
//             </p>

//             <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-2">
//               <Button
//                 asChild
//                 variant="brand"
//                 size="lg"
//                 className="shadow-lg shadow-violet-500/20"
//               >
//                 <Link href="/register">Start Free Trial</Link>
//               </Button>

//               <Button asChild variant="outline" size="lg" className="shadow-sm">
//                 <Link href="/pricing">Pricing & FAQ</Link>
//               </Button>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="flex justify-center lg:col-span-5">
//             <div className="relative w-full max-w-md">
//               {/* Soft background glow */}
//               <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 opacity-20 blur-xl"></div>

//               <div className="relative rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-md p-5 shadow-2xl space-y-4">
//                 {/* Header Bar */}
//                 <div className="flex items-center justify-between pb-3 border-b border-slate-100">
//                   <div className="flex items-center gap-2.5">
//                     <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white shadow-sm">
//                       <Bot className="w-4 h-4" />
//                     </div>
//                     <div>
//                       <h4 className="text-xs font-bold text-slate-900">
//                         NexusAI Assistant
//                       </h4>
//                       <p className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
//                         <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
//                         Active • 24ms response
//                       </p>
//                     </div>
//                   </div>
//                   <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-50 text-violet-700 font-semibold border border-violet-100 dark:bg-slate-800 dark:text-slate-200">
//                     GPT-4o
//                   </span>
//                 </div>

//                 {/* Chat Messages */}
//                 <div className="space-y-3 text-xs">
//                   <div className="flex items-start gap-2 justify-end">
//                     <div className="bg-slate-100 text-slate-800 p-3 rounded-2xl rounded-tr-none max-w-[80%] leading-relaxed dark:bg-slate-800 dark:text-slate-200">
//                       Can I track my order status for #TR-892341?
//                     </div>
//                     <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 shrink-0">
//                       <User className="w-3.5 h-3.5" />
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-2">
//                     <div className="w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center text-white shrink-0 shadow-sm">
//                       <Sparkles className="w-3.5 h-3.5" />
//                     </div>
//                     <div className="bg-violet-50/80 border border-violet-100 text-slate-800 p-3 rounded-2xl rounded-tl-none max-w-[85%] space-y-2 dark:bg-violet-500/10 dark:border-violet-500/20 dark:text-slate-200">
//                       <p className="leading-relaxed">
//                         Your package is out for delivery! Estimated arrival is
//                         today by 4:00 PM.
//                       </p>
//                       <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-semibold">
//                         <CheckCircle2 className="w-3 h-3" /> Auto-resolved in
//                         1.2s
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Live Stats Footer */}
//                 <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100 dark:border-slate-800">
//                   <span>
//                     Auto-resolution rate:{" "}
//                     <strong className="text-slate-900">88.4%</strong>
//                   </span>
//                   <span className="text-violet-600 font-semibold flex items-center gap-0.5 hover:underline cursor-pointer">
//                     Live Demo <ArrowRight className="w-3 h-3" />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Social Proof Section */}
//         <div className="mt-16 border-t border-slate-100 pt-10">
//           <p className="pb-8 text-center text-xs font-bold tracking-widest text-slate-400 uppercase">
//             TRUSTED BY OVER 10,000+ MODERN TEAMS WORLDWIDE
//           </p>
//           <div className="grid grid-cols-2 items-center justify-items-center gap-8 opacity-60 md:grid-cols-3 lg:grid-cols-6">
//             {LOGOS.map(({ name, Icon }) => (
//               <div
//                 key={name}
//                 className="flex items-center gap-2 text-slate-600 transition-colors hover:text-slate-900 cursor-pointer"
//               >
//                 <Icon className="h-5 w-5" />
//                 <span className="text-base font-bold tracking-tight">
//                   {name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import {
//   AArrowUp,
//   Brain,
//   Galaxy,
//   Activity,
//   ZodiacAquarius,
//   AudioLines,
//   Bot,
//   User,
//   Sparkles,
//   CheckCircle2,
//   ArrowRight,
//   ChevronRight,
// } from "lucide-react";

// const LOGOS = [
//   { name: "Apex", Icon: AArrowUp },
//   { name: "Nexus", Icon: Brain },
//   { name: "Vortex", Icon: Galaxy },
//   { name: "Pulse", Icon: Activity },
//   { name: "Nova", Icon: ZodiacAquarius },
//   { name: "Echo", Icon: AudioLines },
// ];

// export function Hero() {
//   return (
//     <section className="bg-white py-12 lg:py-20 overflow-hidden dark:bg-slate-950 transition-colors duration-300">
//       <div className="container mx-auto max-w-7xl px-4">
//         {/* Main Hero Grid Layout */}
//         <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
//           {/* Left Column: Heading & CTAs */}
//           <div className="space-y-6 lg:col-span-7">
//             {/* Pill Badge */}
//             <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50/80 px-3.5 py-1 text-xs font-medium text-violet-700 transition-colors hover:bg-violet-100 dark:border-violet-500/30 dark:bg-violet-500/10 dark:text-violet-300 dark:hover:bg-violet-500/20">
//               <span className="flex h-2 w-2 rounded-full bg-violet-600 dark:bg-violet-400 animate-pulse"></span>
//               <span>Introducing NexusAI 2.0</span>
//               <ChevronRight className="h-3.5 w-3.5" />
//             </div>

//             <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl xl:text-6xl dark:text-white">
//               AI-Powered Customer Support That Scales With You
//             </h1>

//             <p className="max-w-xl text-base text-slate-600 sm:text-lg leading-relaxed dark:text-slate-400">
//               Automate up to 80% of your customer inquiries in minutes, lower
//               resolution times, and delight your customers with smart AI agents.
//               No coding required.
//             </p>

//             <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-2">
//               <Button
//                 asChild
//                 variant="brand"
//                 size="lg"
//                 className="shadow-lg shadow-violet-500/20 dark:shadow-violet-900/40"
//               >
//                 <Link href="/register">Start Free Trial</Link>
//               </Button>

//               <Button
//                 asChild
//                 variant="outline"
//                 size="lg"
//                 className="shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
//               >
//                 <Link href="/pricing">Pricing & FAQ</Link>
//               </Button>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="flex justify-center lg:col-span-5">
//             <div className="relative w-full max-w-md">
//               {/* Soft background glow */}
//               <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 opacity-20 dark:opacity-40 blur-xl"></div>

//               <div className="relative rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-md p-5 shadow-2xl space-y-4 dark:border-slate-800 dark:bg-slate-900/90">
//                 {/* Header Bar */}
//                 <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
//                   <div className="flex items-center gap-2.5">
//                     <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white shadow-sm dark:bg-violet-500">
//                       <Bot className="w-4 h-4" />
//                     </div>
//                     <div>
//                       <h4 className="text-xs font-bold text-slate-900 dark:text-white">
//                         NexusAI Assistant
//                       </h4>
//                       <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
//                         <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse"></span>
//                         Active • 24ms response
//                       </p>
//                     </div>
//                   </div>
//                   <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-50 text-violet-700 font-semibold border border-violet-100 dark:bg-violet-950/50 dark:text-violet-300 dark:border-violet-800/50">
//                     GPT-4o
//                   </span>
//                 </div>

//                 {/* Chat Messages */}
//                 <div className="space-y-3 text-xs">
//                   <div className="flex items-start gap-2 justify-end">
//                     <div className="bg-slate-100 text-slate-800 p-3 rounded-2xl rounded-tr-none max-w-[80%] leading-relaxed dark:bg-slate-800 dark:text-slate-200">
//                       Can I track my order status for #TR-892341?
//                     </div>
//                     <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 shrink-0 dark:bg-slate-800 dark:text-slate-400">
//                       <User className="w-3.5 h-3.5" />
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-2">
//                     <div className="w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center text-white shrink-0 shadow-sm dark:bg-violet-500">
//                       <Sparkles className="w-3.5 h-3.5" />
//                     </div>
//                     <div className="bg-violet-50/80 border border-violet-100 text-slate-800 p-3 rounded-2xl rounded-tl-none max-w-[85%] space-y-2 dark:bg-violet-950/40 dark:border-violet-800/40 dark:text-slate-200">
//                       <p className="leading-relaxed">
//                         Your package is out for delivery! Estimated arrival is
//                         today by 4:00 PM.
//                       </p>
//                       <div className="flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
//                         <CheckCircle2 className="w-3 h-3" /> Auto-resolved in
//                         1.2s
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Live Stats Footer */}
//                 <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
//                   <span>
//                     Auto-resolution rate:{" "}
//                     <strong className="text-slate-900 dark:text-white">
//                       88.4%
//                     </strong>
//                   </span>
//                   <span className="text-violet-600 dark:text-violet-400 font-semibold flex items-center gap-0.5 hover:underline cursor-pointer">
//                     Live Demo <ArrowRight className="w-3 h-3" />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Social Proof Section */}
//         <div className="mt-16 border-t border-slate-100 dark:border-slate-800/80 pt-10">
//           <p className="pb-8 text-center text-xs font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase">
//             TRUSTED BY OVER 10,000+ MODERN TEAMS WORLDWIDE
//           </p>
//           <div className="grid grid-cols-2 items-center justify-items-center gap-8 opacity-60 md:grid-cols-3 lg:grid-cols-6">
//             {LOGOS.map(({ name, Icon }) => (
//               <div
//                 key={name}
//                 className="flex items-center gap-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors cursor-pointer"
//               >
//                 <Icon className="h-5 w-5" />
//                 <span className="text-base font-bold tracking-tight">
//                   {name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import {
//   AArrowUp,
//   Brain,
//   Galaxy,
//   Activity,
//   ZodiacAquarius,
//   AudioLines,
//   Bot,
//   User,
//   Sparkles,
//   CheckCircle2,
//   ArrowRight,
//   ChevronRight,
// } from "lucide-react";

// const LOGOS = [
//   { name: "Apex", Icon: AArrowUp },
//   { name: "Nexus", Icon: Brain },
//   { name: "Vortex", Icon: Galaxy },
//   { name: "Pulse", Icon: Activity },
//   { name: "Nova", Icon: ZodiacAquarius },
//   { name: "Echo", Icon: AudioLines },
// ];

// export function Hero() {
//   return (
//     <section className="bg-bg-main py-12 lg:py-20 overflow-hidden transition-colors duration-300">
//       <div className="container mx-auto max-w-7xl px-4">
//         {/* Main Hero Grid Layout */}
//         <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
//           {/* Left Column: Heading & CTAs */}
//           <div className="space-y-6 lg:col-span-7">
//             {/* Pill Badge */}
//             <div className="inline-flex items-center gap-2 rounded-full border border-brand-main/20 bg-brand-muted px-3.5 py-1 text-xs font-medium text-brand-main transition-colors hover:bg-brand-main/20">
//               <span className="flex h-2 w-2 rounded-full bg-brand-main animate-pulse"></span>
//               <span>Introducing NexusAI 2.0</span>
//               <ChevronRight className="h-3.5 w-3.5" />
//             </div>

//             <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl xl:text-6xl">
//               AI-Powered Customer Support That Scales With You
//             </h1>

//             <p className="max-w-xl text-base text-foreground/70 sm:text-lg leading-relaxed">
//               Automate up to 80% of your customer inquiries in minutes, lower
//               resolution times, and delight your customers with smart AI agents.
//               No coding required.
//             </p>

//             <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-2">
//               <Button
//                 asChild
//                 variant="brand"
//                 size="lg"
//                 className="bg-brand-main hover:bg-brand-hover text-white shadow-lg shadow-brand-main/20"
//               >
//                 <Link href="/register">Start Free Trial</Link>
//               </Button>

//               <Button
//                 asChild
//                 variant="outline"
//                 size="lg"
//                 className="border-border bg-card text-foreground hover:bg-panel-bg shadow-sm"
//               >
//                 <Link href="/pricing">Pricing & FAQ</Link>
//               </Button>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="flex justify-center lg:col-span-5">
//             <div className="relative w-full max-w-md">
//               {/* Soft background glow */}
//               <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-brand-main to-brand-dark opacity-20 blur-xl"></div>

//               {/* Chat Container */}
//               <div className="relative rounded-2xl border border-border bg-card/90 backdrop-blur-md p-5 shadow-2xl space-y-4">
//                 {/* Header Bar */}
//                 <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
//                   <div className="flex items-center gap-2.5">
//                     <div className="w-8 h-8 rounded-lg bg-brand-main flex items-center justify-center text-white shadow-sm">
//                       <Bot className="w-4 h-4" />
//                     </div>
//                     <div>
//                       <h4 className="text-xs font-bold text-card-foreground">
//                         NexusAI Assistant
//                       </h4>
//                       <p className="text-[11px] text-emerald-500 font-medium flex items-center gap-1">
//                         <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
//                         Active • 24ms response
//                       </p>
//                     </div>
//                   </div>
//                   <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-muted text-brand-main font-semibold border border-brand-main/20">
//                     GPT-4o
//                   </span>
//                 </div>

//                 {/* Chat Messages */}
//                 <div className="space-y-3 text-xs">
//                   {/* User Message */}
//                   <div className="flex items-start gap-2 justify-end">
//                     <div className="bg-chat-user-bg text-card-foreground p-3 rounded-2xl rounded-tr-none max-w-[80%] leading-relaxed">
//                       Can I track my order status for #TR-892341?
//                     </div>
//                     <div className="w-6 h-6 rounded-full bg-chat-user-bg flex items-center justify-center text-foreground/60 shrink-0">
//                       <User className="w-3.5 h-3.5" />
//                     </div>
//                   </div>

//                   {/* AI Response */}
//                   <div className="flex items-start gap-2">
//                     <div className="w-6 h-6 rounded-full bg-brand-main flex items-center justify-center text-white shrink-0 shadow-sm">
//                       <Sparkles className="w-3.5 h-3.5" />
//                     </div>
//                     <div className="bg-chat-ai-bg border border-chat-ai-border text-card-foreground p-3 rounded-2xl rounded-tl-none max-w-[85%] space-y-2">
//                       <p className="leading-relaxed">
//                         Your package is out for delivery! Estimated arrival is
//                         today by 4:00 PM.
//                       </p>
//                       <div className="flex items-center gap-1 text-[10px] text-emerald-500 font-semibold">
//                         <CheckCircle2 className="w-3 h-3" /> Auto-resolved in
//                         1.2s
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Live Stats Footer */}
//                 <div className="pt-2 flex items-center justify-between text-[11px] text-foreground/60 border-t border-border-subtle">
//                   <span>
//                     Auto-resolution rate:{" "}
//                     <strong className="text-foreground">88.4%</strong>
//                   </span>
//                   <span className="text-brand-main font-semibold flex items-center gap-0.5 hover:underline cursor-pointer">
//                     Live Demo <ArrowRight className="w-3 h-3" />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Social Proof Section */}
//         <div className="mt-16 border-t border-border-subtle pt-10">
//           <p className="pb-8 text-center text-xs font-bold tracking-widest text-foreground/40 uppercase">
//             TRUSTED BY OVER 10,000+ MODERN TEAMS WORLDWIDE
//           </p>
//           <div className="grid grid-cols-2 items-center justify-items-center gap-8 opacity-60 md:grid-cols-3 lg:grid-cols-6">
//             {LOGOS.map(({ name, Icon }) => (
//               <div
//                 key={name}
//                 className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors cursor-pointer"
//               >
//                 <Icon className="h-5 w-5" />
//                 <span className="text-base font-bold tracking-tight">
//                   {name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import {
//   AArrowUp,
//   Brain,
//   Galaxy,
//   Activity,
//   ZodiacAquarius,
//   AudioLines,
//   Bot,
//   User,
//   Sparkles,
//   CheckCircle2,
//   ArrowRight,
//   ChevronRight,
// } from "lucide-react";

// const LOGOS = [
//   { name: "Apex", Icon: AArrowUp },
//   { name: "Nexus", Icon: Brain },
//   { name: "Vortex", Icon: Galaxy },
//   { name: "Pulse", Icon: Activity },
//   { name: "Nova", Icon: ZodiacAquarius },
//   { name: "Echo", Icon: AudioLines },
// ];

// export function Hero() {
//   return (
//     <section className="bg-bg-main py-14 lg:py-24 overflow-hidden transition-colors duration-300">
//       <div className="container mx-auto max-w-7xl px-4">
//         {/* Main Hero Grid Layout */}
//         <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
//           {/* Left Column: Heading & CTAs */}
//           <div className="space-y-6 lg:col-span-7">
//             {/* Pill Badge */}
//             <div className="inline-flex items-center gap-2 rounded-full border border-brand-main/20 bg-brand-muted px-3.5 py-1 text-xs font-medium text-brand-main transition-colors hover:bg-brand-main/20">
//               <span className="flex h-2 w-2 rounded-full bg-brand-main animate-pulse"></span>
//               <span>Introducing NexusAI 2.0</span>
//               <ChevronRight className="h-3.5 w-3.5" />
//             </div>

//             <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl xl:text-6xl">
//               AI-Powered Customer Support That Scales With You
//             </h1>

//             <p className="max-w-xl text-base text-foreground/70 sm:text-lg leading-relaxed">
//               Automate up to 80% of your customer inquiries in minutes, lower
//               resolution times, and delight your customers with smart AI agents.
//               No coding required.
//             </p>

//             <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-2">
//               <Button
//                 asChild
//                 variant="brand"
//                 size="lg"
//                 className="bg-brand-main hover:bg-brand-hover text-white shadow-lg shadow-brand-main/20"
//               >
//                 <Link href="/register">Start Free Trial</Link>
//               </Button>

//               <Button
//                 asChild
//                 variant="outline"
//                 size="lg"
//                 className="border-border bg-card text-foreground hover:bg-panel-bg shadow-sm"
//               >
//                 <Link href="/pricing">Pricing & FAQ</Link>
//               </Button>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="flex justify-center lg:col-span-5">
//             <div className="relative w-full max-w-md">
//               {/* Soft background glow */}
//               <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-brand-main to-brand-dark opacity-20 blur-xl"></div>

//               {/* Chat Container */}
//               <div className="relative rounded-2xl border border-border bg-card/90 backdrop-blur-md p-5 shadow-2xl space-y-4">
//                 {/* Header Bar */}
//                 <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
//                   <div className="flex items-center gap-2.5">
//                     <div className="w-8 h-8 rounded-lg bg-brand-main flex items-center justify-center text-white shadow-sm">
//                       <Bot className="w-4 h-4" />
//                     </div>
//                     <div>
//                       <h4 className="text-xs font-bold text-card-foreground">
//                         NexusAI Assistant
//                       </h4>
//                       <p className="text-[11px] text-emerald-500 font-medium flex items-center gap-1">
//                         <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
//                         Active • 24ms response
//                       </p>
//                     </div>
//                   </div>
//                   <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-muted text-brand-main font-semibold border border-brand-main/20">
//                     NexusAI Core
//                   </span>
//                 </div>

//                 {/* Chat Messages */}
//                 <div className="space-y-3 text-xs">
//                   {/* User Message */}
//                   <div className="flex items-start gap-2 justify-end">
//                     <div className="bg-chat-user-bg text-card-foreground p-3 rounded-2xl rounded-tr-none max-w-[80%] leading-relaxed">
//                       Can I track my order status for #TR-892341?
//                     </div>
//                     <div className="w-6 h-6 rounded-full bg-chat-user-bg flex items-center justify-center text-foreground/60 shrink-0">
//                       <User className="w-3.5 h-3.5" />
//                     </div>
//                   </div>

//                   {/* AI Response */}
//                   <div className="flex items-start gap-2">
//                     <div className="w-6 h-6 rounded-full bg-brand-main flex items-center justify-center text-white shrink-0 shadow-sm">
//                       <Sparkles className="w-3.5 h-3.5" />
//                     </div>
//                     <div className="bg-chat-ai-bg border border-chat-ai-border text-card-foreground p-3 rounded-2xl rounded-tl-none max-w-[85%] space-y-2">
//                       <p className="leading-relaxed">
//                         Your package is out for delivery! Estimated arrival is
//                         today by 4:00 PM.
//                       </p>
//                       <div className="flex items-center gap-1 text-[10px] text-emerald-500 font-semibold">
//                         <CheckCircle2 className="w-3 h-3" /> Auto-resolved in
//                         1.2s
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Live Stats Footer */}
//                 <div className="pt-2 flex items-center justify-between text-[11px] text-foreground/60 border-t border-border-subtle">
//                   <span>
//                     Auto-resolution rate:{" "}
//                     <strong className="text-foreground">88.4%</strong>
//                   </span>
//                   <span className="text-brand-main font-semibold flex items-center gap-0.5 hover:underline cursor-pointer">
//                     Live Demo <ArrowRight className="w-3 h-3" />
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Social Proof Section */}
//         <div className="mt-16 border-t border-border-subtle pt-10">
//           <p className="pb-8 text-center text-xs font-bold tracking-widest text-foreground/40 uppercase">
//             TRUSTED BY OVER 10,000+ MODERN TEAMS WORLDWIDE
//           </p>
//           <div className="grid grid-cols-2 items-center justify-items-center gap-8 opacity-60 md:grid-cols-3 lg:grid-cols-6">
//             {LOGOS.map(({ name, Icon }) => (
//               <div
//                 key={name}
//                 className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors cursor-pointer"
//               >
//                 <Icon className="h-5 w-5" />
//                 <span className="text-base font-bold tracking-tight">
//                   {name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  AArrowUp,
  Brain,
  Galaxy,
  Activity,
  ZodiacAquarius,
  AudioLines,
  Bot,
  User,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

// Fictional companies — deliberately not real brand logos.
// Showing real, unaffiliated brands here would imply a false partnership/endorsement.
const LOGOS = [
  { name: "Apex", Icon: AArrowUp },
  { name: "Nexus", Icon: Brain },
  { name: "Vortex", Icon: Galaxy },
  { name: "Pulse", Icon: Activity },
  { name: "Nova", Icon: ZodiacAquarius },
  { name: "Echo", Icon: AudioLines },
];

export function Hero() {
  return (
    <section className="bg-bg-main py-14 lg:py-24 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Main Hero Grid Layout */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Heading & CTAs */}
          <div className="space-y-6 lg:col-span-7">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-main/20 bg-brand-muted px-3.5 py-1 text-xs font-medium text-brand-main transition-colors hover:bg-brand-main/20">
              <span className="flex h-2 w-2 rounded-full bg-brand-main animate-pulse"></span>
              <span>Introducing NexusAI 2.0</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </div>

            <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl xl:text-6xl">
              AI-Powered Customer Support That Scales With You
            </h1>

            <p className="max-w-xl text-base text-foreground/70 sm:text-lg leading-relaxed">
              Automate up to 80% of your customer inquiries in minutes, lower
              resolution times, and delight your customers with smart AI agents.
              No coding required.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center pt-2">
              <Button
                asChild
                variant="brand"
                size="lg"
                className="bg-brand-main hover:bg-brand-hover text-white shadow-lg shadow-brand-main/20"
              >
                <Link href="/register">Start Free Trial</Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border bg-card text-foreground hover:bg-panel-bg shadow-sm"
              >
                <Link href="/pricing">Pricing & FAQ</Link>
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center lg:col-span-5">
            <div className="relative w-full max-w-md">
              {/* Soft background glow */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-brand-main to-brand-dark opacity-20 blur-xl"></div>

              {/* Chat Container */}
              <div className="relative rounded-2xl border border-border bg-card/90 backdrop-blur-md p-5 shadow-2xl space-y-4">
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-border-subtle">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-brand-main flex items-center justify-center text-white shadow-sm">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-card-foreground">
                        NexusAI Assistant
                      </h4>
                      <p className="text-[11px] text-emerald-500 font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Active • 24ms response
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-muted text-brand-main font-semibold border border-brand-main/20">
                    NexusAI Core
                  </span>
                </div>

                {/* Chat Messages */}
                <div className="space-y-3 text-xs">
                  {/* User Message */}
                  <div className="flex items-start gap-2 justify-end">
                    <div className="bg-chat-user-bg text-card-foreground p-3 rounded-2xl rounded-tr-none max-w-[80%] leading-relaxed">
                      Can I track my order status for #TR-892341?
                    </div>
                    <div className="w-6 h-6 rounded-full bg-chat-user-bg flex items-center justify-center text-foreground/60 shrink-0">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-brand-main flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <div className="bg-chat-ai-bg border border-chat-ai-border text-card-foreground p-3 rounded-2xl rounded-tl-none max-w-[85%] space-y-2">
                      <p className="leading-relaxed">
                        Your package is out for delivery! Estimated arrival is
                        today by 4:00 PM.
                      </p>
                      <div className="flex items-center gap-1 text-[10px] text-emerald-500 font-semibold">
                        <CheckCircle2 className="w-3 h-3" /> Auto-resolved in
                        1.2s
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Stats Footer */}
                <div className="pt-2 flex items-center justify-between text-[11px] text-foreground/60 border-t border-border-subtle">
                  <span>
                    Auto-resolution rate:{" "}
                    <strong className="text-foreground">88.4%</strong>
                  </span>
                  <span className="text-brand-main font-semibold flex items-center gap-0.5 hover:underline cursor-pointer">
                    Live Demo <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof: Infinite Logo Marquee */}
        <div className="mt-20 lg:mt-28 border-t border-border-subtle pt-12">
          <p className="pb-8 text-center text-xs font-semibold tracking-wider text-foreground/40 uppercase">
            Trusted by over 10,000+ modern teams worldwide
          </p>

          {/* Edge-fade wrapper: overflow hidden + mask so the track fades in/out at the sides */}
          <div
            className="group relative overflow-hidden"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            {/* Track: logo list duplicated once so the -50% loop is seamless */}
            <div className="flex w-max animate-marquee items-center gap-16 group-hover:[animation-play-state:paused] sm:gap-20">
              {[...LOGOS, ...LOGOS].map(({ name, Icon }, index) => (
                <div
                  key={`${name}-${index}`}
                  className="flex shrink-0 items-center gap-2 text-foreground/60 hover:text-foreground transition-colors cursor-pointer"
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span className="text-sm font-semibold tracking-tight whitespace-nowrap">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
