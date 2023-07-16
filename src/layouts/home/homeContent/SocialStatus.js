import React from 'react'
import SocialCard from './socialStaks/SocialCard'

const socialData = [
    {
        name: "FB",
        left: {
            value: "45K",
            title: "friend",
        },
        right: {
            value: "80K",
            title: "comments",
        },
        bgcolor: "#058cf1",

        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",

    },
    {
        name: "Linkedin",
        left: {
            value: "35K",
            title: "feeds",
        },
        right: {
            value: "60K",
            title: "followers",
        },
        icon: "https://img.freepik.com/premium-vector/linkedin-icon_488108-5.jpg",
        bgcolor: "#f6f4f5",

    },
    {
        name: "Tuwiter",
        left: {
            value: "87K",
            title: "friend",
        },
        right: {
            value: "20K",
            title: "likes",
        },
        bgcolor: 'rgb(28 161 241)',
        // icon: "https://9to5mac.com/wp-content/uploads/sites/6/2019/09/Twitter.jpg?quality=82&strip=all&w=1600",
        icon: "https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png",

    }
];


export default function SocialStatus() {
    return (
        <div style={{ display: "flex", justifyContent: 'space-between' }}>
            {socialData.map((val, key) => {
                return (<div key={key} style={{ padding: "10px", width: "100%" }}>
                    <SocialCard data={val} />
                </div>)
            })}
        </div>
    )
}
