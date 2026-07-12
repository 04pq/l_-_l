document.addEventListener("DOMContentLoaded", () => {

    const track = document.getElementById("tickerTrack");

    if (!track) return;

    // نسخ العناصر مرة واحدة
    track.innerHTML += track.innerHTML;

    let offset = 0;
    const speed = 90; // سرعة الحركة (بكسل/ثانية)

    let lastTime = performance.now();

    function animate(now) {

        const delta = (now - lastTime) / 1000;
        lastTime = now;

        offset += speed * delta;

        const first = track.firstElementChild;

        if (first) {

            const style = getComputedStyle(track);
            const gap = parseFloat(style.gap) || 18;

            const firstWidth = first.offsetWidth + gap;

            if (offset >= firstWidth) {

                track.appendChild(first);

                offset -= firstWidth;

            }

        }

        track.style.transform = `translate3d(${-offset}px, 0, 0)`;

        requestAnimationFrame(animate);

    }

    requestAnimationFrame(animate);

});

const cursor = document.querySelector(".mouse-glow");


document.addEventListener("mousemove", e => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});


