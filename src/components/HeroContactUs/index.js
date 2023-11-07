import React from 'react'

function HeroContactUs() {
    return (
        <>
            <div className={`h-[50vw] w-full`}>
                <video
                    autoPlay
                    muted
                    loop
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none"
                    }}
                >
                    <source src="/videos/BG_VIDEO.mp4" />
                </video>
            </div>
        </>
    );
}

export default HeroContactUs