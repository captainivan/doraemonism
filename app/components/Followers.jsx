"use client"
import React, { useEffect, useState } from 'react'
import styles from "@/app/styles/Follower.module.css"
import AllHeader from './AllHeader'
import { MessageCirclePlus, User } from 'lucide-react';
import Link from 'next/link';


const Followers = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const followersData = [
        { title: "Dora Devotee", color: "bg-blue-200" },
        { title: "Gadget Fan", color: "bg-pink-200" },
        { title: "Nobi Follower", color: "bg-purple-200" },
        { title: "Blue Believer", color: "bg-green-200" },
        { title: "Time Traveler", color: "bg-yellow-200" },
        { title: "Catbot Companion", color: "bg-indigo-200" },
        { title: "Future Fan", color: "bg-teal-200" },
        { title: "Robot Admirer", color: "bg-rose-200" },
        { title: "Dora Disciple", color: "bg-orange-200" },
        { title: "Anywhere Adventurer", color: "bg-cyan-200" }
    ];

    useEffect(() => {
        const data = async () => {
            try {
                const api = await fetch("/sendMessage");
                const res = await api.json();
                console.log(res);
                setData(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        data()
    }, []);
    return (
        <div className={styles.container} >
            <AllHeader Title={"MESSAGE FROM THE FOLLOWERS"} />
            <div className={styles.messageContainer}>
                <div className={styles.newmessage}>
                    <Link href={"/form"} className={styles.ButtonMess}><MessageCirclePlus className="mr-1" /> Add Message</Link>
                </div>
                <div className={styles.message}>
                    {loading ? (
                        <p className='text-4xl'>Loading...</p>
                    ) :
                        <>
                            {[...data].reverse().map((e, i) => (
                                <div className={styles.messages} key={i} >
                                    <div className={styles.upperMessage}>
                                        <div className={styles.lowerUpperInfo}>
                                            <div className={`h-12 w-12  rounded-full mr-2.5 flex justify-center items-center ${followersData[Math.floor(Math.random() * 10)].color}`}><User /></div>
                                            <div>
                                                <h3>{e.name}</h3>
                                                <p>{followersData[Math.floor(Math.random() * 10)].title}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.LowerMessage}>
                                        <p>{e.message}</p>
                                    </div>
                                </div>
                            ))}
                        </>
                    }
                </div>
            </div>

        </div>
    )
}

export default Followers