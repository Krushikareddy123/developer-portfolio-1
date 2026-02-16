"use client";
import { useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

const Navbar = () => {
    useEffect(() => {
        // Initialize Lenis smooth scroll
        lenis = new Lenis({
            duration: 1.7,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1.7,
            touchMultiplier: 2,
            infinite: false,
        });

        // Start paused? Original code stopped it initially, let's keep it running unless there's a loader.
        // lenis.stop(); 
        // The original app stopped lenis and started it after loading or some event?
        // I'll leave it running for now as we removed the complexity of the 3D model loader.

        // Handle smooth scroll animation frame
        function raf(time: number) {
            lenis?.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Handle navigation links scroll manually if needed, or let Lenis handle anchors if configured
        const links = document.querySelectorAll(".header ul a");
        links.forEach((elem) => {
            const element = elem as HTMLAnchorElement;
            element.addEventListener("click", (e) => {
                if (window.innerWidth > 1024) {
                    e.preventDefault();
                    const targetId = element.getAttribute("href")?.substring(1); // remove #
                    if (targetId && lenis) {
                        const target = document.getElementById(targetId);
                        if (target) {
                            lenis.scrollTo(target, {
                                offset: 0,
                                duration: 1.5,
                            });
                        }
                    }
                }
            });
        });

        // Handle resize
        const resizeHandler = () => {
            lenis?.resize();
        };
        window.addEventListener("resize", resizeHandler);

        return () => {
            lenis?.destroy();
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);

    return (
        <>
            <div className="header">
                <Link href="/" className="navbar-title" data-cursor="disable">
                    Logo
                </Link>
                <a
                    href="mailto:redoyanul1234@gmail.com"
                    className="navbar-connect"
                    data-cursor="disable"
                >
                    redoyanul1234@gmail.com
                </a>
                <ul>
                    <li>
                        <a href="#about">
                            <HoverLinks text="ABOUT" />
                        </a>
                    </li>
                    <li>
                        <a href="#work">
                            <HoverLinks text="WORK" />
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            <HoverLinks text="CONTACT" />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="landing-circle1"></div>
            <div className="landing-circle2"></div>
            <div className="nav-fade"></div>
        </>
    );
};

export default Navbar;
