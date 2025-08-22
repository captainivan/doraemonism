"use client"
import React, { useEffect, useState } from 'react'
import styles from "@/app/styles/Form.module.css"
import AllHeader from '../components/AllHeader'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Send, TriangleAlert } from 'lucide-react'
import ReCAPTCHA from "react-google-recaptcha";

const Page = () => {
    const [checkToken, setCheckToken] = useState(false)
    const [descNum, setDescNum] = useState(0);
    const [captchaToken, setCaptchaToken] = useState(null);
    const [inputNum, setInputNum] = useState(0);
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        name: "",
        message: ""
    })

    useEffect(() => {
        const token = localStorage.getItem("STATSIG_LOCAL_STORAGE_INTERNAL_STORE_V4")
        if (token === "true") {
            setCheckToken(true)
        }
    }, [])

    const countLetter = (value) => {
        if (value.length <= 200) {
            setDescNum(value.length);
            setData((prev) => ({ ...prev, message: value }))
        } else {
            alert("You have reached your text limit!");
        }
    }
    const countInputLetter = (value) => {
        if (value.length <= 20) {
            setInputNum(value.length);
            setData((prev) => ({ ...prev, name: value }))
        } else {
            alert("You have reached your text limit!");
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!captchaToken) {
            alert("Please complete the captcha");
            return;
        }
        if(data.name.length < 7){
            alert("name should be greater than 7 character");
            return;
        }
        if(data.message.length < 30){
            alert("message should be greater than 30 character");
            return;
        }
        setLoading(true)
        try {
            const api = await fetch("/sendMessage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: data.name,
                    message: data.message,
                    captcha: captchaToken
                })
            });
            const res = await api.json();
            console.log(res)
            setLoading(false)
            if (res.message === "Message sent successfully") {
                alert("Message sent successfully")
                setData({
                    name: "",
                    message: ""
                })
                setInputNum(0)
                setDescNum(0)
                localStorage.setItem("STATSIG_LOCAL_STORAGE_INTERNAL_STORE_V4", true);
                window.location.reload()
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.container}>
            <AllHeader
                Title={"Write Your Blessing"}
                Desc={"Let every devotee feel the warmth of Doraemonism through the magic of your words."}
            />
            <div className={styles.padd}>
                {checkToken ? "You have already sent a message" :
                    <form className={styles.formCont} onSubmit={handleSubmit} >
                        <div className={styles.coverInput}>
                            <Input
                                type='text'
                                placeholder='Write Your Name'
                                name='name'
                                required
                                onChange={(e) => { countInputLetter(e.target.value) }}
                                value={data.name}
                            />
                            <p>
                                {inputNum >= 20 ? (
                                    <span className="text-red-700">{inputNum}</span>
                                ) : (
                                    <span>{inputNum}</span>
                                )}
                                /20
                            </p>
                        </div>
                        <div className={styles.covertextarea}>
                            <Textarea
                                name='message'
                                placeholder='Write Your Message Here'
                                required
                                onChange={(e) => { countLetter(e.target.value) }}
                                value={data.message}
                            />
                            <p>
                                {descNum >= 200 ? (
                                    <span className="text-red-700">{descNum}</span>
                                ) : (
                                    <span>{descNum}</span>
                                )}
                                /200
                            </p>
                        </div>
                        <ReCAPTCHA
                            sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
                            onChange={(token) => {
                                setCaptchaToken(token)
                            }}
                            className='mt-5'
                        />
                        <Button type='submit'>
                            {loading ?
                                <span className='flex items-center justify-center'>Sending <Send className='ml-2' /></span> :
                                "Send Message"
                            }</Button>
                    </form>
                }
            </div>
            <div className={styles.alert}>
                <TriangleAlert className={styles.logoAlert} /> Please do not write anything abusive or hateful. (Pikachuists and Shinchanists are not allowed)
            </div>
        </div>
    )
}

export default Page