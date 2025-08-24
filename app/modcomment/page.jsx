"use client";

import React, { useEffect, useState } from "react";
import styles from "@/app/styles/Follower.module.css";
import { Trash, User } from "lucide-react";
import AllHeader from "../components/AllHeader";

const FollowersPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [authLoading, setauthLoading] = useState(false);
    const [value, setValue] = useState("");
    const [mod, setMod] = useState(false);

    const followersData = [
        { title: "Blue Devotee", color: "bg-blue-200" },
        { title: "Sacred Gadgeteer", color: "bg-pink-200" },
        { title: "Nobi Disciple", color: "bg-purple-200" },
        { title: "Eternal Believer", color: "bg-green-200" },
        { title: "Time Voyager", color: "bg-yellow-200" },
        { title: "Divine Catbot", color: "bg-indigo-200" },
        { title: "Future Seeker", color: "bg-teal-200" },
        { title: "Cosmic Gadgeteer", color: "bg-rose-200" },
        { title: "Blessed Dora", color: "bg-orange-200" },
        { title: "Anywhere Pilgrim", color: "bg-cyan-200" },
    ];

    const handleChange = (val) => {
        setValue(val);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let valueSet = value.trim();
        try {
            setauthLoading(true); 
            const api = await fetch("/manageMessage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    postType: "passCheck",
                    password: valueSet,
                }),
            });
            const res = await api.json();
    
            if (res.message === "Auth sucessfull") {
                setMod(true);
            }
            alert(res.message);
        } catch (error) {
            console.log(error);
        } finally {
            setauthLoading(false); 
        }
    };
    

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const api = await fetch("/sendMessage");
                const res = await api.json();
                setData(res.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            const api = await fetch("/manageMessage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    postType: "modMessage",
                    id: id,
                }),
            })
            const res = await api.json();
            console.log(res)
            alert(res.status)
            setData(prev => prev.filter(item => item._id !== id));

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.container}>
            <AllHeader
                Title="MANAGE COMMENTS"
                Desc="The holy MODS can protect their followers from here by managing the comments"
            />

            {mod ? (
                <div className={styles.messageContainer}>
                    <div className={styles.message}>
                        {loading ? (
                            <p className="text-4xl">Loading...</p>
                        ) : (
                            <>
                                {[...data].reverse().map((e, i) => {
                                    const randomFollower =
                                        followersData[Math.floor(Math.random() * followersData.length)];
                                    return (
                                        <div className={styles.messages} key={i}>
                                            <div className={styles.upperMessage}>
                                                <div className={styles.lowerUpperInfo}>
                                                    <div
                                                        className={`h-12 w-12 rounded-full mr-2.5 flex justify-center items-center ${randomFollower.color}`}
                                                    >
                                                        <User />
                                                    </div>
                                                    <div>
                                                        <h3>{e.name}</h3>
                                                        <p>{randomFollower.title}</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className={styles.LowerMessage}>
                                                <p>{e.message}</p>
                                            </div>
                                            <div
                                                className={styles.deleteMod}
                                                onClick={() => handleDelete(e._id)}
                                            >
                                                <p>Delete</p> <Trash className="h-5 w-5 ml-2" />
                                            </div>

                                        </div>
                                    );
                                })}
                            </>
                        )}
                    </div>
                </div>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    method="post"
                    className="space-y-5"
                    noValidate
                >
                    <div>
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm font-medium"
                        >
                            Enter Password
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                name="password"
                                type="text"
                                onChange={(e) => handleChange(e.target.value)}
                                required={true}
                                placeholder="••••••••"
                                className={`${styles.checkPaas} block w-full rounded-xl border border-slate-300 bg-white/80 py-3 pl-11 pr-12 text-sm outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800/70`}
                            />

                            <button
                                type="button"
                                id="togglePassword"
                                className="absolute inset-y-0 right-2 my-auto inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 active:scale-95 dark:hover:bg-slate-800"
                                aria-label="Show password"
                            >
                                <svg
                                    id="eyeIcon"
                                    className="h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M2.036 12.322a1 1 0 010-.644C3.423 7.51 7.314 5 12 5c4.687 0 8.578 2.51 9.964 6.678a1 1 0 010 .644C20.578 16.49 16.687 19 12 19c-4.687 0-8.578-2.51-9.964-6.678z"
                                    />
                                    <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {authLoading ? <>
                        <button
                            type="submit"
                            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 active:scale-[0.99] focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
                        >
                            Loading
                        </button>
                    </> : <>
                        <button
                            type="submit"
                            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 active:scale-[0.99] focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/30"
                        >
                            Continue
                        </button>
                    </>}
                </form>
            )}
        </div>
    );
};

export default FollowersPage;
