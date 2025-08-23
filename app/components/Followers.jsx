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
        { title: "Blue Devotee", color: "bg-blue-200" },
        { title: "Sacred Gadgeteer", color: "bg-pink-200" },
        { title: "Nobi Disciple", color: "bg-purple-200" },
        { title: "Eternal Believer", color: "bg-green-200" },
        { title: "Time Voyager", color: "bg-yellow-200" },
        { title: "Divine Catbot", color: "bg-indigo-200" },
        { title: "Future Seeker", color: "bg-teal-200" },
        { title: "Cosmic Gadgeteer", color: "bg-rose-200" },
        { title: "Blessed Dora", color: "bg-orange-200" },
        { title: "Anywhere Pilgrim", color: "bg-cyan-200" }
    ];

    useEffect(() => {
        const data = async () => {
            setLoading(true)
            try {
                const api = await fetch("/sendMessage");
                const res = await api.json();
                setData(res.data)
                setLoading(false)
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
                                            <div className={`h-12 w-12  rounded-full mr-2.5 flex justify-center items-center ${followersData[Math.floor(Math.random() * followersData.length)].color}`}><User /></div>
                                            <div>
                                                <h3>{e.name}</h3>
                                                <p>{followersData[Math.floor(Math.random() * followersData.length)].title}</p>
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