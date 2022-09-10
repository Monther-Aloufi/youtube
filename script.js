const section = document.querySelector(".section");
const html = `
    <div class="card">
        <img class="img-video" src="wired_placeholder_dummy.webp" alt="" />
        <a href="#" class="name-video">
          Name video
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            class="icons three-dot"
          >
            <g>
              <path
                d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"
              ></path>
            </g>
          </svg>
        </a>
        <p class="name-channel">Name channel</p>
        <div class="dv">
          <span class="views">Views</span>
          .
          <span class="date">Date</span>
        </div>
    </div>
`;

for (let i = 0; i < 27; i++) {
  section.insertAdjacentHTML("beforeend", html);
}
