import React, { useEffect } from 'react'

const Toggler = () => {

    useEffect(() => {
        document.getElementById("toggler").addEventListener("click", () => {
            document.getElementById("sidenav-wrapper").classList.toggle("show");
            document.querySelector("main").classList.toggle("slide");
        })
        document.getElementById("toggler").addEventListener("click", () => {
            document.querySelectorAll(".nav-item").forEach(i => {
                i.addEventListener("click", function close() {
                    document.getElementById("sidenav-wrapper").classList.remove("show");
                    document.querySelector("main").classList.remove("slide");
                })
            })
        })
    }, [])

    return (
        <span id="toggler">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                fill="#fff"
                width="18px"
                height="18px"
            >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
        </span>
    )
}

export default Toggler