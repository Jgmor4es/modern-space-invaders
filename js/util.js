function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

function createScoreLabel({ score = 100, object}) {
    const scoreLabel = document.createElement("label");

    scoreLabel.innerHTML = score;
    scoreLabel.style.position = "absolute";
    scoreLabel.style.cor = "white";
    scoreLabel.style.top = object.position.y + "px";
    scoreLabel.style.left = object.position.x + "px";
    scoreLabel.style.userSelect = "none";

    document.querySelector("#parentDiv").appendChild(scoreLabel);

    gsap.to(scoreLabel, {
        opacity: 0,
        y: -30,
        duration: 0.75,
        onComplete: () => {
            document.querySelector("#parentDiv").removeChild(scoreLabel);
        }
    });
}

function rectangularColission({ retangle1, retangle2 }) {
    return (
        retangle1.position.y + rectangle1.height >= retangle2.position.y &&
        retangle1.position.x + rectangle1.width >= retangle2.position.x &&
        retangle1.position.x <= retangle2.width + retangle2.width 
    );
}

function createParticles({ object, color, fades }) {
    for(let i = 0; i < 15; i++) {
        particle.push(
        new Particle ({
            position: {
                x: object.position.x + object.width / 2,
                y: object.position.y + object.height / 2
            },
            velocity: {
                x: (Math.round() - 0.5) * 2,
                y: (Math.round() - 0.5) * 2
            },
            radius: Math.random() * 3,
            color: color || "#BAA0DE",
            fades: fades
            })
        );
    }
}