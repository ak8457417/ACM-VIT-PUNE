"use client"

import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
import EurekaSection from "@/pages/EurekaSection";
import Link from "next/link";
import rocket from '../public/assets/rocket.png'

const Timeline = () => {
    const events = [
        { id: 1, title: "Opportunity Talk", speaker: "Mr. Rushi Vijay", side: "left" },
        { id: 2, title: "Tech Awareness Session", speaker: "IEEE DYPIEMR", side: "right" },
        { id: 3, title: "Innovation Workshop", speaker: "Industry Expert", side: "left" },
    ];

    return (
        <div className="min-h-screen px-6 py-20">

            {/* ================= HERO SECTION ================= */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="max-w-3xl mx-auto mb-40 rounded-3xl bg-black/70 border border-green-500/30 shadow-[0_0_80px_rgba(34,197,94,0.15)] p-10 text-center"
            >
                <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block mb-4 px-4 py-1 text-xs font-semibold bg-white text-black rounded-full"
                >
                    ACM VIIT
                </motion.span>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-3xl md:text-4xl font-bold text-green-400 tracking-wide"
                >
                    Upcoming Event
                </motion.h1>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "80px" }}
                    transition={{ delay: 0.6 }}
                    className="h-0.5 bg-green-400 mx-auto my-6"
                />

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-slate-300 leading-relaxed text-sm md:text-base"
                >
                    A unique opportunity to showcase your talent in knowledge-sharing skills,
                    work for a noble social cause in the field of education and network with
                    like-minded people across the nation.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="mt-6 text-slate-400"
                >
                    Want to see our team of Eu-Reka 2021? Click below
                </motion.p>

                <Link href={'/details'} >
                    <div className="mt-8 flex flex-col gap-4 items-center"

                    >

                        <motion.button
                            animate={{ boxShadow: ["0 0 0px #22c55e", "0 0 25px #22c55e", "0 0 0px #22c55e"] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            whileHover={{ scale: 1.1 }}
                            className="px-8 py-3 bg-green-500 text-black font-semibold rounded-lg cursor-pointer"
                        >
                            Register
                        </motion.button>
                    </div>
                </Link>
            </motion.section>

            {/* ================= EVENTS HEADER ================= */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-24"
            >
                <h1 className="text-4xl font-bold text-white">Our Events · 2021–22</h1>
                <p className="mt-3 text-slate-400">
                    Some of the events conducted by IEEE DYPIEMR throughout the year
                </p>
            </motion.div>

            {/* ================= TIMELINE ================= */}
            <div className="relative max-w-5xl mx-auto">
                <div className="absolute left-1/2 top-0 h-full w-0.5 bg-linear-to-b from-red-500 via-red-600 to-red-700" />

                {/* Rocket */}
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="sticky top-24 flex justify-center mb-20"
                >
                    <Image
                        src={rocket}
                        alt="Rocket"
                        width={56}
                        height={56}
                        className="drop-shadow-lg rotate-180"
                    />
                </motion.div>

                <div className="space-y-28">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, x: event.side === "left" ? -80 : 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`flex ${event.side === "left" ? "justify-start" : "justify-end"}`}
                        >
                            <div className="w-full md:w-[45%]">
                                <div className="rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-slate-700 shadow-2xl p-6 hover:scale-[1.03] transition">
                                    <h3 className="text-xl font-semibold text-white">{event.title}</h3>
                                    <p className="mt-2 text-slate-400">{event.speaker}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Timeline
