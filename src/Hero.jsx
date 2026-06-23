import { useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

import "./Hero.css";

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let particles = [];
    let animationId;

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    // Particle Class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 3 + 1;

        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;

        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;

        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(56,189,248,${this.opacity})`;

        ctx.beginPath();

        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < 70; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section id="home" className="hero">

      {/* Background Particles */}
      <canvas
        ref={canvasRef}
        className="particles-canvas"
      ></canvas>

      {/* Glow Effects */}
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      {/* Hero Container */}
      <div className="hero-container">

        {/* Left Image */}
        <div className="hero-img">
          <img src="/Akshay.jpeg" alt="Akshay Patil" />
        </div>

        {/* Right Content */}
        <div className="hero-content">

          <h1>
            Hi, I'm <span>Akshay Patil</span> 👋
          </h1>

          {/* Typing Animation */}
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "React Developer",
              2000,
              "Node.js Developer",
              2000,
              "Java Programmer",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="typing"
          />

          {/* Description */}
          <p className="hero-description">
            I create modern, responsive and user-friendly
            web applications using React, Node.js and
            JavaScript. Passionate about building elegant
            digital experiences and solving real-world
            problems through code.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <a
              href="#contact"
              className="btn btn-primary"
            >
              Hire Me
            </a>

            {/* <a
              href="/Akshay_Resume.pdf"
              className="btn btn-outline"
              download
            >
              Download CV
            </a> */}

          </div>

          {/* Social Icons */}
          <div className="social-links">

            <a
              href="https://linkedin.com/in/akshaypatil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/akshaypatil2157"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://wa.me/919370496177"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://instagram.com/akshay_patil2157"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;